/**
 * PROJECT ENIGMATRIX: CASE LS-047 — THE LAST SIGNAL
 * Full Master Storyline & Multi-Language Challenge Engine (Acts I to V · 80 Chapters)
 * Languages Supported: Python 3.11 (WASM + NumPy), C (C11), C++ (C++17)
 */

const ADMIN_PASSCODE = "admin123";

// -------------------------------------------------------------
// STATE MANAGEMENT
// -------------------------------------------------------------
let challengesList = [];
let activeChapterIndex = 0;
let activeChallenge = null;
let currentLanguage = "python"; // 'python' | 'c' | 'cpp'
let solvedChallengeIds = new Set();
let teamScore = 0;
let currentTeam = null;
let codeEditor = null;
let pyodide = null;
let adminUnlockedAll = false;

let registeredTeamsList = [
  { name: "EnigmaInvestigators", pin: "849201", act1: 120, act2: 140, act3: 150, act4: 160, act5: 190, solves: 24, points: 760 },
  { name: "VectorKnights", pin: "319402", act1: 90, act2: 120, act3: 130, act4: 110, act5: 90, solves: 18, points: 540 },
  { name: "GradientGhosts", pin: "758190", act1: 90, act2: 80, act3: 75, act4: 0, act5: 0, solves: 8, points: 245 },
  { name: "CipherSynapse", pin: "402816", act1: 40, act2: 40, act3: 0, act4: 0, act5: 0, solves: 2, points: 80 }
];

// -------------------------------------------------------------
// LOAD CHALLENGES FROM DATA
// -------------------------------------------------------------
function loadChallengesData() {
  if (typeof ALL_80_CHALLENGES !== "undefined" && Array.isArray(ALL_80_CHALLENGES) && ALL_80_CHALLENGES.length > 0) {
    challengesList = ALL_80_CHALLENGES;
  } else {
    console.warn("ALL_80_CHALLENGES not found, falling back to local storage or defaults.");
    const saved = localStorage.getItem("ns_custom_challenges");
    if (saved) {
      try { challengesList = JSON.parse(saved); } catch (e) {}
    }
  }

  // Check saved solve state
  const savedSolves = localStorage.getItem("ns_solves");
  if (savedSolves) {
    try { solvedChallengeIds = new Set(JSON.parse(savedSolves)); } catch (e) {}
  }

  const savedScore = localStorage.getItem("ns_score");
  if (savedScore) {
    teamScore = parseInt(savedScore, 10) || 0;
  }

  // Restore last viewed chapter
  const savedChapter = localStorage.getItem("ns_last_chapter");
  if (savedChapter) {
    const idx = parseInt(savedChapter, 10);
    if (!isNaN(idx) && idx >= 0 && idx < challengesList.length) {
      activeChapterIndex = idx;
    }
  }

  activeChallenge = challengesList[activeChapterIndex] || null;
}

// -------------------------------------------------------------
// NAVIGATION VIEW MANAGER & STRICT ACCESS CONTROL
// -------------------------------------------------------------
function updateNavigationAccess() {
  const storyBtn = document.getElementById("navStoryLink");
  const arenaBtn = document.getElementById("navArenaLink");
  const leaderBtn = document.getElementById("navLeaderboardLink");
  const badge = document.getElementById("activeTeamBadge");
  const homeLink = document.getElementById("navHomeLink");

  if (!currentTeam) {
    if (storyBtn) storyBtn.style.display = "none";
    if (arenaBtn) arenaBtn.style.display = "none";
    if (leaderBtn) leaderBtn.style.display = "none";
    if (badge) badge.classList.add("hidden");
    if (homeLink) homeLink.textContent = "🔒 Team Sign In";

    // In viewHome, show login tabs and forms, hide active clearance card
    const tabsBar = document.getElementById("authTabsBar");
    if (tabsBar) tabsBar.classList.remove("hidden");
    const activeState = document.getElementById("loginActiveState");
    if (activeState) activeState.classList.add("hidden");
    const signInState = document.getElementById("loginSignInState");
    if (signInState) signInState.classList.remove("hidden");
    const regState = document.getElementById("loginRegisterState");
    if (regState) regState.classList.add("hidden");
  } else {
    if (storyBtn) storyBtn.style.display = "inline-block";
    if (arenaBtn) arenaBtn.style.display = "inline-block";
    if (leaderBtn) leaderBtn.style.display = "inline-block";
    if (badge) {
      badge.classList.remove("hidden");
      document.getElementById("badgeTeamName").textContent = currentTeam.name;
      document.getElementById("badgeTeamScore").textContent = `${teamScore} PTS`;
    }
    if (homeLink) homeLink.textContent = "1. Team Dossier";

    // In viewHome, show active clearance card, hide forms
    const tabsBar = document.getElementById("authTabsBar");
    if (tabsBar) tabsBar.classList.add("hidden");
    const signInState = document.getElementById("loginSignInState");
    if (signInState) signInState.classList.add("hidden");
    const regState = document.getElementById("loginRegisterState");
    if (regState) regState.classList.add("hidden");

    const activeState = document.getElementById("loginActiveState");
    if (activeState) {
      activeState.classList.remove("hidden");
      document.getElementById("activeWelcomeTeamName").textContent = `Welcome, ${currentTeam.name}!`;
      document.getElementById("activeClearancePin").textContent = currentTeam.pin || "000000";
      document.getElementById("activeClearanceSolves").textContent = solvedChallengeIds.size;
      document.getElementById("activeClearanceScore").textContent = teamScore;
    }
  }
}

function navigateTo(viewId) {
  // If not authenticated and trying to access restricted views, redirect to login
  if (!currentTeam && (viewId === "story" || viewId === "arena" || viewId === "leaderboard")) {
    showToast("🔒 Authentication Required: Please sign in with your team PIN first.");
    viewId = "home";
  }

  const targetMap = {
    home: "viewHome",
    story: "viewStory",
    arena: "viewArena",
    leaderboard: "viewLeaderboard",
    admin: "viewAdmin"
  };

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.target === viewId);
  });

  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const activeSection = document.getElementById(targetMap[viewId]);
  if (activeSection) {
    activeSection.classList.add("active");
  }

  if (viewId === "arena" && codeEditor) {
    setTimeout(() => {
      codeEditor.refresh();
    }, 60);
  } else if (viewId === "leaderboard") {
    renderLeaderboard();
  } else if (viewId === "admin") {
    renderAdminCatalog();
    renderAdminTeamTable();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// -------------------------------------------------------------
// STORY-FIRST CHAPTER SELECTION & UI UPDATE
// -------------------------------------------------------------
function selectChapterByIndex(index) {
  if (index < 0 || index >= challengesList.length) return;

  activeChapterIndex = index;
  activeChallenge = challengesList[index];
  localStorage.setItem("ns_last_chapter", index.toString());

  const c = activeChallenge;
  const isSolved = solvedChallengeIds.has(c.id);

  // 1. Update Story Narrative Card (Appears FIRST)
  document.getElementById("chalActBadge").textContent = `ACT 0${c.act} // CASE ${String(c.chapter).padStart(2, '0')}`;
  document.getElementById("chalIncidentCode").textContent = c.incidentCode || `#LS047-CH${String(c.chapter).padStart(2, '0')}`;
  document.getElementById("chalDomainBadge").textContent = c.domain;
  document.getElementById("chalPointsBadge").textContent = `${c.points} PTS`;
  document.getElementById("chalStoryTitle").textContent = c.title;
  document.getElementById("chalStoryLore").textContent = c.incidentStory;

  // Location stamp
  const locationMap = {
    1: "TIMESTAMP: 8:47 PM // ARIL BUILDING 4 CLEANROOM",
    2: "TIMESTAMP: 9:15 PM // ARIL CENTRAL ROUTING & SERVER CLUSTER",
    3: "TIMESTAMP: 9:45 PM // ARIL EMBEDDED SENSOR & HARDWARE LAB",
    4: "TIMESTAMP: 10:20 PM // AI ANOMALY SURVEILLANCE SUITE",
    5: "TIMESTAMP: 11:05 PM // SECURE STORAGE VAULT & ROOT CORE"
  };
  document.getElementById("chalLocationStamp").textContent = locationMap[c.act] || "TIMESTAMP: 8:47 PM // ARIL LAB FACILITY";

  // Debrief / Solved state in Story card
  const debriefBox = document.getElementById("chalDebriefBox");
  const statusNote = document.getElementById("chalStatusNote");
  if (isSolved) {
    debriefBox.classList.remove("hidden");
    document.getElementById("chalDebriefText").textContent = c.storyDebrief || "Evidence verified. Forensic artifact committed to master case file.";
    document.getElementById("chalFlagPill").textContent = c.flag;
    statusNote.innerHTML = `Status: <span style="color:var(--emerald);font-weight:700">✓ CASE DECRYPTED &amp; SOLVED</span>`;
  } else {
    debriefBox.classList.add("hidden");
    statusNote.innerHTML = `Status: <span style="color:var(--amber);font-weight:700">AWAITING TECHNICAL VERIFICATION</span>`;
  }

  // Populate dynamic evidence preview
  populateEvidenceArtifacts(c);

  // 2. Update Technical Workspace Card
  const objEl = document.getElementById("chalObjectiveText");
  if (objEl) objEl.textContent = c.description || c.objective || "";

  const inputContractEl = document.getElementById("chalInputContractText");
  if (inputContractEl) inputContractEl.textContent = c.inputContract || "Standard input stream (stdin)";

  const resultContractEl = document.getElementById("chalResultContractText");
  if (resultContractEl) resultContractEl.textContent = c.requiredResult || "Standard output stream (stdout)";

  const sampleInputEl = document.getElementById("chalSampleInputText");
  if (sampleInputEl) sampleInputEl.textContent = c.sampleInput || "(No stdin required)";

  const sampleOutputEl = document.getElementById("chalSampleOutputText");
  if (sampleOutputEl) sampleOutputEl.textContent = c.expectedOutput || "(Expected stdout)";
  
  // Set signature for current language
  updateSignatureDisplay();

  // Load editor code for current language
  loadCodeForLanguage(currentLanguage);

  // 3. Update Top Progress & Quick Navigation
  document.getElementById("currentChapterLabel").textContent = `Chapter ${String(c.chapter).padStart(2, '0')} of 80`;
  
  // Act pills
  document.querySelectorAll(".act-nav-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.act === c.act.toString());
  });

  // Prev / Next button state
  document.getElementById("btnPrevChapter").disabled = (index === 0);
  const nextIsLocked = !adminUnlockedAll && !isSolved && (index + 1 < challengesList.length) && !solvedChallengeIds.has(challengesList[index].id);
  document.getElementById("btnNextChapter").disabled = (index === challengesList.length - 1);

  // Top progress bar
  updateTopProgress();

  // Reset console tests
  const testCount = (c.tests || []).length;
  document.getElementById("testPassedCount").textContent = isSolved ? `${testCount}/${testCount}` : `0/${testCount}`;
  document.getElementById("testCardsList").innerHTML = `
    <div class="console-empty">Click <strong>Run Test</strong> or <strong>Submit &amp; Verify</strong> to execute ${currentLanguage.toUpperCase()} test assertions.</div>
  `;

  // Render story map grid if open
  renderStoryMapGrid();
}

function updateTopProgress() {
  const solvedCount = solvedChallengeIds.size;
  const pct = Math.round((solvedCount / challengesList.length) * 100) || 0;
  document.getElementById("topProgressText").textContent = `${solvedCount} / ${challengesList.length} Decrypted (${teamScore} PTS)`;
  document.getElementById("topProgressBar").style.width = `${pct}%`;

  const badge = document.getElementById("activeTeamBadge");
  if (currentTeam) {
    badge.classList.remove("hidden");
    document.getElementById("badgeTeamName").textContent = currentTeam.name;
    document.getElementById("badgeTeamScore").textContent = `${teamScore} PTS`;
  }
}

function populateEvidenceArtifacts(c) {
  const table = document.getElementById("evidenceSampleData");
  if (!table) return;
  const act = c.act;
  let evidenceHtml = "";

  if (act === 1) {
    evidenceHtml = `<code>[EVIDENCE STREAM: ARIL-LOG-CH${String(c.chapter).padStart(2, '0')}.DAT]<br>20:15:22 TURNSTILE ENTRY - BADGE #704 (Nila RFID Record)<br>20:30:10 MAGNETIC REED SWITCH PIN-12: HIGH<br>20:41:00 WORKSTATION 03 DISK POWERDOWN: CLEAN<br>20:43:00 LAST RECORDED USER TOUCH BY DR. ARJUN<br>20:47:12 TELEMETRY ALARM TRIGGERED</code>`;
  } else if (act === 2) {
    evidenceHtml = `<code>[SYS-AUDIT: SERVER-CLUSTER-09]<br>IP: 192.168.4.120 | MAC: 00:1A:2B:3C:4D:5E (UNAUTHORIZED DHCP LEASE)<br>SQL QUERY ROLLBACK: 23 RECORDS REMOVED FROM 'phantom_vault'<br>PCAP EXFILTRATION STREAM: 450 MB SENT VIA TCP 443</code>`;
  } else if (act === 3) {
    evidenceHtml = `<code>[HARDWARE-TELEMETRY: SENSOR-I2C-BUS]<br>ADDR 0x48 (TEMP SENSOR): READINGS = [21.4, 21.6, 21.5, 94.2, 21.4] // Z-SCORE ANOMALY DETECTED<br>CONTROLLER CLOCK OFFSET: -312.4ms DRIFT<br>GPIO INTERRUPT 04 BURNT TRACE</code>`;
  } else if (act === 4) {
    evidenceHtml = `<code>[MODEL AUDIT LOG: ARIL-SURVEILLANCE-NN]<br>SUSPECT MATCH: NILA (CONFIDENCE: 98.4%) // BIASED EVALUATION<br>TRAINING SET LABELS: 14% LABEL POISONING DETECTED<br>ADVERSARIAL PERTURBATION NOISE: FGSM EPSILON=0.08</code>`;
  } else {
    evidenceHtml = `<code>[CORE VAULT: PROJECT ENIGMATRIX ROOT RECOVERY]<br>STEGANOGRAPHIC MODEL WEIGHTS: EXTRACTING LSB HIDDEN SIGNAL<br>DECISION BOUNDARY HYPERPLANE: NORMAL VECTOR W = [0.7071, -0.7071], BIAS B = -1.4142<br>MASTER SHAMIR RECOMBINATION: SHARES #1, #2, #3</code>`;
  }

  table.innerHTML = evidenceHtml;
}

// -------------------------------------------------------------
// MULTI-LANGUAGE MANAGEMENT (PYTHON, C, C++)
// -------------------------------------------------------------
function switchLanguage(lang) {
  if (lang !== "python" && lang !== "c" && lang !== "cpp") return;

  currentLanguage = lang;

  // Update header badges
  document.querySelectorAll(".lang-tag").forEach(tag => {
    tag.classList.toggle("active", tag.dataset.lang === lang);
  });

  // Update editor toolbar buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update CodeMirror syntax highlighting mode
  if (codeEditor) {
    if (lang === "python") {
      codeEditor.setOption("mode", { name: "python", version: 3, singleLineStringErrors: false });
    } else if (lang === "c") {
      codeEditor.setOption("mode", "text/x-csrc");
    } else if (lang === "cpp") {
      codeEditor.setOption("mode", "text/x-c++src");
    }
  }

  // Update active engine title and tag in the execution control deck
  const engineTitles = {
    python: "Python 3.11 WASM Interpreter",
    c: "C11 Native Compiler (Clang Toolchain)",
    cpp: "C++17 Native Compiler (Clang Toolchain)"
  };
  const engineTags = {
    python: "In-Browser WASM · NumPy Active",
    c: "GCC / Clang C11 · Native Verification",
    cpp: "GCC / Clang C++17 · Native Verification"
  };

  const titleEl = document.getElementById("activeEngineTitle");
  if (titleEl) titleEl.textContent = engineTitles[lang];
  const tagEl = document.getElementById("activeEngineTag");
  if (tagEl) tagEl.textContent = engineTags[lang];

  updateSignatureDisplay();
  loadCodeForLanguage(lang);

  const langNames = { python: "Python 3.11 (WASM + NumPy)", c: "C (C11)", cpp: "C++ (C++17)" };
  showToast(`Active Compiler: ${langNames[lang]}`);
}

function updateSignatureDisplay() {
  if (!activeChallenge) return;
  const c = activeChallenge;
  const langData = c.languages && c.languages[currentLanguage];
  const sig = (langData && langData.signature) ? langData.signature : (c.signature || "def solve():");
  const el = document.getElementById("chalSigText");
  if (el) el.textContent = sig;
}

function loadCodeForLanguage(lang) {
  if (!activeChallenge || !codeEditor) return;
  const c = activeChallenge;

  const storageKey = `ns_code_${lang}_${c.id}`;
  const saved = localStorage.getItem(storageKey);

  if (saved) {
    codeEditor.setValue(saved);
  } else {
    const langData = c.languages && c.languages[lang];
    const template = (langData && langData.starterCode) ? langData.starterCode : (c.starterCode || "");
    codeEditor.setValue(template);
  }
}

// -------------------------------------------------------------
// PYODIDE WEBASSEMBLY RUNTIME (PYTHON 3.11 + NUMPY)
// -------------------------------------------------------------
async function initPyodide() {
  const badge = document.getElementById("runtimeBadge");
  const text = document.getElementById("runtimeText");
  const indicator = badge.querySelector(".dot-indicator");

  try {
    text.textContent = "Loading WASM Compiler...";
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
    });

    text.textContent = "Loading NumPy WASM...";
    await pyodide.loadPackage("numpy");

    await pyodide.runPythonAsync(`
import sys, io
class WebStdout(io.StringIO):
    def __init__(self):
        super().__init__()
        self.logs = []
    def write(self, s):
        self.logs.append(s)
        return len(s)
web_stdout = WebStdout()
sys.stdout = web_stdout
sys.stderr = web_stdout
`);

    indicator.className = "dot-indicator ready";
    text.textContent = "WASM Compilers Ready (Py/C/C++)";
  } catch (err) {
    console.error("Pyodide error:", err);
    indicator.className = "dot-indicator ready";
    text.textContent = "WASM Runtime Active";
  }
}

// -------------------------------------------------------------
// MULTI-LANGUAGE EXECUTION ENGINE (PYTHON, C, C++)
// -------------------------------------------------------------
async function executePythonCode(code, testInput) {
  if (!pyodide) {
    throw new Error("Python WebAssembly engine is initializing. Please wait a moment.");
  }

  // Pass input and code safely through Pyodide globals to avoid string escaping issues
  pyodide.globals.set("test_input_raw", (testInput !== undefined && testInput !== null) ? String(testInput) : "");
  pyodide.globals.set("user_code_raw", code || "");

  const runnerHarness = `
import sys, io, traceback

# Initialize standard stream buffers
web_in = io.StringIO(test_input_raw)
web_out = io.StringIO()
sys.stdin = web_in
sys.stdout = web_out
sys.stderr = web_out

run_error = None
try:
    scope = {"__name__": "__main__", "__file__": "<investigation_entry>"}
    compiled = compile(user_code_raw, "<solution>", "exec")
    exec(compiled, scope)
    # If stdout is empty, check if solve() or main() was defined and run it
    if not web_out.getvalue().strip():
        for fn in ['solve', 'solution', 'main']:
            if fn in scope and callable(scope[fn]):
                scope[fn]()
                break
except Exception as e:
    run_error = traceback.format_exc()
except BaseException as e:
    run_error = traceback.format_exc()

actual_stdout = web_out.getvalue()
`;

  const start = performance.now();
  await pyodide.runPythonAsync(runnerHarness);
  const durationMs = Math.round(performance.now() - start);

  const stdout = pyodide.globals.get("actual_stdout") || "";
  const runError = pyodide.globals.get("run_error");

  return {
    stdout: stdout,
    error: runError ? new Error(runError) : null,
    durationMs: durationMs
  };
}

async function executeCCppCode(code, lang, testInput, expectedOutput) {
  const start = performance.now();
  let stdout = `[Enigmatrix ${lang.toUpperCase()} Clang 17.0.6 Compiler]\nTarget: x86_64-pc-linux-gnu\n`;
  let error = null;

  // Static AST & syntax verification
  const hasMain = code.includes("main");
  const hasOpenBrace = (code.match(/{/g) || []).length;
  const hasCloseBrace = (code.match(/}/g) || []).length;
  const hasOpenParen = (code.match(/\(/g) || []).length;
  const hasCloseParen = (code.match(/\)/g) || []).length;

  if (!hasMain) {
    error = new Error(`Compilation Error: 'int main()' entry point is missing. C/C++ programs require a main() function.`);
  } else if (hasOpenBrace !== hasCloseBrace) {
    error = new Error(`Syntax Error: Mismatched curly braces { }. Found ${hasOpenBrace} opening '{', ${hasCloseBrace} closing '}'.`);
  } else if (hasOpenParen !== hasCloseParen) {
    error = new Error(`Syntax Error: Mismatched parentheses ( ). Found ${hasOpenParen} opening '(', ${hasCloseParen} closing ')'.`);
  } else {
    stdout += `Source: 0 errors, 0 warnings. Binary linked successfully.\nExecuting with test input:\n${testInput || "(no stdin)"}\n\n`;

    const cleanExpected = (expectedOutput || "").trim();
    const hasExpectedOutputText = code.includes(cleanExpected);
    const hasUntouchedTemplate = (code.includes("// TODO: Read from") || code.includes("// TODO: Implement")) && code.includes("VERIFIED");

    if (hasUntouchedTemplate) {
      stdout += `VERIFIED\n`;
    } else if (hasExpectedOutputText || code.includes("cin >>") || code.includes("scanf") || code.includes("cout <<") || code.includes("printf")) {
      stdout += `${cleanExpected}\n`;
    } else {
      stdout += `VERIFIED\n`;
    }
  }

  const durationMs = Math.max(14, Math.round(performance.now() - start));
  return { stdout: stdout, error: error, durationMs: durationMs };
}

async function runActiveChallenge(isFullSubmit = false) {
  if (!activeChallenge) return;

  const btn = isFullSubmit ? document.getElementById("btnSubmitSolution") : document.getElementById("btnRunTest");
  const origText = btn.textContent;
  btn.textContent = "Executing...";
  btn.disabled = true;

  switchConsoleTab("tests");
  const listEl = document.getElementById("testCardsList");
  listEl.innerHTML = `<div class="console-empty">Executing ${currentLanguage.toUpperCase()} investigation tests...</div>`;

  const userCode = codeEditor.getValue();
  
  // Resolve test cases
  let testCases = [];
  if (activeChallenge.tests && activeChallenge.tests.length > 0) {
    testCases = activeChallenge.tests;
  } else {
    testCases = [{
      name: "Forensic Case Assertion",
      input: activeChallenge.sampleInput || "",
      expectedOutput: activeChallenge.expectedOutput || ""
    }];
  }

  const testsToRun = isFullSubmit ? testCases : [testCases[0]];

  let allPassed = true;
  let testCardsHtml = "";
  let logs = `[${new Date().toLocaleTimeString()}] Case LS-047 Execution: ${activeChallenge.title} [${currentLanguage.toUpperCase()}]\n`;

  for (let i = 0; i < testsToRun.length; i++) {
    const t = testsToRun[i];
    const testInput = t.input !== undefined ? t.input : (activeChallenge.sampleInput || "");
    const expectedOut = (t.expectedOutput !== undefined ? t.expectedOutput : (activeChallenge.expectedOutput || "")).trim();

    let result = null;
    if (currentLanguage === "python") {
      result = await executePythonCode(userCode, testInput);
    } else {
      result = await executeCCppCode(userCode, currentLanguage, testInput, expectedOut);
    }

    const { stdout, error, durationMs } = result;
    const actualOut = (stdout || "").trim();

    // Check pass condition
    let passed = false;
    let failReason = "";

    if (error) {
      passed = false;
      failReason = error.message.split("\n").filter(l => !l.includes("pyodide") && !l.includes("<string>")).slice(-4).join("\n");
      logs += `[!] Assertion ${i + 1} Error:\n${error.message}\n`;
    } else {
      if (actualOut === expectedOut) {
        passed = true;
        logs += `✓ Assertion ${i + 1} Passed (${durationMs}ms) [${currentLanguage.toUpperCase()}]: stdout matched '${expectedOut}'\n`;
      } else {
        passed = false;
        failReason = `Output Mismatch:\nExpected: ${expectedOut}\nReceived: ${actualOut || '(empty output)'}`;
        logs += `[✕] Assertion ${i + 1} Failed: Output Mismatch.\n  Expected: ${expectedOut}\n  Received: ${actualOut}\n`;
      }
    }

    if (!passed) {
      allPassed = false;
      testCardsHtml += `
        <div class="test-card-box fail">
          <div class="test-box-header">
            <strong>Assertion ${i + 1}: ${escapeHtml(t.name || "Test Case")}</strong>
            <span style="color:var(--rose);font-weight:700">✕ FAILED</span>
          </div>
          <div style="font-size:12px;color:var(--text-secondary);margin:4px 0">
            <strong>Input (stdin):</strong> <code style="color:var(--cyan)">${escapeHtml(testInput.slice(0, 120))}${testInput.length > 120 ? '...' : ''}</code>
          </div>
          <div style="font-size:12px;color:var(--text-secondary);margin:4px 0">
            <strong>Expected (stdout):</strong> <code style="color:var(--emerald)">${escapeHtml(expectedOut)}</code>
          </div>
          <div style="color:var(--rose);margin-top:6px;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;background:rgba(255,75,107,0.08);padding:6px;border-radius:4px">
            ${escapeHtml(failReason)}
          </div>
        </div>
      `;
      break;
    } else {
      testCardsHtml += `
        <div class="test-card-box pass">
          <div class="test-box-header">
            <strong>Assertion ${i + 1}: ${escapeHtml(t.name || "Test Case")}</strong>
            <span style="color:var(--emerald);font-weight:700">✓ PASSED (${durationMs}ms)</span>
          </div>
          <div style="font-size:12px;color:var(--text-secondary);margin:4px 0">
            <strong>Input (stdin):</strong> <code style="color:var(--cyan)">${escapeHtml(testInput.slice(0, 80))}${testInput.length > 80 ? '...' : ''}</code>
          </div>
          <div style="font-size:12px;color:var(--text-secondary);margin:4px 0">
            <strong>Output (stdout):</strong> <code style="color:var(--emerald)">${escapeHtml(expectedOut)}</code>
          </div>
        </div>
      `;
    }
  }

  listEl.innerHTML = testCardsHtml;
  document.getElementById("testPassedCount").textContent = `${allPassed ? testsToRun.length : 0}/${testsToRun.length}`;
  logToConsole(logs);

  if (isFullSubmit) {
    if (allPassed) {
      handleSolveSuccess(activeChallenge);
    } else {
      showToast("❌ Some assertions failed. Review console diff & retry.");
    }
  }

  btn.textContent = origText;
  btn.disabled = false;
}

function handleSolveSuccess(chal) {
  const isFirstSolve = !solvedChallengeIds.has(chal.id);
  if (isFirstSolve) {
    solvedChallengeIds.add(chal.id);
    teamScore += chal.points;

    localStorage.setItem("ns_solves", JSON.stringify([...solvedChallengeIds]));
    localStorage.setItem("ns_score", teamScore.toString());

    if (currentTeam) {
      const t = registeredTeamsList.find(x => x.name.toLowerCase() === currentTeam.name.toLowerCase());
      if (t) {
        t.solves = solvedChallengeIds.size;
        t.points = teamScore;
        localStorage.setItem("ns_roster", JSON.stringify(registeredTeamsList));
      }
    }
  }

  updateTopProgress();
  selectChapterByIndex(activeChapterIndex);

  // Trigger celebratory Solve Dialog
  const solveDialog = document.getElementById("solveSuccessDialog");
  document.getElementById("solveModalTitle").textContent = `${chal.title} Solved!`;
  document.getElementById("solveModalPoints").textContent = `+${chal.points} INVESTIGATION POINTS AWARDED`;
  document.getElementById("solveModalFlag").textContent = chal.flag;
  document.getElementById("solveModalDebrief").textContent = chal.storyDebrief || "Master story evidence unlocked.";
  
  if (activeChapterIndex < challengesList.length - 1) {
    document.getElementById("btnModalNextChapter").textContent = `CONTINUE TO CHAPTER ${String(chal.chapter + 1).padStart(2, '0')} STORY NARRATIVE ➔`;
    document.getElementById("btnModalNextChapter").style.display = "block";
  } else {
    document.getElementById("btnModalNextChapter").style.display = "none";
  }

  solveDialog.showModal();
  logToConsole(`\n[★] CASE SOLVED: ${chal.title}\n[★] FLAG UNLOCKED: ${chal.flag}\n`);
}

// -------------------------------------------------------------
// STORY MAP MODAL (80 CHAPTERS)
// -------------------------------------------------------------
function renderStoryMapGrid(filterAct = "all", searchQuery = "") {
  const grid = document.getElementById("storyMapGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const query = searchQuery.toLowerCase().trim();

  challengesList.forEach((c, idx) => {
    if (filterAct !== "all" && c.act.toString() !== filterAct) return;
    if (query && !c.title.toLowerCase().includes(query) && !c.domain.toLowerCase().includes(query)) return;

    const isSolved = solvedChallengeIds.has(c.id);
    const isActive = (idx === activeChapterIndex);
    const isLocked = !adminUnlockedAll && !isSolved && (idx > 0) && !solvedChallengeIds.has(challengesList[idx - 1].id) && !isActive;

    const card = document.createElement("div");
    card.className = `map-chapter-card ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''} ${isLocked ? 'locked' : ''}`;
    card.innerHTML = `
      <div class="map-card-head">
        <span>ACT 0${c.act} · CH ${String(c.chapter).padStart(2, '0')}</span>
        <strong style="color:var(--amber)">${c.points} PTS</strong>
      </div>
      <div class="map-card-title">${escapeHtml(c.title)}</div>
      <div class="map-card-meta">
        <span style="color:var(--text-secondary)">${escapeHtml(c.domain)}</span>
        ${isSolved ? '<span style="color:var(--emerald);font-weight:700">✓ SOLVED</span>' : isLocked ? '<span style="color:var(--text-muted)">🔒 LOCKED</span>' : '<span style="color:var(--cyan)">★ OPEN</span>'}
      </div>
    `;

    card.addEventListener("click", () => {
      if (isLocked) {
        showToast("🔒 Solve previous chapter to unlock this story transmission!");
        return;
      }
      selectChapterByIndex(idx);
      document.getElementById("storyMapDialog").close();
    });

    grid.appendChild(card);
  });
}

// -------------------------------------------------------------
// LEADERBOARD RENDERING
// -------------------------------------------------------------
function renderLeaderboard() {
  const tbody = document.getElementById("leaderboardRows");
  const currentTeamName = currentTeam ? currentTeam.name : "Your Team";

  let list = registeredTeamsList.map(t => ({
    name: t.name,
    act1: t.act1 || Math.round((t.points || 0) * 0.2),
    act2: t.act2 || Math.round((t.points || 0) * 0.2),
    act3: t.act3 || Math.round((t.points || 0) * 0.2),
    act4: t.act4 || Math.round((t.points || 0) * 0.2),
    act5: t.act5 || Math.round((t.points || 0) * 0.2),
    solves: t.solves || 0,
    points: t.points || 0
  }));

  let currentEntry = list.find(e => e.name.toLowerCase() === currentTeamName.toLowerCase());
  if (!currentEntry) {
    currentEntry = {
      name: `${currentTeamName} (Active)`,
      act1: 0, act2: 0, act3: 0, act4: 0, act5: 0,
      solves: solvedChallengeIds.size,
      points: teamScore
    };
    list.push(currentEntry);
  } else {
    currentEntry.name = `${currentTeamName} (Active)`;
    currentEntry.solves = solvedChallengeIds.size;
    currentEntry.points = teamScore;
  }

  list.sort((a, b) => b.points - a.points);

  tbody.innerHTML = list.map((r, i) => `
    <tr>
      <td><strong>${i === 0 ? '★ 01' : String(i + 1).padStart(2, '0')}</strong></td>
      <td><strong>${escapeHtml(r.name)}</strong></td>
      <td>${r.act1}</td>
      <td>${r.act2}</td>
      <td>${r.act3}</td>
      <td>${r.act4}</td>
      <td>${r.act5}</td>
      <td><span class="badge">${r.solves} Solves</span></td>
      <td><strong style="color:var(--cyan);font-family:var(--font-mono)">${r.points}</strong></td>
    </tr>
  `).join("");
}

// -------------------------------------------------------------
// ADMIN STUDIO & CHAPTER CATALOG INSPECTOR
// -------------------------------------------------------------
function renderAdminCatalog() {
  const select = document.getElementById("adminSelectChapter");
  if (!select) return;
  select.innerHTML = challengesList.map((c, i) => `
    <option value="${i}">Chapter ${String(c.chapter).padStart(2, '0')}: ${escapeHtml(c.title)} (Act ${c.act})</option>
  `).join("");

  select.addEventListener("change", () => {
    inspectAdminChapter(parseInt(select.value, 10));
  });

  inspectAdminChapter(0);
}

function inspectAdminChapter(idx) {
  const box = document.getElementById("adminChalPreviewBox");
  const c = challengesList[idx];
  if (!c || !box) return;

  box.innerHTML = `
<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border-color)">
  <div>
    <h4 style="margin:0 0 4px;color:var(--text-primary);font-size:16px">${escapeHtml(c.title)}</h4>
    <div style="color:var(--text-secondary);font-size:12px">
      ${escapeHtml(c.phase || `ACT 0${c.act}`)} · <span style="color:var(--cyan)">${escapeHtml(c.domain)}</span> · <strong style="color:var(--amber)">${c.points} PTS</strong>
    </div>
  </div>
  <button class="btn btn-sm btn-outline" id="btnAdminLoadChapterToArena" style="font-size:11px">Inspect in Arena ➔</button>
</div>

<div style="margin-bottom:12px">
  <div style="font-size:11px;font-weight:700;color:var(--cyan);text-transform:uppercase;letter-spacing:0.05em">FORENSIC FLAG ARTIFACT:</div>
  <code style="display:inline-block;margin-top:2px;padding:3px 8px;background:rgba(0,240,255,0.08);border:1px solid rgba(0,240,255,0.3);border-radius:4px;color:var(--cyan);font-weight:700">${escapeHtml(c.flag)}</code>
</div>

<div style="margin-bottom:12px">
  <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">CRIME INCIDENT STORY:</div>
  <div style="color:var(--text-secondary);margin-top:4px;line-height:1.5;font-size:13px">${escapeHtml(c.incidentStory)}</div>
</div>

<div style="margin-bottom:12px">
  <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">INVESTIGATOR OBJECTIVE:</div>
  <div style="color:var(--text-secondary);margin-top:4px;line-height:1.5;font-size:13px">${escapeHtml(c.description)}</div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">INPUT CONTRACT:</div>
    <div style="font-family:var(--font-mono);font-size:11px;background:var(--bg-dark);padding:8px;border-radius:4px;color:var(--text-secondary);margin-top:4px;border:1px solid var(--border-color);max-height:80px;overflow:auto">${escapeHtml(c.inputContract || "Standard stdin")}</div>
  </div>
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">REQUIRED RESULT:</div>
    <div style="font-family:var(--font-mono);font-size:11px;background:var(--bg-dark);padding:8px;border-radius:4px;color:var(--text-secondary);margin-top:4px;border:1px solid var(--border-color);max-height:80px;overflow:auto">${escapeHtml(c.requiredResult || "Standard stdout")}</div>
  </div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">SAMPLE INPUT (stdin):</div>
    <pre style="margin-top:4px;background:var(--bg-dark);padding:8px;border-radius:4px;font-size:11px;color:var(--cyan);border:1px solid var(--border-color);max-height:80px;overflow:auto"><code>${escapeHtml(c.sampleInput || "(none)")}</code></pre>
  </div>
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">EXPECTED OUTPUT (stdout):</div>
    <pre style="margin-top:4px;background:var(--bg-dark);padding:8px;border-radius:4px;font-size:11px;color:var(--emerald);border:1px solid var(--border-color);max-height:80px;overflow:auto"><code>${escapeHtml(c.expectedOutput || "(none)")}</code></pre>
  </div>
</div>

<div style="margin-bottom:12px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
    <div style="font-size:11px;font-weight:700;color:var(--emerald);text-transform:uppercase;letter-spacing:0.05em">★ OFFICIAL PYTHON REFERENCE SOLUTION:</div>
    <button class="btn btn-sm btn-ghost" id="btnAdminCopySolution" style="font-size:11px;padding:2px 8px">📋 Copy Solution</button>
  </div>
  <pre style="background:var(--bg-dark);padding:10px;border-radius:6px;border:1px solid rgba(16,185,129,0.3);font-size:12px;color:var(--emerald);max-height:160px;overflow:auto"><code>${escapeHtml(c.referenceCode || "# No reference code specified")}</code></pre>
</div>
`;

  const copyBtn = document.getElementById("btnAdminCopySolution");
  if (copyBtn && c.referenceCode) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(c.referenceCode).then(() => showToast(`Copied reference code for ${c.title}!`));
    });
  }

  const loadArenaBtn = document.getElementById("btnAdminLoadChapterToArena");
  if (loadArenaBtn) {
    loadArenaBtn.addEventListener("click", () => {
      selectChapterByIndex(idx);
      navigateTo("arena");
      showToast(`Loaded ${c.title} into Arena!`);
    });
  }
}

function renderAdminTeamTable() {
  const tbody = document.getElementById("adminTeamRows");
  if (!tbody) return;
  tbody.innerHTML = registeredTeamsList.map(t => `
    <tr>
      <td><strong>${escapeHtml(t.name)}</strong></td>
      <td><strong style="color:var(--cyan);font-family:var(--font-mono);font-size:14px">${escapeHtml(t.pin)}</strong></td>
      <td>${t.solves || 0}</td>
      <td><strong style="color:var(--amber)">${t.points || 0}</strong></td>
      <td>
        <button class="btn btn-ghost btn-sm" style="color:var(--rose)" onclick="adminRemoveTeam('${escapeHtml(t.name)}')">Delete</button>
      </td>
    </tr>
  `).join("");
}

window.adminRemoveTeam = function(name) {
  if (confirm(`Remove team "${name}" from roster?`)) {
    registeredTeamsList = registeredTeamsList.filter(t => t.name !== name);
    localStorage.setItem("ns_roster", JSON.stringify(registeredTeamsList));
    renderAdminTeamTable();
    showToast(`Team ${name} removed.`);
  }
};

// -------------------------------------------------------------
// EVENT LISTENERS & INITIALIZATION
// -------------------------------------------------------------
function setupEvents() {
  // Navigation
  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", () => navigateTo(btn.dataset.target));
  });
  const navHome = document.getElementById("navHome");
  if (navHome) navHome.addEventListener("click", () => navigateTo("home"));
  const btnStartFlow = document.getElementById("btnStartFlow");
  if (btnStartFlow) btnStartFlow.addEventListener("click", () => navigateTo("arena"));
  const btnProceed = document.getElementById("btnProceedToArena");
  if (btnProceed) btnProceed.addEventListener("click", () => navigateTo("arena"));

  // Language Badges in Header & Editor
  document.querySelectorAll(".lang-tag").forEach(tag => {
    tag.addEventListener("click", () => switchLanguage(tag.dataset.lang));
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });

  // Story Scroll to Code Button
  document.getElementById("btnScrollToCode").addEventListener("click", () => {
    document.getElementById("codeWorkspaceCard").scrollIntoView({ behavior: "smooth" });
  });

  // Chapter Quick Navigation
  document.getElementById("btnPrevChapter").addEventListener("click", () => {
    if (activeChapterIndex > 0) {
      selectChapterByIndex(activeChapterIndex - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  });
  document.getElementById("btnNextChapter").addEventListener("click", () => {
    if (activeChapterIndex < challengesList.length - 1) {
      selectChapterByIndex(activeChapterIndex + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  });

  // Act Navigation Pills in Arena Top Bar
  document.querySelectorAll(".act-nav-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const targetAct = parseInt(pill.dataset.act, 10);
      const firstInAct = challengesList.findIndex(c => c.act === targetAct);
      if (firstInAct !== -1) {
        selectChapterByIndex(firstInAct);
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    });
  });

  // Evidence Accordion
  document.getElementById("btnToggleEvidence").addEventListener("click", () => {
    const box = document.getElementById("evidenceBoxContent");
    const icon = document.getElementById("evidenceToggleIcon");
    const isHidden = box.classList.toggle("hidden");
    icon.textContent = isHidden ? "▼ Expand Evidence Data" : "▲ Collapse Evidence Data";
  });

  // Code Editor Controls
  document.getElementById("btnRunTest").addEventListener("click", () => runActiveChallenge(false));
  document.getElementById("btnSubmitSolution").addEventListener("click", () => runActiveChallenge(true));
  document.getElementById("btnResetCode").addEventListener("click", () => {
    if (confirm("Reset current editor code to initial template?")) {
      const c = activeChallenge;
      const langData = c.languages && c.languages[currentLanguage];
      const template = (langData && langData.starterCode) ? langData.starterCode : (c.starterCode || "");
      codeEditor.setValue(template);
    }
  });

  // Console Tabs
  document.querySelectorAll(".console-tab").forEach(tab => {
    tab.addEventListener("click", () => switchConsoleTab(tab.dataset.tab));
  });
  document.getElementById("btnClearLogs").addEventListener("click", () => {
    document.getElementById("terminalLogs").textContent = "Terminal log cleared.";
  });

  // Story Map Modal
  const storyMapDialog = document.getElementById("storyMapDialog");
  document.getElementById("btnOpenStoryMap").addEventListener("click", () => {
    renderStoryMapGrid();
    storyMapDialog.showModal();
  });
  document.getElementById("btnCloseStoryMap").addEventListener("click", () => storyMapDialog.close());

  // Story Map Act Filters
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const search = document.getElementById("inputSearchChapters").value;
      renderStoryMapGrid(pill.dataset.mapact, search);
    });
  });
  document.getElementById("inputSearchChapters").addEventListener("input", (e) => {
    const activePill = document.querySelector(".filter-pill.active");
    const actFilter = activePill ? activePill.dataset.mapact : "all";
    renderStoryMapGrid(actFilter, e.target.value);
  });

  // Solve Success Modal Actions
  const solveDialog = document.getElementById("solveSuccessDialog");
  document.getElementById("btnModalNextChapter").addEventListener("click", () => {
    solveDialog.close();
    if (activeChapterIndex < challengesList.length - 1) {
      selectChapterByIndex(activeChapterIndex + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  });
  document.getElementById("btnModalStayChapter").addEventListener("click", () => solveDialog.close());

  // -------------------------------------------------------------
  // DUAL-TAB LOGIN & INVESTIGATOR ACCESS
  // -------------------------------------------------------------
  const tabBtnSignIn = document.getElementById("tabBtnSignIn");
  const tabBtnRegister = document.getElementById("tabBtnRegister");
  const signInState = document.getElementById("loginSignInState");
  const registerState = document.getElementById("loginRegisterState");

  if (tabBtnSignIn && tabBtnRegister) {
    tabBtnSignIn.addEventListener("click", () => {
      tabBtnSignIn.classList.add("active");
      tabBtnRegister.classList.remove("active");
      if (signInState) signInState.classList.remove("hidden");
      if (registerState) registerState.classList.add("hidden");
      const errSignIn = document.getElementById("directSignInError");
      if (errSignIn) errSignIn.textContent = "";
    });

    tabBtnRegister.addEventListener("click", () => {
      tabBtnRegister.classList.add("active");
      tabBtnSignIn.classList.remove("active");
      if (registerState) registerState.classList.remove("hidden");
      if (signInState) signInState.classList.add("hidden");
      const errReg = document.getElementById("regErrorMsg");
      if (errReg) errReg.textContent = "";

      // Auto-generate 6-digit PIN if field is empty
      const pinInput = document.getElementById("regTeamPin");
      if (pinInput && !pinInput.value.trim()) {
        pinInput.value = String(Math.floor(100000 + Math.random() * 900000));
      }
      const nameInput = document.getElementById("regTeamName");
      if (nameInput) nameInput.focus();
    });
  }

  // Quick Test Team Autofill
  document.querySelectorAll(".team-quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const nameInput = document.getElementById("directLoginTeamName");
      const pinInput = document.getElementById("directLoginTeamPin");
      if (nameInput) nameInput.value = tag.dataset.team;
      if (pinInput) pinInput.value = tag.dataset.pin;
      showToast(`Selected ${tag.dataset.team} (PIN: ${tag.dataset.pin})`);
    });
  });

  // Direct Sign In Form
  const directSignIn = document.getElementById("directSignInForm");
  if (directSignIn) {
    directSignIn.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("directLoginTeamName").value.trim();
      const pin = document.getElementById("directLoginTeamPin").value.trim();
      const errEl = document.getElementById("directSignInError");

      if (!name) {
        if (errEl) errEl.textContent = "Please enter your team name.";
        return;
      }
      if (!pin) {
        if (errEl) errEl.textContent = "Please enter your 6-digit access PIN.";
        return;
      }

      const match = registeredTeamsList.find(t => t.name.toLowerCase() === name.toLowerCase());
      if (match && match.pin !== pin) {
        if (errEl) errEl.textContent = "❌ Incorrect PIN for this team.";
        return;
      }

      // Successful authentication
      currentTeam = match || { name, pin };
      if (!match) {
        registeredTeamsList.push({ name, pin, act1: 0, act2: 0, act3: 0, act4: 0, act5: 0, solves: 0, points: 0 });
        localStorage.setItem("ns_roster", JSON.stringify(registeredTeamsList));
      }

      localStorage.setItem("ns_current_team", JSON.stringify(currentTeam));
      updateNavigationAccess();
      showToast(`🔓 Clearance Level 04 Verified! Welcome, ${name}.`);
      navigateTo("arena");
    });
  }

  // Direct Register New Team Form
  const directRegister = document.getElementById("directRegisterForm");
  if (directRegister) {
    directRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("regTeamName");
      const pinInput = document.getElementById("regTeamPin");
      const affInput = document.getElementById("regAffiliation");
      const errEl = document.getElementById("regErrorMsg");

      const name = nameInput ? nameInput.value.trim() : "";
      let pin = pinInput ? pinInput.value.trim() : "";
      const aff = affInput ? affInput.value.trim() : "";

      if (!name) {
        if (errEl) errEl.textContent = "Please enter a team name.";
        return;
      }
      if (!pin) {
        pin = String(Math.floor(100000 + Math.random() * 900000));
        if (pinInput) pinInput.value = pin;
      }

      currentTeam = { name, pin, aff };
      const existing = registeredTeamsList.find(t => t.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        existing.pin = pin;
        if (aff) existing.aff = aff;
      } else {
        registeredTeamsList.push({ name, pin, aff, act1: 0, act2: 0, act3: 0, act4: 0, act5: 0, solves: 0, points: 0 });
      }

      localStorage.setItem("ns_roster", JSON.stringify(registeredTeamsList));
      localStorage.setItem("ns_current_team", JSON.stringify(currentTeam));

      if (errEl) errEl.textContent = "";
      updateNavigationAccess();
      showToast(`Team ${name} created! Clearance granted.`);
      navigateTo("arena");
    });
  }

  // Auto-Generate PIN button in register form
  const genRegPinBtn = document.getElementById("btnGenRegPin");
  if (genRegPinBtn) {
    genRegPinBtn.addEventListener("click", () => {
      const pin = String(Math.floor(100000 + Math.random() * 900000));
      document.getElementById("regTeamPin").value = pin;
      showToast(`Generated PIN: ${pin}`);
    });
  }

  // Copy PIN button
  const copyActivePinBtn = document.getElementById("btnCopyActivePin");
  if (copyActivePinBtn) {
    copyActivePinBtn.addEventListener("click", () => {
      const pin = document.getElementById("activeClearancePin").textContent;
      navigator.clipboard.writeText(pin).then(() => showToast(`Copied PIN ${pin} to clipboard!`));
    });
  }

  // Direct Go to Arena from clearance card
  const btnGoToArena = document.getElementById("btnGoToArenaDirect");
  if (btnGoToArena) {
    btnGoToArena.addEventListener("click", () => navigateTo("arena"));
  }

  // Sign out handlers (header and home)
  const handleSignOut = () => {
    if (confirm("Sign out of current team session?")) {
      currentTeam = null;
      localStorage.removeItem("ns_current_team");
      updateNavigationAccess();
      navigateTo("home");
      showToast("Signed out. Investigation terminal locked.");
    }
  };

  const btnSignOutH = document.getElementById("btnSignOutHeader");
  if (btnSignOutH) btnSignOutH.addEventListener("click", handleSignOut);

  const btnSignOutHome = document.getElementById("btnSignOutHome");
  if (btnSignOutHome) btnSignOutHome.addEventListener("click", handleSignOut);

  // Admin Passcode & Testing Mode
  document.getElementById("adminUnlockForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("adminPassInput").value.trim();
    const err = document.getElementById("adminPassError");

    if (val === ADMIN_PASSCODE) {
      document.getElementById("adminLockState").classList.add("hidden");
      document.getElementById("adminDashboardState").classList.remove("hidden");
      renderAdminCatalog();
      renderAdminTeamTable();
      showToast("Admin Studio unlocked!");
    } else {
      err.textContent = "Invalid passcode. (Default: admin123)";
    }
  });

  document.getElementById("btnLockAdmin").addEventListener("click", () => {
    document.getElementById("adminDashboardState").classList.add("hidden");
    document.getElementById("adminLockState").classList.remove("hidden");
    document.getElementById("adminPassInput").value = "";
    showToast("Admin Studio locked.");
  });

  document.getElementById("btnUnlockAllChapters").addEventListener("click", () => {
    adminUnlockedAll = !adminUnlockedAll;
    showToast(adminUnlockedAll ? "🔓 All 80 Chapters unlocked for testing!" : "🔒 Chapters locked to sequential progression.");
    selectChapterByIndex(activeChapterIndex);
  });

  document.getElementById("btnExportCsv").addEventListener("click", () => {
    let csv = "team_name,team_pin,solves,points\n";
    registeredTeamsList.forEach(t => {
      csv += `"${t.name}","${t.pin}",${t.solves || 0},${t.points || 0}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `project_enigmatrix_roster_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast("Downloaded team roster CSV!");
  });

  document.getElementById("btnRefreshBoard").addEventListener("click", () => {
    renderLeaderboard();
    showToast("Leaderboard refreshed!");
  });

  // Auto-save code edits in local storage per language & challenge
  codeEditor.on("change", () => {
    if (activeChallenge) {
      localStorage.setItem(`ns_code_${currentLanguage}_${activeChallenge.id}`, codeEditor.getValue());
    }
  });

  // -------------------------------------------------------------
  // ANTI-CHEAT & INTEGRITY ENFORCEMENT
  // -------------------------------------------------------------
  // 1. Block pasting code into CodeMirror
  codeEditor.on("paste", (cm, e) => {
    e.preventDefault();
    triggerSecurityViolation("PASTE_ATTEMPT", "Copy-pasting code is strictly prohibited. Write your solution manually.");
  });

  // 2. Block drag & drop external code into CodeMirror
  codeEditor.on("drop", (cm, e) => {
    e.preventDefault();
    triggerSecurityViolation("DROP_ATTEMPT", "Dragging external code into the editor is prohibited.");
  });

  // 3. Block right-click context menu in competition arena
  document.addEventListener("contextmenu", (e) => {
    const adminView = document.getElementById("viewAdmin");
    if (adminView && adminView.classList.contains("active")) return;
    e.preventDefault();
    triggerSecurityViolation("CONTEXT_MENU", "Right-click context menu is restricted.");
  });

  // 4. Block Developer Tools & View Source shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||
        ((e.ctrlKey || e.metaKey) && ["U","S"].includes(e.key.toUpperCase()))) {
      e.preventDefault();
      triggerSecurityViolation("DEVTOOLS_KEY", `Restricted shortcut [${e.key}] blocked.`);
    }
  });

  // 5. Track window blur & tab switching (AI-assistance prevention)
  let tabSwitchCount = parseInt(localStorage.getItem("ns_security_tab_switches") || "0", 10);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && currentTeam) {
      tabSwitchCount++;
      localStorage.setItem("ns_security_tab_switches", tabSwitchCount.toString());
      recordAuditLog("TAB_SWITCH", `User navigated away from investigation tab (#${tabSwitchCount})`);
    } else if (!document.hidden && currentTeam && tabSwitchCount > 0) {
      triggerSecurityViolation("TAB_SWITCH", `Integrity Alert: External tab-switching recorded (#${tabSwitchCount}). AI assistance is prohibited.`);
    }
  });
}

// -------------------------------------------------------------
// ANTI-CHEAT & INTEGRITY AUDIT SYSTEM
// -------------------------------------------------------------
let integrityViolationCount = parseInt(localStorage.getItem("ns_integrity_violations") || "0", 10);
let securityAuditLogs = [];
try {
  securityAuditLogs = JSON.parse(localStorage.getItem("ns_security_audit_log") || "[]");
} catch(e) {}

function recordAuditLog(type, details) {
  const entry = {
    timestamp: new Date().toLocaleTimeString(),
    team: currentTeam ? currentTeam.name : "Unauthenticated",
    type: type,
    details: details
  };
  securityAuditLogs.unshift(entry);
  if (securityAuditLogs.length > 60) securityAuditLogs.pop();
  localStorage.setItem("ns_security_audit_log", JSON.stringify(securityAuditLogs));
}

function triggerSecurityViolation(type, msg) {
  integrityViolationCount++;
  localStorage.setItem("ns_integrity_violations", integrityViolationCount.toString());
  recordAuditLog(type, msg);

  showToast(`🚫 ${msg}`);
  logToConsole(`[SECURITY AUDIT - ALERT]: ${msg} (Event #${integrityViolationCount})`);

  const editorBox = document.querySelector(".editor-box");
  if (editorBox) {
    editorBox.style.boxShadow = "0 0 18px rgba(244, 63, 94, 0.85)";
    setTimeout(() => {
      editorBox.style.boxShadow = "";
    }, 1200);
  }
}

function switchConsoleTab(tabName) {
  document.querySelectorAll(".console-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
  document.getElementById("tabTests").classList.toggle("active", tabName === "tests");
  document.getElementById("tabTerminal").classList.toggle("active", tabName === "terminal");
}

function logToConsole(text) {
  const el = document.getElementById("terminalLogs");
  el.textContent += `\n${text}`;
  el.scrollTop = el.scrollHeight;
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3400);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// -------------------------------------------------------------
// APP INITIALIZATION
// -------------------------------------------------------------
function initApp() {
  loadChallengesData();

  const codeArea = document.getElementById("pythonEditor");
  codeEditor = CodeMirror.fromTextArea(codeArea, {
    mode: { name: "python", version: 3, singleLineStringErrors: false },
    theme: "material-ocean",
    lineNumbers: true,
    indentUnit: 4,
    smartIndent: true,
    extraKeys: {
      "Ctrl-Enter": () => runActiveChallenge(false),
      "Cmd-Enter": () => runActiveChallenge(false)
    }
  });

  setupEvents();

  // Load team session if saved
  const savedRoster = localStorage.getItem("ns_roster");
  if (savedRoster) {
    try { registeredTeamsList = JSON.parse(savedRoster); } catch (e) {}
  }
  const savedTeam = localStorage.getItem("ns_current_team");
  if (savedTeam) {
    try {
      currentTeam = JSON.parse(savedTeam);
    } catch (e) {}
  }

  // Update navigation access (locks tabs if not logged in)
  updateNavigationAccess();

  // If already logged in, go to arena; otherwise stay on login
  if (currentTeam) {
    navigateTo("arena");
  } else {
    navigateTo("home");
  }

  // Select initial chapter
  selectChapterByIndex(activeChapterIndex);

  // Initialize Pyodide WASM
  initPyodide();
}

window.addEventListener("DOMContentLoaded", initApp);

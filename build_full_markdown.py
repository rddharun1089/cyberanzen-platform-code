import re, json
from cases_registry import REGISTRY

# Load original story and answer key paragraphs from docx
import zipfile, xml.etree.ElementTree as ET

def parse_docx(docx_file):
    with zipfile.ZipFile(docx_file) as z:
        tree = ET.fromstring(z.read('word/document.xml'))
    return [''.join([n.text for n in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if n.text]).strip() 
            for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p') if ''.join([n.text for n in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if n.text]).strip()]

story_paras = parse_docx('80_Independent_Crime_CTF_Stories_Connected_Storyline.docx')
key_paras = parse_docx('80_CTF_Complete_Coding_Answer_Key.docx')

# Segment story cases
def get_story_cases(paras):
    cases = {}
    cur = None
    lines = []
    for p in paras:
        m = re.match(r'^(CASE|Case)\s+(\d+)\s*[—\-–:]\s*(.*)', p)
        if m:
            num = int(m.group(2))
            if cur is not None:
                cases[cur] = lines
            cur = num
            lines = [p]
        else:
            if cur is not None:
                if cur == 80 and ('Master Case Index' in p or 'THE ENDING' in p or 'FINAL ANSWER' in p):
                    cases[80] = lines
                    cur = 'OUTRO'
                    lines = [p]
                else:
                    lines.append(p)
    if cur not in (None, 'OUTRO'):
        cases[cur] = lines
    return cases

story_dict = get_story_cases(story_paras)

# Segment key cases
def get_key_cases(paras):
    cases = {}
    cur = None
    lines = []
    for p in paras:
        m = re.match(r'^(CASE|Case)\s+(\d+)\s*[—\-–:]\s*(.*)', p)
        if m:
            num = int(m.group(2))
            if cur is not None:
                cases[cur] = lines
            cur = num
            lines = [p]
        else:
            if cur is not None:
                if cur == 80 and 'FINAL ANSWER' in p:
                    cases[80] = lines
                    cur = 'OUTRO'
                    lines = [p]
                else:
                    lines.append(p)
    if cur not in (None, 'OUTRO'):
        cases[cur] = lines
    return cases

key_dict = get_key_cases(key_paras)

# Phase metadata
phases = [
    {
        "num": "I",
        "title": "THE FIRST BREAK-IN",
        "domain": "Cybersecurity & Digital Forensics",
        "cases_range": (1, 12),
        "desc": "The archive begins with crimes that leave digital footprints: servers, credentials, packets, backups and privileged sessions. The investigators recover the first set of evidence tokens. Nothing yet proves a single offender, but the recovered artifacts establish the investigation's baseline."
    },
    {
        "num": "II",
        "title": "WHEN THE MACHINES STARTED LYING",
        "domain": "AI / Machine Learning",
        "cases_range": (13, 22),
        "desc": "The next files move into AI and machine learning. Predictions, models, labels and confidence scores become crime-scene evidence. The investigators learn an important lesson: a machine can produce a convincing answer and still be wrong. The evidence tokens now begin to carry technical fingerprints."
    },
    {
        "num": "III",
        "title": "NUMBERS DON'T FORGET",
        "domain": "Data Science",
        "cases_range": (23, 30),
        "desc": "The investigation turns to datasets, distributions, correlations and time-series records. Seemingly harmless anomalies reveal where information was inserted, removed or distorted. The cases remain independent, but their evidence tokens now share a common structure."
    },
    {
        "num": "IV",
        "title": "THE MACHINES BETWEEN THE LINES",
        "domain": "ECE / Embedded Systems",
        "cases_range": (31, 38),
        "desc": "Embedded controllers and electronic traces reveal physical-world evidence. GPIO transitions, voltage readings, serial data and controller states show how digital events reached real hardware. The investigation expands from screens and databases into the physical world."
    },
    {
        "num": "V",
        "title": "THE NETWORK OF THINGS",
        "domain": "IoT (Internet of Things)",
        "cases_range": (39, 46),
        "desc": "Connected devices become witnesses. Smart locks, industrial sensors, gateways and sensor swarms provide distributed evidence. The investigators correlate device identity, timing and behavior, discovering that an event recorded by one system may explain an anomaly recorded by another."
    },
    {
        "num": "VI",
        "title": "THE LEDGER NEVER FORGETS",
        "domain": "Blockchain",
        "cases_range": (47, 54),
        "desc": "The blockchain cases introduce immutable-looking records, transaction graphs, smart contracts and Merkle proofs. The investigators use them to verify integrity rather than blindly trust a ledger. Another layer of the hidden connection emerges from the evidence tokens."
    },
    {
        "num": "VII",
        "title": "CRIME IN MOTION",
        "domain": "Robotics",
        "cases_range": (55, 61),
        "desc": "Robots turn the investigation into a problem of movement and control. Paths, state machines, trajectories and command priorities reveal how software decisions become physical actions. The recovered tokens now describe not only what happened, but where and when it happened."
    },
    {
        "num": "VIII",
        "title": "ABOVE THE GROUND",
        "domain": "Aerospace",
        "cases_range": (62, 68),
        "desc": "Aerospace telemetry introduces another scale: aircraft, satellites, navigation systems and flight recorders. The investigators reconstruct missing intervals and separate genuine signals from injected ones. The evidence chain now spans laboratories, factories, networks and the sky."
    },
    {
        "num": "IX",
        "title": "THE SMALLEST TRACE",
        "domain": "Nanotechnology",
        "cases_range": (69, 73),
        "desc": "The final specialist cases examine nanoscale research, fabrication parameters, sensor noise and missing samples. The smallest anomalies become the final independent evidence fragments needed before the cross-domain reconstruction."
    },
    {
        "num": "FINAL",
        "title": "THE PIECES MEET",
        "domain": "Cross-Domain Grand Crimes",
        "cases_range": (74, 80),
        "desc": "The investigation reaches its final seven cases. Here the domains are deliberately combined. The investigators must correlate cyber events with IoT telemetry, robotics, blockchain records, aerospace data and scientific research. These cases do not reveal a predetermined culprit; they test whether the evidence can survive cross-domain verification."
    }
]

print("Setup completed, compiling markdown...")

def extract_case_metadata(case_num):
    s_lines = story_dict.get(case_num, [])
    k_lines = key_dict.get(case_num, [])
    
    title = s_lines[0] if s_lines else f"CASE {case_num:02d}"
    incident_story = s_lines[1] if len(s_lines) > 1 else ""
    
    domain = ""
    languages = "Python / C++"
    skills = ""
    objective = ""
    input_desc = ""
    output_desc = ""
    constraints = "Use deterministic processing. Preserve input order where timestamps tie. Do not assume an offender from an account name alone."
    flag_fmt = f"FLAG{{CASE_{case_num:02d}_<COMPUTED_RESULT>}}"
    points = "50"
    design_note = "The final dataset should contain enough evidence to produce a unique deterministic result. The narrative establishes the crime context; the supplied data determines the answer."
    
    for idx, l in enumerate(s_lines):
        if l == "Technical Domain" and idx + 1 < len(s_lines):
            domain = s_lines[idx+1]
        elif l == "Languages" and idx + 1 < len(s_lines):
            languages = s_lines[idx+1]
        elif l == "Core Skills" and idx + 1 < len(s_lines):
            skills = s_lines[idx+1]
        elif l == "Investigator Objective" and idx + 1 < len(s_lines):
            objective = s_lines[idx+1]
        elif l == "Input" and idx + 1 < len(s_lines):
            input_desc = s_lines[idx+1]
        elif l == "Output" and idx + 1 < len(s_lines):
            output_desc = s_lines[idx+1]
        elif l == "Constraints" and idx + 1 < len(s_lines):
            constraints = s_lines[idx+1]
        elif l == "Flag" and idx + 1 < len(s_lines):
            flag_fmt = s_lines[idx+1]
        elif l == "Points" and idx + 1 < len(s_lines):
            points = s_lines[idx+1]
        elif l.startswith("Challenge Design Note:") or (l == "Challenge Design Note" and idx + 1 < len(s_lines)):
            design_note = l if l.startswith("Challenge Design Note:") else s_lines[idx+1]

    input_contract = ""
    required_result = ""
    complexity = ""
    for idx, l in enumerate(k_lines):
        if l.startswith("Input contract:"):
            input_contract = l[15:].strip()
        elif l.startswith("Required result:"):
            required_result = l[16:].strip()
        elif l.startswith("Complexity:"):
            complexity = l[11:].strip()

    reg = REGISTRY.get(case_num, {})
    
    return {
        "num": case_num,
        "title": title,
        "incident_story": incident_story,
        "domain": domain,
        "languages": languages,
        "skills": skills,
        "objective": objective,
        "input_desc": input_desc,
        "output_desc": output_desc,
        "constraints": constraints,
        "flag_fmt": flag_fmt,
        "points": points,
        "design_note": design_note,
        "input_contract": input_contract,
        "required_result": required_result,
        "complexity": reg.get("complexity", complexity),
        "sample_input": reg.get("sample_input", ""),
        "expected_output": reg.get("expected_output", ""),
        "explanation": reg.get("explanation", ""),
        "code": reg.get("code", "")
    }

# Generate Markdown Document
md_lines = []

md_lines.append("# 80 INDEPENDENT CRIME CTF INVESTIGATIONS")
md_lines.append("## Connected Multi-Domain Crime Investigation & Complete Coding Answer Key")
md_lines.append("> **National Applied Research Consortium Archive**  ")
md_lines.append("> *AI • ML • Cybersecurity • ECE • Blockchain • Data Science • IoT • Robotics • Aerospace • Nanotechnology*  ")
md_lines.append("> **Total Challenges**: 80 Cases | **Total Score**: 5,900 Points | **Primary Stack**: Python 3 / C++\n")

md_lines.append("---")
md_lines.append("## TABLE OF CONTENTS\n")
md_lines.append("- [1. Executive Investigation Briefing](#1-executive-investigation-briefing)")
md_lines.append("- [2. Investigation Rules & Architecture](#2-investigation-rules--architecture)")
md_lines.append("- [3. Scoring & Points Structure](#3-scoring--points-structure)")
md_lines.append("- [4. Master Case Index (Cases 01–80)](#4-master-case-index)")
for p in phases:
    p_anchor = f"phase-{p['num'].lower()}-{re.sub(r'[^a-z0-9]+', '-', p['title'].lower()).strip('-')}"
    md_lines.append(f"- [Phase {p['num']}: {p['title']} (Cases {p['cases_range'][0]:02d}–{p['cases_range'][1]:02d})](#{p_anchor})")
md_lines.append("- [5. The Grand Finale: The Eightieth Piece](#5-the-grand-finale-the-eightieth-piece)")
md_lines.append("- [6. Private Git Repository Deployment Guide](#6-private-git-repository-deployment-guide)\n")

md_lines.append("---")
md_lines.append("## 1. EXECUTIVE INVESTIGATION BRIEFING\n")
md_lines.append("At **02:13 AM**, the National Applied Research Consortium receives a single encrypted distress packet from its central evidence archive. The message contains only seven words:\n")
md_lines.append("> **“EIGHTY CASES. ONE HIDDEN HANDOFF. FIND THE PATTERN.”**\n")
md_lines.append("The Consortium is not an ordinary laboratory. Its divisions span cybersecurity, artificial intelligence, machine learning, data science, electronics, embedded systems, IoT, blockchain, robotics, aerospace systems, and nanotechnology. Over the previous twelve months, eighty apparently unrelated technical incidents were reported across these divisions.\n")
md_lines.append("Every investigation was previously closed as an isolated incident: a server breach, a manipulated AI diagnostic model, a forged financial transaction, a compromised sensor, a stolen nano-sample, an erratic industrial robot, a corrupted flight telemetry feed, and dozens more. Different victims. Different divisions. Different technologies. Different investigators.\n")
md_lines.append("A forensic re-analysis discovered that every single investigation contains a subtle technical irregularity that was never significant enough to become the central finding: a timestamp jitter, a hash fragment, a device identifier, a statistical outlier, a model version anomaly, a telemetry skew, or a transaction nonce.\n")
md_lines.append("Individually, these fragments mean almost nothing. Together, they form an unbreakable cryptographic and physical chain.\n")

md_lines.append("---")
md_lines.append("## 2. INVESTIGATION RULES & ARCHITECTURE\n")
md_lines.append("### Fundamental Rules\n")
md_lines.append("1. **Evidence outranks assumptions**: An account name is not proof of identity. AI confidence is not proof of guilt. A maintenance window is not proof of participation. A matching timestamp is not automatically causation. Every conclusion must be derived from independently verified technical evidence.")
md_lines.append("2. **Independent solvability**: Every single case is self-contained. A participant or investigator can solve any individual case without needing prior knowledge from another. The cross-domain link appears only through the **evidence token** produced after each case is verified.")
md_lines.append("3. **Deterministic output**: Flags are computed directly from the evidence dataset. No culprits are hard-coded.")
md_lines.append("4. **Final Principle**: *The crime is solved when another investigator can repeat the analysis and reach the exact same evidence-based conclusion.*\n")

md_lines.append("### How the 80 Cases Connect\n")
md_lines.append("- **Cases 01–20**: Establish original incidents and recover initial digital footprints.")
md_lines.append("- **Cases 21–40**: Expose mathematical, electronic, and data anomalies in physical and machine-learning systems.")
md_lines.append("- **Cases 41–60**: Correlate distributed failures across IoT, networks, and blockchain ledgers.")
md_lines.append("- **Cases 61–79**: Trace kinetic consequences across robotics, aerospace telemetry, and nanotechnology fabrication.")
md_lines.append("- **Case 80**: Synthesizes the 79 verified evidence tokens into a unified directed evidence graph, executing canonical topological sorting and SHA-256 chain verification to release the master flag.\n")

md_lines.append("---")
md_lines.append("## 3. SCORING & POINTS STRUCTURE\n")
md_lines.append("| Phase | Cases Range | Domain Focus | Points per Case | Total Phase Points |")
md_lines.append("| :--- | :---: | :--- | :---: | :---: |")
md_lines.append("| **Phase I** | 01 – 12 | Cybersecurity & Digital Forensics | 50 pts | 600 pts |")
md_lines.append("| **Phase II** | 13 – 22 | AI & Machine Learning | 50 – 75 pts | 650 pts |")
md_lines.append("| **Phase III** | 23 – 30 | Data Science & Statistics | 75 pts | 600 pts |")
md_lines.append("| **Phase IV** | 31 – 38 | ECE & Embedded Systems | 75 pts | 600 pts |")
md_lines.append("| **Phase V** | 39 – 46 | IoT (Internet of Things) | 75 pts | 600 pts |")
md_lines.append("| **Phase VI** | 47 – 54 | Blockchain & Cryptography | 75 – 100 pts | 650 pts |")
md_lines.append("| **Phase VII** | 55 – 61 | Robotics & Motion Control | 100 pts | 700 pts |")
md_lines.append("| **Phase VIII** | 62 – 68 | Aerospace & Avionics Telemetry | 100 pts | 700 pts |")
md_lines.append("| **Phase IX** | 69 – 73 | Nanotechnology & Physics | 100 pts | 500 pts |")
md_lines.append("| **Final Phase** | 74 – 79 | Cross-Domain Grand Crimes | 100 pts | 600 pts |")
md_lines.append("| **Grand Finale** | Case 80 | The Final Convergence | 200 pts | 200 pts |")
md_lines.append("| **GRAND TOTAL** | **80 Cases** | **Multi-Domain Consortium** | — | **5,900 Points** |\n")

md_lines.append("---")
md_lines.append("## 4. MASTER CASE INDEX\n")
md_lines.append("| # | Title | Domain | Difficulty | Points | Skills |")
md_lines.append("| :---: | :--- | :--- | :---: | :---: | :--- |")
for i in range(1, 81):
    m = extract_case_metadata(i)
    clean_title = m['title'].replace(f"CASE {i:02d} — ", "").replace(f"CASE {i} — ", "")
    c_anchor = f"case-{i:02d}-{re.sub(r'[^a-z0-9]+', '-', clean_title.lower()).strip('-')}"
    diff = "Easy" if int(m['points']) <= 50 else ("Medium" if int(m['points']) <= 75 else ("Hard" if int(m['points']) <= 100 else "Grand Master"))
    md_lines.append(f"| {i:02d} | [{clean_title}](#{c_anchor}) | {m['domain']} | {diff} | {m['points']} | {m['skills']} |")
md_lines.append("\n")

# Output each phase and case
for p in phases:
    p_anchor = f"phase-{p['num'].lower()}-{re.sub(r'[^a-z0-9]+', '-', p['title'].lower()).strip('-')}"
    md_lines.append(f"---\n\n## <a id=\"{p_anchor}\"></a>PHASE {p['num']} — {p['title']}")
    md_lines.append(f"**Primary Domain**: {p['domain']}  ")
    md_lines.append(f"**Cases**: {p['cases_range'][0]:02d} through {p['cases_range'][1]:02d}\n")
    md_lines.append(f"> {p['desc']}\n")
    
    for c_num in range(p['cases_range'][0], p['cases_range'][1] + 1):
        m = extract_case_metadata(c_num)
        clean_title = m['title'].replace(f"CASE {c_num:02d} — ", "").replace(f"CASE {c_num} — ", "")
        c_anchor = f"case-{c_num:02d}-{re.sub(r'[^a-z0-9]+', '-', clean_title.lower()).strip('-')}"
        
        md_lines.append(f"### <a id=\"{c_anchor}\"></a>Case {c_num:02d} — {clean_title}\n")
        
        md_lines.append("| Attribute | Value |")
        md_lines.append("| :--- | :--- |")
        md_lines.append(f"| **Technical Domain** | {m['domain']} |")
        md_lines.append(f"| **Recommended Stack** | {m['languages']} |")
        md_lines.append(f"| **Core Skills** | `{m['skills']}` |")
        md_lines.append(f"| **Points & Difficulty** | {m['points']} Points |")
        md_lines.append(f"| **Flag Template** | `{m['flag_fmt']}` |\n")
        
        md_lines.append("#### Incident Narrative & Scenario")
        md_lines.append(f"{m['incident_story']}\n")
        
        md_lines.append("#### Investigator Objective")
        md_lines.append(f"{m['objective']}\n")
        
        md_lines.append("#### Input Contract & Specification")
        md_lines.append(f"```text\n{m['input_contract']}\n```\n")
        
        md_lines.append("#### Required Result & Constraints")
        md_lines.append(f"- **Required Result**: {m['required_result']}")
        md_lines.append(f"- **Constraints**: {m['constraints']}\n")
        
        md_lines.append("#### Deterministic Sample Test Case")
        md_lines.append(f"**Sample Input**:\n```text\n{m['sample_input']}```\n")
        md_lines.append(f"**Expected Output**:\n```text\n{m['expected_output']}\n```\n")
        md_lines.append(f"**Walkthrough / Explanation**:\n{m['explanation']}\n")
        
        md_lines.append("#### Verified Python 3 Reference Solution")
        md_lines.append(f"```python\n{m['code']}\n```\n")
        
        md_lines.append("#### Algorithmic Complexity & Notes")
        md_lines.append(f"- **Complexity**: `{m['complexity']}`")
        md_lines.append(f"- **Challenge Design Note**: {m['design_note']}\n")

# Master Ending Narrative
md_lines.append("---\n")
md_lines.append("## 5. THE GRAND FINALE: THE EIGHTIETH PIECE\n")
md_lines.append("The final case is not another isolated crime. It is the lock that was built for the evidence recovered from the previous seventy-nine investigations.\n")
md_lines.append("Each case has produced one independently computed evidence token. The investigators place the tokens into a master evidence graph. Cybersecurity events connect to device identities. Device identities connect to physical actions. Physical actions connect to telemetry. Telemetry connects to data anomalies. Data anomalies connect to AI model versions. Blockchain records verify transitions, while robotics, aerospace and nanotechnology records establish the physical consequences.\n")
md_lines.append("The graph is not allowed to invent connections. Every edge must be supported by an actual case result. Conflicts are preserved rather than silently removed. Where two systems disagree, the investigators record the contradiction and determine which evidence is independently verifiable.\n")
md_lines.append("At the center of the graph they discover the true purpose of the eighty cases: they were never meant to be solved as eighty unrelated puzzles. They were designed as eighty independent measurements of one larger information trail.\n")
md_lines.append("The final reconstruction identifies the sequence in which information moved across domains. It also identifies which observations are proven, which remain uncertain, and which earlier assumptions were false leads.\n")
md_lines.append("The investigation deliberately ends without a forced confession. The evidence does not need a convenient villain. It provides something stronger: a reproducible technical reconstruction.\n")
md_lines.append("> ### FINAL PRINCIPLE")
md_lines.append("> *THE CRIME IS SOLVED WHEN ANOTHER INVESTIGATOR CAN REPEAT THE ANALYSIS AND REACH THE SAME EVIDENCE-BASED CONCLUSION.*\n")
md_lines.append("Once the final evidence graph is validated, the encrypted archive releases its last message:\n")
md_lines.append("> *“You looked for one criminal. The evidence was asking a different question. Not who touched every system — but how every system became part of the same chain.”*\n")
md_lines.append("**Status**: `EVIDENCE CHAIN VERIFIED`  ")
md_lines.append("**Result**: `80 / 80 CASES SOLVED DETERMINISTICALLY`  ")
md_lines.append("**Archive Status**: `SEALED & VERIFIED`\n")

# Private Git Repository Deployment Guide
md_lines.append("---\n")
md_lines.append("## 6. PRIVATE GIT REPOSITORY DEPLOYMENT GUIDE\n")
md_lines.append("To keep this challenge archive and answer key strictly confidential for competition operations, follow these steps to upload it to a **private** Git repository:\n")

md_lines.append("### Step 1: Configure Git Identity (if not already configured)")
md_lines.append("```bash")
md_lines.append('git config --global user.name "Your Name"')
md_lines.append('git config --global user.email "your.email@example.com"')
md_lines.append("```\n")

md_lines.append("### Step 2: Initialize Git Repository")
md_lines.append("```bash")
md_lines.append("cd /home/devil-daredevil1089/Documents/last_signal_website")
md_lines.append("git init")
md_lines.append("```\n")

md_lines.append("### Step 3: Create `.gitignore` to Avoid Exposing Scratch/Temporary Files")
md_lines.append("```bash")
md_lines.append("cat << 'EOF' > .gitignore")
md_lines.append("# Python bytecode and caches")
md_lines.append("__pycache__/")
md_lines.append("*.pyc")
md_lines.append(".pytest_cache/")
md_lines.append("")
md_lines.append("# Scratch test files")
md_lines.append("test_registry_execution.py")
md_lines.append("cases_registry.py")
md_lines.append("build_full_markdown.py")
md_lines.append("fix_registry_cases.py")
md_lines.append("make_master_ctf.py")
md_lines.append("parse_and_validate.py")
md_lines.append("generate_all_solutions_and_tests.py")
md_lines.append("generate_verified_ctf_master.py")
md_lines.append("")
md_lines.append("# OS & IDE files")
md_lines.append(".DS_Store")
md_lines.append(".vscode/")
md_lines.append(".idea/")
md_lines.append("EOF")
md_lines.append("```\n")

md_lines.append("### Step 4: Add Files and Make Initial Commit")
md_lines.append("```bash")
md_lines.append("git add .gitignore README.md 80_CTF_Complete_Crime_Investigation_And_Coding_Answer_Key.md")
md_lines.append("git add index.html app.js styles.css challenges_data.js setup.sql team_roster.csv")
md_lines.append('git commit -m "feat: complete 80 CTF multi-domain crime cases with verified coding answer key"')
md_lines.append("```\n")

md_lines.append("### Step 5: Create a Private Repository on GitHub / GitLab\n")
md_lines.append("#### Option A: Using GitHub Web UI")
md_lines.append("1. Log in to [github.com](https://github.com).")
md_lines.append("2. Click the `+` icon in the top right and select **New repository**.")
md_lines.append("3. Repository name: `last_signal_ctf` (or your preferred name).")
md_lines.append("4. **CRITICAL**: Select **Private** (do NOT choose Public to keep answer keys secret).")
md_lines.append("5. Do not initialize with README, .gitignore, or license (they are already created locally).")
md_lines.append("6. Click **Create repository**.\n")

md_lines.append("#### Option B: Using GitLab Web UI")
md_lines.append("1. Log in to [gitlab.com](https://gitlab.com).")
md_lines.append("2. Click **New project** -> **Create blank project**.")
md_lines.append("3. Visibility Level: Select **Private**.")
md_lines.append("4. Uncheck 'Initialize repository with a README'.")
md_lines.append("5. Click **Create project**.\n")

md_lines.append("### Step 6: Link Remote and Push to Private Repository")
md_lines.append("```bash")
md_lines.append("git branch -M main")
md_lines.append("# Replace <USERNAME> and <REPO> with your GitHub / GitLab username and repo name:")
md_lines.append("git remote add origin git@github.com:<USERNAME>/last_signal_ctf.git")
md_lines.append("# Or via HTTPS:")
md_lines.append("# git remote add origin https://github.com/<USERNAME>/last_signal_ctf.git")
md_lines.append("git push -u origin main")
md_lines.append("```\n")

# Write out to target file
target_filename = "/home/devil-daredevil1089/Documents/last_signal_website/80_CTF_Complete_Crime_Investigation_And_Coding_Answer_Key.md"
with open(target_filename, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))

print(f"Master markdown document generated successfully: {target_filename}")
print(f"Total lines: {len(md_lines)}")

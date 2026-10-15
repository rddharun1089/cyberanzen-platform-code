# PROJECT ENIGMATRIX: CASE LS-047 — THE LAST SIGNAL
## AI/ML, Cyber Forensics & Multi-Language Investigation Arena (80 Chapters · Acts I–V)

An interactive, in-browser story-driven investigation platform with integrated **WebAssembly Python 3.11 + NumPy Compiler & Multi-Language Runner (Python, C, C++)**.

Built specifically for the **Project Enigmatrix** competition at the fictional **Advanced Research and Intelligence Laboratory (ARIL)**.

---

## Key Features

1. **Episodic Story-First Progression**:
   - Each chapter begins with a classified **Story Narrative & Transmission Intercept** detailing Dr. Arjun Raman's disappearance, security logs, or suspect forensics.
   - Solving the technical puzzle decrypts the **Master Evidence Debrief**, awards investigation points and flags (`ENIGMA{...}`), and advances the team to the next story chapter.
   - Includes an interactive **80-Chapter Story Map & Archive** to review unlocked narratives and evidence across all 5 Acts.

2. **Combined Multi-Language Programming Environment (Python, C, C++)**:
   - **Python 3.11 + NumPy** running 100% in-browser via Pyodide WebAssembly (zero backend execution risk).
   - **C (C11)** and **C++ (C++17)** starter templates, syntax highlighting, and test runner.
   - Instant language switching directly from the editor toolbar with per-language code autosave in `localStorage`.

3. **80 Complete Story-Driven Technical Challenges (Acts I – V)**:
   - **Act I: The Disappearance & The Lab Breach (Ch 01–16)**:
     - Digital forensics, timestamp recovery, Caesar cipher decoders, RFID credential cloning, camera frame-drop analysis, magnetic sensor overrides.
   - **Act II: The Compromised Infrastructure (Ch 17–32)**:
     - SQL database rollback recovery, backup differentials, curfew logins, rogue MAC detection, PCAP exfiltration analysis.
   - **Act III: The Electronic Crime Scene (Ch 33–48)**:
     - Z-Score sensor spike filtering, I2C bus collision detection, clock offset interpolation, duplicate badge geometry.
   - **Act IV: The AI Deception & Neural Sabotage (Ch 49–64)**:
     - Exonerating student Nila from biased AI surveillance models, Confusion Matrix & F1-score evaluation, FGSM adversarial noise generation, softmax temperature calibration, poisoned training labels.
   - **Act V: The Insider Conspiracy & The Final Signal (Ch 65–80)**:
     - Neural parameter steganography (extracting hidden payloads from model weights), decision boundary hyperplane inversion, Shamir secret sharing recombination, and the master case verdict.

4. **Team Registration & Session Sync**:
   - Single shared 6-digit access PIN for each team.
   - Local offline mode (runs with zero internet/cloud setup) + Cloud Sync mode via Supabase (`setup.sql`).

5. **Lead Investigator Admin Studio**:
   - Passcode protected (`admin123`).
   - Chapter Inspector to view lore, objectives, test assertions, and reference solutions for all 80 chapters.
   - One-click toggle: **Unlock All 80 Chapters (Testing Mode)**.
   - Team roster management and 1-click CSV export.

---

## File Structure

- [`index.html`](file:///home/suhail116740/Downloads/last_signal_website/index.html) — Single-page application, story-first flow, multi-language IDE, and modals.
- [`styles.css`](file:///home/suhail116740/Downloads/last_signal_website/styles.css) — Cyberpunk dark theme, story narrative cards, and responsive layout.
- [`challenges_data.js`](file:///home/suhail116740/Downloads/last_signal_website/challenges_data.js) — Complete 80-chapter storyline database with Python, C, and C++ templates.
- [`app.js`](file:///home/suhail116740/Downloads/last_signal_website/app.js) — Pyodide WASM runner, C/C++ engine, episodic story flow, and leaderboard.
- [`setup.sql`](file:///home/suhail116740/Downloads/last_signal_website/setup.sql) — PostgreSQL schema and secure RPC procedures for Supabase.
- [`team_roster.csv`](file:///home/suhail116740/Downloads/last_signal_website/team_roster.csv) — Roster template with 30 pre-configured team accounts.

---

## How to Test Locally

Serve the directory using any static HTTP server:

```bash
# Python 3
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser. The WebAssembly engine will initialize within 2-3 seconds.

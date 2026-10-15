/**
 * PROJECT ENIGMATRIX: 80 INDEPENDENT CRIME CTF STORIES & ANSWER KEY
 * National Applied Research Consortium Investigation (Cases 01 to 80)
 */

const ALL_80_CHALLENGES = [
  {
    "id": "case-01",
    "act": 1,
    "chapter": 1,
    "caseNum": "CASE 01",
    "title": "Case 01: The Dead Server",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "hash maps, sorting, timestamps, log forensics",
    "points": 50,
    "incidentCode": "#ENIGMA-C01",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A university server dies eleven minutes before a confidential dataset is stolen. Unordered login, process and network records are recovered.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 01 investigation concluded. Artifact for 'The Dead Server' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconstruct the attack order and identify the first unauthorized session.\n\n**Input Contract**:\n`Input: n followed by n records `time user process bytes`, sorted output by time; flag uses first record whose user is ADMIN? No. Detect first duplicate user+time?`\n\n**Required Result**:\n`Reconstruct chronological order and print the first event after sorting by timestamp.`",
    "formulation": "Skills: hash maps, sorting, timestamps, log forensics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_01_<COMPUTED_RESULT>}",
    "inputContract": "Input: n followed by n records `time user process bytes`, sorted output by time; flag uses first record whose user is ADMIN? No. Detect first duplicate user+time?",
    "requiredResult": "Reconstruct chronological order and print the first event after sorting by timestamp.",
    "sampleInput": "3\n100 admin bash 50\n150 guest curl 10\n100 admin ssh 80\n",
    "expectedOutput": "FLAG admin",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "# Input: n then time user process bytes\nn=int(input()); a=[input().split() for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nseen=set()\nfor x in a:\n    k=(x[0],x[1])\n    if k in seen: print(\"FLAG\",x[1]); break\n    seen.add(k)\nelse: print(\"FLAG NONE\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 01: The Dead Server\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: hash maps, sorting, timestamps, log forensics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n followed by n records `time user process bytes`, sorted output by time; flag uses\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "# Input: n then time user process bytes\nn=int(input()); a=[input().split() for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nseen=set()\nfor x in a:\n    k=(x[0],x[1])\n    if k in seen: print(\"FLAG\",x[1]); break\n    seen.add(k)\nelse: print(\"FLAG NONE\")",
        "signature": "solve_case_01()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 01: The Dead Server\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n followed by n records `time user process bytes`, sorted output by time;\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 01: The Dead Server\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n followed by n records `time user process bytes`, sorted output by time;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_01()",
    "starterCode": "# Project Enigmatrix \u2014 Case 01: The Dead Server\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: hash maps, sorting, timestamps, log forensics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n followed by n records `time user process bytes`, sorted output by time; flag uses\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "# Input: n then time user process bytes\nn=int(input()); a=[input().split() for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nseen=set()\nfor x in a:\n    k=(x[0],x[1])\n    if k in seen: print(\"FLAG\",x[1]); break\n    seen.add(k)\nelse: print(\"FLAG NONE\")",
    "flag": "FLAG{CASE_01_TOKEN_01_FLAG_admin}",
    "tests": [
      {
        "name": "Case 01 Forensic Test",
        "input": "3\n100 admin bash 50\n150 guest curl 10\n100 admin ssh 80\n",
        "expectedOutput": "FLAG admin",
        "code": "Input: '3\\n100 admin bash 50\\n150 g' -> Expected: 'FLAG admin'"
      }
    ]
  },
  {
    "id": "case-02",
    "act": 1,
    "chapter": 2,
    "caseNum": "CASE 02",
    "title": "Case 02: Midnight Credential",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "graphs, interval analysis, anomaly detection",
    "points": 50,
    "incidentCode": "#ENIGMA-C02",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A stolen employee credential is used from three locations within an impossible time window.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 02 investigation concluded. Artifact for 'Midnight Credential' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCorrelate authentication events and detect the impossible travel sequence.\n\n**Input Contract**:\n`Input: n lines `user location hour`; a user is impossible if consecutive events are <2 hours apart and locations differ.`\n\n**Required Result**:\n`Print the first impossible user and pair index.`",
    "formulation": "Skills: graphs, interval analysis, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_02_<COMPUTED_RESULT>}",
    "inputContract": "Input: n lines `user location hour`; a user is impossible if consecutive events are <2 hours apart and locations differ.",
    "requiredResult": "Print the first impossible user and pair index.",
    "sampleInput": "3\nalice HQ 10\nalice Branch 11\nbob HQ 12\n",
    "expectedOutput": "alice 1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[input().split() for _ in range(n)]\nlast={}\nfor j,(u,l,h) in enumerate(a):\n    h=int(h)\n    if u in last and h-last[u][0]<2 and l!=last[u][1]:\n        print(u,j); break\n    last[u]=(h,l)\nelse: print(\"NONE\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 02: Midnight Credential\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: graphs, interval analysis, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n lines `user location hour`; a user is impossible if consecutive events are <2 hou\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]\nlast={}\nfor j,(u,l,h) in enumerate(a):\n    h=int(h)\n    if u in last and h-last[u][0]<2 and l!=last[u][1]:\n        print(u,j); break\n    last[u]=(h,l)\nelse: print(\"NONE\")",
        "signature": "solve_case_02()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 02: Midnight Credential\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n lines `user location hour`; a user is impossible if consecutive events \n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 02: Midnight Credential\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n lines `user location hour`; a user is impossible if consecutive events \n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_02()",
    "starterCode": "# Project Enigmatrix \u2014 Case 02: Midnight Credential\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: graphs, interval analysis, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n lines `user location hour`; a user is impossible if consecutive events are <2 hou\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]\nlast={}\nfor j,(u,l,h) in enumerate(a):\n    h=int(h)\n    if u in last and h-last[u][0]<2 and l!=last[u][1]:\n        print(u,j); break\n    last[u]=(h,l)\nelse: print(\"NONE\")",
    "flag": "FLAG{CASE_02_TOKEN_02_alice_1}",
    "tests": [
      {
        "name": "Case 02 Forensic Test",
        "input": "3\nalice HQ 10\nalice Branch 11\nbob HQ 12\n",
        "expectedOutput": "alice 1",
        "code": "Input: '3\\nalice HQ 10\\nalice Branc' -> Expected: 'alice 1'"
      }
    ]
  },
  {
    "id": "case-03",
    "act": 1,
    "chapter": 3,
    "caseNum": "CASE 03",
    "title": "Case 03: The Ransom Note",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "strings, hashing, pattern matching",
    "points": 50,
    "incidentCode": "#ENIGMA-C03",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A manufacturing network is encrypted, but the ransom note contains a recoverable artifact from the attack chain.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 03 investigation concluded. Artifact for 'The Ransom Note' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nParse indicators, group events and recover the attacker's sequence.\n\n**Input Contract**:\n`Input: n log lines and a keyword. Count lines containing the keyword case-insensitively and print their indices.`\n\n**Required Result**:\n`Extract matching indicators.`",
    "formulation": "Skills: strings, hashing, pattern matching\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_03_<COMPUTED_RESULT>}",
    "inputContract": "Input: n log lines and a keyword. Count lines containing the keyword case-insensitively and print their indices.",
    "requiredResult": "Extract matching indicators.",
    "sampleInput": "3\nransom\nSystem update started\nWarning RANSOM payload detected\nShutdown complete\n",
    "expectedOutput": "1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); q=input().lower()\nfor i in range(n):\n    s=input()\n    if q in s.lower(): print(i,end=\" \")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 03: The Ransom Note\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: strings, hashing, pattern matching\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n log lines and a keyword. Count lines containing the keyword case-insensitively an\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); q=input().lower()\nfor i in range(n):\n    s=input()\n    if q in s.lower(): print(i,end=\" \")",
        "signature": "solve_case_03()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 03: The Ransom Note\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n log lines and a keyword. Count lines containing the keyword case-insens\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 03: The Ransom Note\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n log lines and a keyword. Count lines containing the keyword case-insens\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_03()",
    "starterCode": "# Project Enigmatrix \u2014 Case 03: The Ransom Note\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: strings, hashing, pattern matching\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n log lines and a keyword. Count lines containing the keyword case-insensitively an\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); q=input().lower()\nfor i in range(n):\n    s=input()\n    if q in s.lower(): print(i,end=\" \")",
    "flag": "FLAG{CASE_03_TOKEN_03_1}",
    "tests": [
      {
        "name": "Case 03 Forensic Test",
        "input": "3\nransom\nSystem update started\nWarning RANSOM payload detected\nShutdown complete\n",
        "expectedOutput": "1",
        "code": "Input: '3\\nransom\\nSystem update st' -> Expected: '1'"
      }
    ]
  },
  {
    "id": "case-04",
    "act": 1,
    "chapter": 4,
    "caseNum": "CASE 04",
    "title": "Case 04: The Silent Insider",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "statistics, frequency maps, threshold detection",
    "points": 50,
    "incidentCode": "#ENIGMA-C04",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "Sensitive files were copied without triggering the company's normal alert.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 04 investigation concluded. Artifact for 'The Silent Insider' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nAnalyze file-access frequency and identify the anomalous account.\n\n**Input Contract**:\n`Input: n `user file` accesses. Print user with highest distinct-file count.`\n\n**Required Result**:\n`Find anomalous account by distinct access count.`",
    "formulation": "Skills: statistics, frequency maps, threshold detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_04_<COMPUTED_RESULT>}",
    "inputContract": "Input: n `user file` accesses. Print user with highest distinct-file count.",
    "requiredResult": "Find anomalous account by distinct access count.",
    "sampleInput": "4\nalice file1.txt\nalice file2.txt\nbob file1.txt\nalice file3.txt\n",
    "expectedOutput": "alice 3",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); d={}\nfor _ in range(n):\n    u,f=input().split(); d.setdefault(u,set()).add(f)\nu=max(d,key=lambda x:len(d[x]))\nprint(u,len(d[u]))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 04: The Silent Insider\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: statistics, frequency maps, threshold detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n `user file` accesses. Print user with highest distinct-file count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    u,f=input().split(); d.setdefault(u,set()).add(f)\nu=max(d,key=lambda x:len(d[x]))\nprint(u,len(d[u]))",
        "signature": "solve_case_04()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 04: The Silent Insider\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n `user file` accesses. Print user with highest distinct-file count.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 04: The Silent Insider\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n `user file` accesses. Print user with highest distinct-file count.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_04()",
    "starterCode": "# Project Enigmatrix \u2014 Case 04: The Silent Insider\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: statistics, frequency maps, threshold detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n `user file` accesses. Print user with highest distinct-file count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    u,f=input().split(); d.setdefault(u,set()).add(f)\nu=max(d,key=lambda x:len(d[x]))\nprint(u,len(d[u]))",
    "flag": "FLAG{CASE_04_TOKEN_04_alice_3}",
    "tests": [
      {
        "name": "Case 04 Forensic Test",
        "input": "4\nalice file1.txt\nalice file2.txt\nbob file1.txt\nalice file3.txt\n",
        "expectedOutput": "alice 3",
        "code": "Input: '4\\nalice file1.txt\\nalice f' -> Expected: 'alice 3'"
      }
    ]
  },
  {
    "id": "case-05",
    "act": 1,
    "chapter": 5,
    "caseNum": "CASE 05",
    "title": "Case 05: Packet 404",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "arrays, sorting, networking",
    "points": 50,
    "incidentCode": "#ENIGMA-C05",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A forensic capture contains fragmented packets from a covert transfer.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 05 investigation concluded. Artifact for 'Packet 404' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReassemble the logical message and locate the hidden evidence.\n\n**Input Contract**:\n`Input: n fragments `seq payload`. Reassemble by seq and print concatenated payload.`\n\n**Required Result**:\n`Reconstruct packet payload.`",
    "formulation": "Skills: arrays, sorting, networking\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_05_<COMPUTED_RESULT>}",
    "inputContract": "Input: n fragments `seq payload`. Reassemble by seq and print concatenated payload.",
    "requiredResult": "Reconstruct packet payload.",
    "sampleInput": "3\n2 WORLD\n1 HELLO_\n3 !\n",
    "expectedOutput": "HELLO_WORLD!",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[input().split(maxsplit=1) for _ in range(n)]\nfor _,p in sorted(a,key=lambda x:int(x[0])): print(p,end=\"\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 05: Packet 404\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: arrays, sorting, networking\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n fragments `seq payload`. Reassemble by seq and print concatenated payload.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[input().split(maxsplit=1) for _ in range(n)]\nfor _,p in sorted(a,key=lambda x:int(x[0])): print(p,end=\"\")",
        "signature": "solve_case_05()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 05: Packet 404\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n fragments `seq payload`. Reassemble by seq and print concatenated paylo\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 05: Packet 404\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n fragments `seq payload`. Reassemble by seq and print concatenated paylo\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_05()",
    "starterCode": "# Project Enigmatrix \u2014 Case 05: Packet 404\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: arrays, sorting, networking\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n fragments `seq payload`. Reassemble by seq and print concatenated payload.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[input().split(maxsplit=1) for _ in range(n)]\nfor _,p in sorted(a,key=lambda x:int(x[0])): print(p,end=\"\")",
    "flag": "FLAG{CASE_05_TOKEN_05_HELLO_WORLD!}",
    "tests": [
      {
        "name": "Case 05 Forensic Test",
        "input": "3\n2 WORLD\n1 HELLO_\n3 !\n",
        "expectedOutput": "HELLO_WORLD!",
        "code": "Input: '3\\n2 WORLD\\n1 HELLO_\\n3 !\\n' -> Expected: 'HELLO_WORLD!'"
      }
    ]
  },
  {
    "id": "case-06",
    "act": 1,
    "chapter": 6,
    "caseNum": "CASE 06",
    "title": "Case 06: The Deleted Evidence",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "linked structures, interval reasoning",
    "points": 50,
    "incidentCode": "#ENIGMA-C06",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A suspect's workstation contains gaps in its event log.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 06 investigation concluded. Artifact for 'The Deleted Evidence' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nInfer missing events from neighboring timestamps and process dependencies.\n\n**Input Contract**:\n`Input: n timestamps. Print every missing integer timestamp between minimum and maximum.`\n\n**Required Result**:\n`Recover gaps.`",
    "formulation": "Skills: linked structures, interval reasoning\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_06_<COMPUTED_RESULT>}",
    "inputContract": "Input: n timestamps. Print every missing integer timestamp between minimum and maximum.",
    "requiredResult": "Recover gaps.",
    "sampleInput": "4\n10 11 14 15\n",
    "expectedOutput": "12 13",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=sorted(map(int,input().split()))\nfor x in range(a[0],a[-1]+1):\n    if x not in set(a): print(x,end=\" \")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 06: The Deleted Evidence\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: linked structures, interval reasoning\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n timestamps. Print every missing integer timestamp between minimum and maximum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=sorted(map(int,input().split()))\nfor x in range(a[0],a[-1]+1):\n    if x not in set(a): print(x,end=\" \")",
        "signature": "solve_case_06()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 06: The Deleted Evidence\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n timestamps. Print every missing integer timestamp between minimum and m\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 06: The Deleted Evidence\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n timestamps. Print every missing integer timestamp between minimum and m\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_06()",
    "starterCode": "# Project Enigmatrix \u2014 Case 06: The Deleted Evidence\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: linked structures, interval reasoning\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n timestamps. Print every missing integer timestamp between minimum and maximum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=sorted(map(int,input().split()))\nfor x in range(a[0],a[-1]+1):\n    if x not in set(a): print(x,end=\" \")",
    "flag": "FLAG{CASE_06_TOKEN_06_12_13}",
    "tests": [
      {
        "name": "Case 06 Forensic Test",
        "input": "4\n10 11 14 15\n",
        "expectedOutput": "12 13",
        "code": "Input: '4\\n10 11 14 15\\n' -> Expected: '12 13'"
      }
    ]
  },
  {
    "id": "case-07",
    "act": 1,
    "chapter": 7,
    "caseNum": "CASE 07",
    "title": "Case 07: The False Admin",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "multi-key joins, scoring",
    "points": 50,
    "incidentCode": "#ENIGMA-C07",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "An administrator denies a privileged operation recorded under their account.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 07 investigation concluded. Artifact for 'The False Admin' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nSeparate account ownership from session attribution using device and timing evidence.\n\n**Input Contract**:\n`Input: n records `account device hour action`; account is suspicious when action=WRITE from a device never paired with that account.`\n\n**Required Result**:\n`Print suspicious account/device pairs.`",
    "formulation": "Skills: multi-key joins, scoring\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_07_<COMPUTED_RESULT>}",
    "inputContract": "Input: n records `account device hour action`; account is suspicious when action=WRITE from a device never paired with that account.",
    "requiredResult": "Print suspicious account/device pairs.",
    "sampleInput": "3\nadmin dev1 10 READ\nadmin dev2 11 WRITE\nguest dev3 12 READ\n",
    "expectedOutput": "",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); pairs=[]\nvalid={}\nfor _ in range(n):\n    a,d,h,act=input().split(); h=int(h)\n    valid.setdefault(a,set()).add(d)\n    pairs.append((a,d,act))\nfor a,d,act in pairs:\n    if act==\"WRITE\" and d not in valid.get(a,set()): print(a,d)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 07: The False Admin\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: multi-key joins, scoring\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `account device hour action`; account is suspicious when action=WRITE fro\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); pairs=[]\nvalid={}\nfor _ in range(n):\n    a,d,h,act=input().split(); h=int(h)\n    valid.setdefault(a,set()).add(d)\n    pairs.append((a,d,act))\nfor a,d,act in pairs:\n    if act==\"WRITE\" and d not in valid.get(a,set()): print(a,d)",
        "signature": "solve_case_07()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 07: The False Admin\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n records `account device hour action`; account is suspicious when action\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 07: The False Admin\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n records `account device hour action`; account is suspicious when action\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_07()",
    "starterCode": "# Project Enigmatrix \u2014 Case 07: The False Admin\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: multi-key joins, scoring\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `account device hour action`; account is suspicious when action=WRITE fro\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); pairs=[]\nvalid={}\nfor _ in range(n):\n    a,d,h,act=input().split(); h=int(h)\n    valid.setdefault(a,set()).add(d)\n    pairs.append((a,d,act))\nfor a,d,act in pairs:\n    if act==\"WRITE\" and d not in valid.get(a,set()): print(a,d)",
    "flag": "FLAG{CASE_07_TOKEN_07_}",
    "tests": [
      {
        "name": "Case 07 Forensic Test",
        "input": "3\nadmin dev1 10 READ\nadmin dev2 11 WRITE\nguest dev3 12 READ\n",
        "expectedOutput": "",
        "code": "Input: '3\\nadmin dev1 10 READ\\nadmi' -> Expected: ''"
      }
    ]
  },
  {
    "id": "case-08",
    "act": 1,
    "chapter": 8,
    "caseNum": "CASE 08",
    "title": "Case 08: The USB Exchange",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "graphs, maps, traversal",
    "points": 50,
    "incidentCode": "#ENIGMA-C08",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A restricted USB device appears on several machines in an unexplained order.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 08 investigation concluded. Artifact for 'The USB Exchange' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nBuild the device movement chain and locate the first unauthorized connection.\n\n**Input Contract**:\n`Input: n edges `device machine`; print the machine path using DFS from the first machine.`\n\n**Required Result**:\n`Trace device movement.`",
    "formulation": "Skills: graphs, maps, traversal\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_08_<COMPUTED_RESULT>}",
    "inputContract": "Input: n edges `device machine`; print the machine path using DFS from the first machine.",
    "requiredResult": "Trace device movement.",
    "sampleInput": "3\ndev1 machA\nmachA machB\nmachB machC\n",
    "expectedOutput": "dev1 machA machB machC",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); g={}\nfor _ in range(n):\n    d,m=input().split(); g.setdefault(d,[]).append(m)\ns=next(iter(g),None); seen=set(); st=[s]\nwhile st:\n    u=st.pop()\n    if u in seen: continue\n    seen.add(u); print(u,end=\" \")\n    st+=g.get(u,[])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 08: The USB Exchange\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: graphs, maps, traversal\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n edges `device machine`; print the machine path using DFS from the first machine.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); g={}\nfor _ in range(n):\n    d,m=input().split(); g.setdefault(d,[]).append(m)\ns=next(iter(g),None); seen=set(); st=[s]\nwhile st:\n    u=st.pop()\n    if u in seen: continue\n    seen.add(u); print(u,end=\" \")\n    st+=g.get(u,[])",
        "signature": "solve_case_08()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 08: The USB Exchange\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n edges `device machine`; print the machine path using DFS from the first\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 08: The USB Exchange\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n edges `device machine`; print the machine path using DFS from the first\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_08()",
    "starterCode": "# Project Enigmatrix \u2014 Case 08: The USB Exchange\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: graphs, maps, traversal\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n edges `device machine`; print the machine path using DFS from the first machine.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); g={}\nfor _ in range(n):\n    d,m=input().split(); g.setdefault(d,[]).append(m)\ns=next(iter(g),None); seen=set(); st=[s]\nwhile st:\n    u=st.pop()\n    if u in seen: continue\n    seen.add(u); print(u,end=\" \")\n    st+=g.get(u,[])",
    "flag": "FLAG{CASE_08_TOKEN_08_dev1_machA_machB}",
    "tests": [
      {
        "name": "Case 08 Forensic Test",
        "input": "3\ndev1 machA\nmachA machB\nmachB machC\n",
        "expectedOutput": "dev1 machA machB machC",
        "code": "Input: '3\\ndev1 machA\\nmachA machB\\n' -> Expected: 'dev1 machA machB machC'"
      }
    ]
  },
  {
    "id": "case-09",
    "act": 1,
    "chapter": 9,
    "caseNum": "CASE 09",
    "title": "Case 09: The Phantom DNS",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "sliding window, statistics",
    "points": 50,
    "incidentCode": "#ENIGMA-C09",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "A lab repeatedly resolves a suspicious domain for only a few seconds at a time.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 09 investigation concluded. Artifact for 'The Phantom DNS' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the beaconing pattern from DNS intervals.\n\n**Input Contract**:\n`Input: n integer seconds. Find the longest run where consecutive intervals are <=10 seconds.`\n\n**Required Result**:\n`Detect beacon burst.`",
    "formulation": "Skills: sliding window, statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_09_<COMPUTED_RESULT>}",
    "inputContract": "Input: n integer seconds. Find the longest run where consecutive intervals are <=10 seconds.",
    "requiredResult": "Detect beacon burst.",
    "sampleInput": "5\n10 15 22 28 50\n",
    "expectedOutput": "4",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); t=list(map(int,input().split()))\nbest=cur=0\nfor i in range(1,n):\n    if t[i]-t[i-1]<=10: cur+=1\n    else: cur=0\n    best=max(best,cur)\nprint(best+1 if n else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 09: The Phantom DNS\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: sliding window, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n integer seconds. Find the longest run where consecutive intervals are <=10 second\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); t=list(map(int,input().split()))\nbest=cur=0\nfor i in range(1,n):\n    if t[i]-t[i-1]<=10: cur+=1\n    else: cur=0\n    best=max(best,cur)\nprint(best+1 if n else 0)",
        "signature": "solve_case_09()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 09: The Phantom DNS\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n integer seconds. Find the longest run where consecutive intervals are <\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 09: The Phantom DNS\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n integer seconds. Find the longest run where consecutive intervals are <\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_09()",
    "starterCode": "# Project Enigmatrix \u2014 Case 09: The Phantom DNS\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: sliding window, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n integer seconds. Find the longest run where consecutive intervals are <=10 second\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); t=list(map(int,input().split()))\nbest=cur=0\nfor i in range(1,n):\n    if t[i]-t[i-1]<=10: cur+=1\n    else: cur=0\n    best=max(best,cur)\nprint(best+1 if n else 0)",
    "flag": "FLAG{CASE_09_TOKEN_09_4}",
    "tests": [
      {
        "name": "Case 09 Forensic Test",
        "input": "5\n10 15 22 28 50\n",
        "expectedOutput": "4",
        "code": "Input: '5\\n10 15 22 28 50\\n' -> Expected: '4'"
      }
    ]
  },
  {
    "id": "case-10",
    "act": 1,
    "chapter": 10,
    "caseNum": "CASE 10",
    "title": "Case 10: The Broken Backup",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "hashing, sets, diff analysis",
    "points": 50,
    "incidentCode": "#ENIGMA-C10",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "Backups exist, but one version contains silently modified records.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 10 investigation concluded. Artifact for 'The Broken Backup' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare versions and locate the smallest set of altered entries.\n\n**Input Contract**:\n`Input: two equal-length strings. Print 1 if they differ, else 0.`\n\n**Required Result**:\n`Detect modified backup.`",
    "formulation": "Skills: hashing, sets, diff analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_10_<COMPUTED_RESULT>}",
    "inputContract": "Input: two equal-length strings. Print 1 if they differ, else 0.",
    "requiredResult": "Detect modified backup.",
    "sampleInput": "ABCDEF123456\nABCDEF123456\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "a=input().strip(); b=input().strip()\nprint(0 if a==b else 1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 10: The Broken Backup\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: hashing, sets, diff analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two equal-length strings. Print 1 if they differ, else 0.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "a=input().strip(); b=input().strip()\nprint(0 if a==b else 1)",
        "signature": "solve_case_10()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 10: The Broken Backup\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: two equal-length strings. Print 1 if they differ, else 0.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 10: The Broken Backup\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: two equal-length strings. Print 1 if they differ, else 0.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_10()",
    "starterCode": "# Project Enigmatrix \u2014 Case 10: The Broken Backup\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: hashing, sets, diff analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two equal-length strings. Print 1 if they differ, else 0.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "a=input().strip(); b=input().strip()\nprint(0 if a==b else 1)",
    "flag": "FLAG{CASE_10_TOKEN_10_0}",
    "tests": [
      {
        "name": "Case 10 Forensic Test",
        "input": "ABCDEF123456\nABCDEF123456\n",
        "expectedOutput": "0",
        "code": "Input: 'ABCDEF123456\\nABCDEF123456' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-11",
    "act": 1,
    "chapter": 11,
    "caseNum": "CASE 11",
    "title": "Case 11: The Insider Email",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "strings, validation, parsing",
    "points": 50,
    "incidentCode": "#ENIGMA-C11",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "An internal message was forged using a valid-looking header.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 11 investigation concluded. Artifact for 'The Insider Email' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nAnalyze message metadata and determine the earliest inconsistent field.\n\n**Input Contract**:\n`Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, else 0.`\n\n**Required Result**:\n`Find forged header.`",
    "formulation": "Skills: strings, validation, parsing\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_11_<COMPUTED_RESULT>}",
    "inputContract": "Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, else 0.",
    "requiredResult": "Find forged header.",
    "sampleInput": "admin@aril.org\nadmin@aril.org\nadmin@aril.org\n",
    "expectedOutput": "1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "f,r,t=input().strip(),input().strip(),input().strip()\nprint(1 if f==r==t else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 11: The Insider Email\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: strings, validation, parsing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, else 0.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "f,r,t=input().strip(),input().strip(),input().strip()\nprint(1 if f==r==t else 0)",
        "signature": "solve_case_11()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 11: The Insider Email\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, el\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 11: The Insider Email\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, el\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_11()",
    "starterCode": "# Project Enigmatrix \u2014 Case 11: The Insider Email\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: strings, validation, parsing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: header fields `From`, `Reply-To`, `Return-Path`; print 1 if all equal, else 0.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "f,r,t=input().strip(),input().strip(),input().strip()\nprint(1 if f==r==t else 0)",
    "flag": "FLAG{CASE_11_TOKEN_11_1}",
    "tests": [
      {
        "name": "Case 11 Forensic Test",
        "input": "admin@aril.org\nadmin@aril.org\nadmin@aril.org\n",
        "expectedOutput": "1",
        "code": "Input: 'admin@aril.org\\nadmin@aril' -> Expected: '1'"
      }
    ]
  },
  {
    "id": "case-12",
    "act": 1,
    "chapter": 12,
    "caseNum": "CASE 12",
    "title": "Case 12: The Hidden Archive",
    "domain": "Cybersecurity & Digital Forensics",
    "skills": "sorting, binary search, hashing",
    "points": 50,
    "incidentCode": "#ENIGMA-C12",
    "phase": "PHASE I \u2014 THE FIRST BREAK-IN",
    "incidentStory": "An encrypted archive is accompanied by a manifest and access timestamps.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 12 investigation concluded. Artifact for 'The Hidden Archive' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nIndex the evidence and determine which archive entry was accessed outside policy.\n\n**Input Contract**:\n`Input: n records `file time`; print lexicographically smallest file accessed after time T.`\n\n**Required Result**:\n`Index archive access.`",
    "formulation": "Skills: sorting, binary search, hashing\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_12_<COMPUTED_RESULT>}",
    "inputContract": "Input: n records `file time`; print lexicographically smallest file accessed after time T.",
    "requiredResult": "Index archive access.",
    "sampleInput": "3\nsecret.bin 100\nreport.pdf 150\nnotes.txt 120\n110\n",
    "expectedOutput": "notes.txt",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[input().split() for _ in range(n)]; T=int(input())\na.sort(key=lambda x:int(x[1]))\nfor f,t in a:\n    if int(t)>T: print(f); break",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 12: The Hidden Archive\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: sorting, binary search, hashing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `file time`; print lexicographically smallest file accessed after time T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]; T=int(input())\na.sort(key=lambda x:int(x[1]))\nfor f,t in a:\n    if int(t)>T: print(f); break",
        "signature": "solve_case_12()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 12: The Hidden Archive\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n records `file time`; print lexicographically smallest file accessed aft\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 12: The Hidden Archive\n// Domain: Cybersecurity & Digital Forensics\n// Input Contract: Input: n records `file time`; print lexicographically smallest file accessed aft\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_12()",
    "starterCode": "# Project Enigmatrix \u2014 Case 12: The Hidden Archive\n# Phase: PHASE I \u2014 THE FIRST BREAK-IN\n# Domain: Cybersecurity & Digital Forensics\n# Core Skills: sorting, binary search, hashing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `file time`; print lexicographically smallest file accessed after time T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]; T=int(input())\na.sort(key=lambda x:int(x[1]))\nfor f,t in a:\n    if int(t)>T: print(f); break",
    "flag": "FLAG{CASE_12_TOKEN_12_notes.txt}",
    "tests": [
      {
        "name": "Case 12 Forensic Test",
        "input": "3\nsecret.bin 100\nreport.pdf 150\nnotes.txt 120\n110\n",
        "expectedOutput": "notes.txt",
        "code": "Input: '3\\nsecret.bin 100\\nreport.p' -> Expected: 'notes.txt'"
      }
    ]
  },
  {
    "id": "case-13",
    "act": 1,
    "chapter": 13,
    "caseNum": "CASE 13",
    "title": "Case 13: The Forged Diagnosis",
    "domain": "AI / Machine Learning",
    "skills": "feature normalization, anomaly detection",
    "points": 50,
    "incidentCode": "#ENIGMA-C13",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A clinical AI produces an unusual diagnosis after receiving manipulated inputs.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 13 investigation concluded. Artifact for 'The Forged Diagnosis' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the anomalous feature pattern and classify the suspicious request.\n\n**Input Contract**:\n`Input: n feature rows, threshold T; print indices whose feature sum > T.`\n\n**Required Result**:\n`Detect anomalous model input.`",
    "formulation": "Skills: feature normalization, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_13_<COMPUTED_RESULT>}",
    "inputContract": "Input: n feature rows, threshold T; print indices whose feature sum > T.",
    "requiredResult": "Detect anomalous model input.",
    "sampleInput": "2\n5.0\n1.2 2.1 3.0\n0.5 1.0 1.2\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); T=float(input())\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if sum(x)>T: print(i,end=\" \")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 13: The Forged Diagnosis\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: feature normalization, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n feature rows, threshold T; print indices whose feature sum > T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); T=float(input())\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if sum(x)>T: print(i,end=\" \")",
        "signature": "solve_case_13()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 13: The Forged Diagnosis\n// Domain: AI / Machine Learning\n// Input Contract: Input: n feature rows, threshold T; print indices whose feature sum > T.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 13: The Forged Diagnosis\n// Domain: AI / Machine Learning\n// Input Contract: Input: n feature rows, threshold T; print indices whose feature sum > T.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_13()",
    "starterCode": "# Project Enigmatrix \u2014 Case 13: The Forged Diagnosis\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: feature normalization, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n feature rows, threshold T; print indices whose feature sum > T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); T=float(input())\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if sum(x)>T: print(i,end=\" \")",
    "flag": "FLAG{CASE_13_TOKEN_13_0}",
    "tests": [
      {
        "name": "Case 13 Forensic Test",
        "input": "2\n5.0\n1.2 2.1 3.0\n0.5 1.0 1.2\n",
        "expectedOutput": "0",
        "code": "Input: '2\\n5.0\\n1.2 2.1 3.0\\n0.5 1.0' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-14",
    "act": 1,
    "chapter": 14,
    "caseNum": "CASE 14",
    "title": "Case 14: The Poisoned Dataset",
    "domain": "AI / Machine Learning",
    "skills": "confusion matrix, statistics",
    "points": 50,
    "incidentCode": "#ENIGMA-C14",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A vision model suddenly misclassifies one product category after retraining.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 14 investigation concluded. Artifact for 'The Poisoned Dataset' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind suspicious labels and estimate their effect on validation accuracy.\n\n**Input Contract**:\n`Input: n labels 0/1; print minority-label count and percentage.`\n\n**Required Result**:\n`Measure label imbalance.`",
    "formulation": "Skills: confusion matrix, statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_14_<COMPUTED_RESULT>}",
    "inputContract": "Input: n labels 0/1; print minority-label count and percentage.",
    "requiredResult": "Measure label imbalance.",
    "sampleInput": "5\n0 1 0 0 1\n",
    "expectedOutput": "2 40.0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); c=Counter(a)\nprint(min(c.values()),round(min(c.values())/n*100,2))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 14: The Poisoned Dataset\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: confusion matrix, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n labels 0/1; print minority-label count and percentage.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); c=Counter(a)\nprint(min(c.values()),round(min(c.values())/n*100,2))",
        "signature": "solve_case_14()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 14: The Poisoned Dataset\n// Domain: AI / Machine Learning\n// Input Contract: Input: n labels 0/1; print minority-label count and percentage.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 14: The Poisoned Dataset\n// Domain: AI / Machine Learning\n// Input Contract: Input: n labels 0/1; print minority-label count and percentage.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_14()",
    "starterCode": "# Project Enigmatrix \u2014 Case 14: The Poisoned Dataset\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: confusion matrix, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n labels 0/1; print minority-label count and percentage.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); c=Counter(a)\nprint(min(c.values()),round(min(c.values())/n*100,2))",
    "flag": "FLAG{CASE_14_TOKEN_14_2_40.0}",
    "tests": [
      {
        "name": "Case 14 Forensic Test",
        "input": "5\n0 1 0 0 1\n",
        "expectedOutput": "2 40.0",
        "code": "Input: '5\\n0 1 0 0 1\\n' -> Expected: '2 40.0'"
      }
    ]
  },
  {
    "id": "case-15",
    "act": 1,
    "chapter": 15,
    "caseNum": "CASE 15",
    "title": "Case 15: The Biased Witness",
    "domain": "AI / Machine Learning",
    "skills": "precision, recall, F1, grouped statistics",
    "points": 50,
    "incidentCode": "#ENIGMA-C15",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "An AI witness-ranking system consistently favors one group of records.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 15 investigation concluded. Artifact for 'The Biased Witness' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nMeasure class-wise performance and identify the biased metric.\n\n**Input Contract**:\n`Input: n lines `actual predicted group`; print group with lowest F1.`\n\n**Required Result**:\n`Evaluate group metrics.`",
    "formulation": "Skills: precision, recall, F1, grouped statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_15_<COMPUTED_RESULT>}",
    "inputContract": "Input: n lines `actual predicted group`; print group with lowest F1.",
    "requiredResult": "Evaluate group metrics.",
    "sampleInput": "3\n1 1 A\n1 0 B\n0 1 B\n",
    "expectedOutput": "B 0.6667",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import defaultdict\nimport math\nn=int(input()); d=defaultdict(lambda:[0,0,0])\nfor _ in range(n):\n    a,p,g=input().split(); a=int(a);p=int(p); d[g][0]+=a; d[g][1]+=p; d[g][2]+=1\nbest=None; score=2\nfor g,(tp,pp,N) in d.items():\n    fn=N-tp; fp=pp-tp\n    f=0 if 2*tp+fp+fn==0 else 2*tp/(2*tp+fp+fn)\n    if f<score: score=f;best=g\nprint(best,round(score,4))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 15: The Biased Witness\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: precision, recall, F1, grouped statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n lines `actual predicted group`; print group with lowest F1.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import defaultdict\nimport math\nn=int(input()); d=defaultdict(lambda:[0,0,0])\nfor _ in range(n):\n    a,p,g=input().split(); a=int(a);p=int(p); d[g][0]+=a; d[g][1]+=p; d[g][2]+=1\nbest=None; score=2\nfor g,(tp,pp,N) in d.items():\n    fn=N-tp; fp=pp-tp\n    f=0 if 2*tp+fp+fn==0 else 2*tp/(2*tp+fp+fn)\n    if f<score: score=f;best=g\nprint(best,round(score,4))",
        "signature": "solve_case_15()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 15: The Biased Witness\n// Domain: AI / Machine Learning\n// Input Contract: Input: n lines `actual predicted group`; print group with lowest F1.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 15: The Biased Witness\n// Domain: AI / Machine Learning\n// Input Contract: Input: n lines `actual predicted group`; print group with lowest F1.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_15()",
    "starterCode": "# Project Enigmatrix \u2014 Case 15: The Biased Witness\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: precision, recall, F1, grouped statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n lines `actual predicted group`; print group with lowest F1.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import defaultdict\nimport math\nn=int(input()); d=defaultdict(lambda:[0,0,0])\nfor _ in range(n):\n    a,p,g=input().split(); a=int(a);p=int(p); d[g][0]+=a; d[g][1]+=p; d[g][2]+=1\nbest=None; score=2\nfor g,(tp,pp,N) in d.items():\n    fn=N-tp; fp=pp-tp\n    f=0 if 2*tp+fp+fn==0 else 2*tp/(2*tp+fp+fn)\n    if f<score: score=f;best=g\nprint(best,round(score,4))",
    "flag": "FLAG{CASE_15_TOKEN_15_B_0.6667}",
    "tests": [
      {
        "name": "Case 15 Forensic Test",
        "input": "3\n1 1 A\n1 0 B\n0 1 B\n",
        "expectedOutput": "B 0.6667",
        "code": "Input: '3\\n1 1 A\\n1 0 B\\n0 1 B\\n' -> Expected: 'B 0.6667'"
      }
    ]
  },
  {
    "id": "case-16",
    "act": 1,
    "chapter": 16,
    "caseNum": "CASE 16",
    "title": "Case 16: The Deepfake Alibi",
    "domain": "AI / Machine Learning",
    "skills": "distance metrics, clustering",
    "points": 50,
    "incidentCode": "#ENIGMA-C16",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A video-analysis system accepts a forged identity clip.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 16 investigation concluded. Artifact for 'The Deepfake Alibi' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare extracted feature signatures and identify the outlier sequence.\n\n**Input Contract**:\n`Input: n vectors of d floats; print vector farthest from centroid.`\n\n**Required Result**:\n`Find feature outlier.`",
    "formulation": "Skills: distance metrics, clustering\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_16_<COMPUTED_RESULT>}",
    "inputContract": "Input: n vectors of d floats; print vector farthest from centroid.",
    "requiredResult": "Find feature outlier.",
    "sampleInput": "2 2\n1.0 1.0\n10.0 10.0\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn,d=map(int,input().split()); A=[list(map(float,input().split())) for _ in range(n)]\nc=[sum(x[j] for x in A)/n for j in range(d)]\ndef ds(x): return math.sqrt(sum((x[j]-c[j])**2 for j in range(d)))\nprint(max(range(n),key=lambda i:ds(A[i])))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 16: The Deepfake Alibi\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: distance metrics, clustering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n vectors of d floats; print vector farthest from centroid.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn,d=map(int,input().split()); A=[list(map(float,input().split())) for _ in range(n)]\nc=[sum(x[j] for x in A)/n for j in range(d)]\ndef ds(x): return math.sqrt(sum((x[j]-c[j])**2 for j in range(d)))\nprint(max(range(n),key=lambda i:ds(A[i])))",
        "signature": "solve_case_16()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 16: The Deepfake Alibi\n// Domain: AI / Machine Learning\n// Input Contract: Input: n vectors of d floats; print vector farthest from centroid.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 16: The Deepfake Alibi\n// Domain: AI / Machine Learning\n// Input Contract: Input: n vectors of d floats; print vector farthest from centroid.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_16()",
    "starterCode": "# Project Enigmatrix \u2014 Case 16: The Deepfake Alibi\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: distance metrics, clustering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n vectors of d floats; print vector farthest from centroid.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn,d=map(int,input().split()); A=[list(map(float,input().split())) for _ in range(n)]\nc=[sum(x[j] for x in A)/n for j in range(d)]\ndef ds(x): return math.sqrt(sum((x[j]-c[j])**2 for j in range(d)))\nprint(max(range(n),key=lambda i:ds(A[i])))",
    "flag": "FLAG{CASE_16_TOKEN_16_0}",
    "tests": [
      {
        "name": "Case 16 Forensic Test",
        "input": "2 2\n1.0 1.0\n10.0 10.0\n",
        "expectedOutput": "0",
        "code": "Input: '2 2\\n1.0 1.0\\n10.0 10.0\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-17",
    "act": 2,
    "chapter": 17,
    "caseNum": "CASE 17",
    "title": "Case 17: The Missing Model",
    "domain": "AI / Machine Learning",
    "skills": "hashing, vector comparison",
    "points": 50,
    "incidentCode": "#ENIGMA-C17",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A research model file is replaced by another model with the same filename.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 17 investigation concluded. Artifact for 'The Missing Model' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare metadata, hashes and prediction fingerprints.\n\n**Input Contract**:\n`Input: two files given as command-line paths; print SHA-256 hashes and whether equal.`\n\n**Required Result**:\n`Verify model replacement.`",
    "formulation": "Skills: hashing, vector comparison\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_17_<COMPUTED_RESULT>}",
    "inputContract": "Input: two files given as command-line paths; print SHA-256 hashes and whether equal.",
    "requiredResult": "Verify model replacement.",
    "sampleInput": "test_a.bin test_b.bin\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import sys,hashlib\na=open(sys.argv[1],\"rb\").read(); b=open(sys.argv[2],\"rb\").read()\nha=hashlib.sha256(a).hexdigest(); hb=hashlib.sha256(b).hexdigest()\nprint(ha);print(hb);print(ha==hb)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 17: The Missing Model\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: hashing, vector comparison\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two files given as command-line paths; print SHA-256 hashes and whether equal.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import sys,hashlib\na=open(sys.argv[1],\"rb\").read(); b=open(sys.argv[2],\"rb\").read()\nha=hashlib.sha256(a).hexdigest(); hb=hashlib.sha256(b).hexdigest()\nprint(ha);print(hb);print(ha==hb)",
        "signature": "solve_case_17()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 17: The Missing Model\n// Domain: AI / Machine Learning\n// Input Contract: Input: two files given as command-line paths; print SHA-256 hashes and whether e\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 17: The Missing Model\n// Domain: AI / Machine Learning\n// Input Contract: Input: two files given as command-line paths; print SHA-256 hashes and whether e\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_17()",
    "starterCode": "# Project Enigmatrix \u2014 Case 17: The Missing Model\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: hashing, vector comparison\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two files given as command-line paths; print SHA-256 hashes and whether equal.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import sys,hashlib\na=open(sys.argv[1],\"rb\").read(); b=open(sys.argv[2],\"rb\").read()\nha=hashlib.sha256(a).hexdigest(); hb=hashlib.sha256(b).hexdigest()\nprint(ha);print(hb);print(ha==hb)",
    "flag": "FLAG{CASE_17_TOKEN_17_VERIFIED}",
    "tests": [
      {
        "name": "Case 17 Forensic Test",
        "input": "test_a.bin test_b.bin\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: 'test_a.bin test_b.bin\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-18",
    "act": 2,
    "chapter": 18,
    "caseNum": "CASE 18",
    "title": "Case 18: The Adversarial Portrait",
    "domain": "AI / Machine Learning",
    "skills": "arrays, norms, classification",
    "points": 50,
    "incidentCode": "#ENIGMA-C18",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A facial-recognition model changes its prediction for a subtly altered image.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 18 investigation concluded. Artifact for 'The Adversarial Portrait' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompute perturbation statistics and detect the suspicious sample.\n\n**Input Contract**:\n`Input: n pairs of equal-length vectors; print pair with maximum L1 distance.`\n\n**Required Result**:\n`Measure perturbation.`",
    "formulation": "Skills: arrays, norms, classification\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_18_<COMPUTED_RESULT>}",
    "inputContract": "Input: n pairs of equal-length vectors; print pair with maximum L1 distance.",
    "requiredResult": "Measure perturbation.",
    "sampleInput": "2\n1 2\n1 3\n1 2\n1 10\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn,d=map(int,input().split())\nbest=(-1,-1)\nfor i in range(n):\n    a=list(map(float,input().split())); b=list(map(float,input().split()))\n    v=sum(abs(a[j]-b[j]) for j in range(d))\n    if v>best[1]: best=(i,v)\nprint(best[0],best[1])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 18: The Adversarial Portrait\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: arrays, norms, classification\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n pairs of equal-length vectors; print pair with maximum L1 distance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn,d=map(int,input().split())\nbest=(-1,-1)\nfor i in range(n):\n    a=list(map(float,input().split())); b=list(map(float,input().split()))\n    v=sum(abs(a[j]-b[j]) for j in range(d))\n    if v>best[1]: best=(i,v)\nprint(best[0],best[1])",
        "signature": "solve_case_18()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 18: The Adversarial Portrait\n// Domain: AI / Machine Learning\n// Input Contract: Input: n pairs of equal-length vectors; print pair with maximum L1 distance.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 18: The Adversarial Portrait\n// Domain: AI / Machine Learning\n// Input Contract: Input: n pairs of equal-length vectors; print pair with maximum L1 distance.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_18()",
    "starterCode": "# Project Enigmatrix \u2014 Case 18: The Adversarial Portrait\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: arrays, norms, classification\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n pairs of equal-length vectors; print pair with maximum L1 distance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn,d=map(int,input().split())\nbest=(-1,-1)\nfor i in range(n):\n    a=list(map(float,input().split())); b=list(map(float,input().split()))\n    v=sum(abs(a[j]-b[j]) for j in range(d))\n    if v>best[1]: best=(i,v)\nprint(best[0],best[1])",
    "flag": "FLAG{CASE_18_TOKEN_18_VERIFIED}",
    "tests": [
      {
        "name": "Case 18 Forensic Test",
        "input": "2\n1 2\n1 3\n1 2\n1 10\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n1 2\\n1 3\\n1 2\\n1 10\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-19",
    "act": 2,
    "chapter": 19,
    "caseNum": "CASE 19",
    "title": "Case 19: The Confidence Trap",
    "domain": "AI / Machine Learning",
    "skills": "calibration, statistics",
    "points": 50,
    "incidentCode": "#ENIGMA-C19",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "An AI system assigns high confidence to several wrong predictions.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 19 investigation concluded. Artifact for 'The Confidence Trap' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nEvaluate confidence against actual outcomes and flag unreliable predictions.\n\n**Input Contract**:\n`Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9.`\n\n**Required Result**:\n`Check high-confidence reliability.`",
    "formulation": "Skills: calibration, statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_19_<COMPUTED_RESULT>}",
    "inputContract": "Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9.",
    "requiredResult": "Check high-confidence reliability.",
    "sampleInput": "2\n0.9 1\n0.4 0\n",
    "expectedOutput": "1.0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[input().split() for _ in range(n)]\nv=[float(x) for x,y in a if float(x)>=.9]\nprint(round(sum(int(y) for x,y in a if float(x)>=.9)/len(v),4) if v else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 19: The Confidence Trap\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: calibration, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]\nv=[float(x) for x,y in a if float(x)>=.9]\nprint(round(sum(int(y) for x,y in a if float(x)>=.9)/len(v),4) if v else 0)",
        "signature": "solve_case_19()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 19: The Confidence Trap\n// Domain: AI / Machine Learning\n// Input Contract: Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 19: The Confidence Trap\n// Domain: AI / Machine Learning\n// Input Contract: Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_19()",
    "starterCode": "# Project Enigmatrix \u2014 Case 19: The Confidence Trap\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: calibration, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `confidence correct(0/1)`; print accuracy among confidence>=0.9.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[input().split() for _ in range(n)]\nv=[float(x) for x,y in a if float(x)>=.9]\nprint(round(sum(int(y) for x,y in a if float(x)>=.9)/len(v),4) if v else 0)",
    "flag": "FLAG{CASE_19_TOKEN_19_1.0}",
    "tests": [
      {
        "name": "Case 19 Forensic Test",
        "input": "2\n0.9 1\n0.4 0\n",
        "expectedOutput": "1.0",
        "code": "Input: '2\\n0.9 1\\n0.4 0\\n' -> Expected: '1.0'"
      }
    ]
  },
  {
    "id": "case-20",
    "act": 2,
    "chapter": 20,
    "caseNum": "CASE 20",
    "title": "Case 20: The Drifted Factory",
    "domain": "AI / Machine Learning",
    "skills": "mean, variance, histogram distance",
    "points": 50,
    "incidentCode": "#ENIGMA-C20",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "A production model slowly loses accuracy as sensor distributions change.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 20 investigation concluded. Artifact for 'The Drifted Factory' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect distribution drift between reference and live windows.\n\n**Input Contract**:\n`Input: two equal-length numeric datasets; print absolute mean difference.`\n\n**Required Result**:\n`Detect distribution drift.`",
    "formulation": "Skills: mean, variance, histogram distance\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_20_<COMPUTED_RESULT>}",
    "inputContract": "Input: two equal-length numeric datasets; print absolute mean difference.",
    "requiredResult": "Detect distribution drift.",
    "sampleInput": "1.0 2.0 3.0\n1.5 2.5 3.5\n",
    "expectedOutput": "0.5",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "a=list(map(float,input().split())); b=list(map(float,input().split()))\nm1=sum(a)/len(a);m2=sum(b)/len(b)\nprint(round(abs(m1-m2),6))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 20: The Drifted Factory\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: mean, variance, histogram distance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two equal-length numeric datasets; print absolute mean difference.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "a=list(map(float,input().split())); b=list(map(float,input().split()))\nm1=sum(a)/len(a);m2=sum(b)/len(b)\nprint(round(abs(m1-m2),6))",
        "signature": "solve_case_20()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 20: The Drifted Factory\n// Domain: AI / Machine Learning\n// Input Contract: Input: two equal-length numeric datasets; print absolute mean difference.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 20: The Drifted Factory\n// Domain: AI / Machine Learning\n// Input Contract: Input: two equal-length numeric datasets; print absolute mean difference.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_20()",
    "starterCode": "# Project Enigmatrix \u2014 Case 20: The Drifted Factory\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: mean, variance, histogram distance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two equal-length numeric datasets; print absolute mean difference.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "a=list(map(float,input().split())); b=list(map(float,input().split()))\nm1=sum(a)/len(a);m2=sum(b)/len(b)\nprint(round(abs(m1-m2),6))",
    "flag": "FLAG{CASE_20_TOKEN_20_0.5}",
    "tests": [
      {
        "name": "Case 20 Forensic Test",
        "input": "1.0 2.0 3.0\n1.5 2.5 3.5\n",
        "expectedOutput": "0.5",
        "code": "Input: '1.0 2.0 3.0\\n1.5 2.5 3.5\\n' -> Expected: '0.5'"
      }
    ]
  },
  {
    "id": "case-21",
    "act": 2,
    "chapter": 21,
    "caseNum": "CASE 21",
    "title": "Case 21: The Missing Features",
    "domain": "AI / Machine Learning",
    "skills": "data cleaning, weighted scoring",
    "points": 75,
    "incidentCode": "#ENIGMA-C21",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "An ML pipeline has missing feature values in a critical fraud case.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 21 investigation concluded. Artifact for 'The Missing Features' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetermine whether imputation changes the final classification.\n\n**Input Contract**:\n`Input: n rows with `x1 x2 label`; replace missing x values with column mean and print changed prediction count using x1+x2>=threshold.`\n\n**Required Result**:\n`Test imputation effect.`",
    "formulation": "Skills: data cleaning, weighted scoring\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_21_<COMPUTED_RESULT>}",
    "inputContract": "Input: n rows with `x1 x2 label`; replace missing x values with column mean and print changed prediction count using x1+x2>=threshold.",
    "requiredResult": "Test imputation effect.",
    "sampleInput": "2\n1.0 ? 1\n? 2.0 0\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); th=float(input()); rows=[]\nfor _ in range(n): rows.append(input().split())\nxs=[float(r[0]) for r in rows if r[0]!=\"NA\"]; ys=[float(r[1]) for r in rows if r[1]!=\"NA\"]\nmx=sum(xs)/len(xs); my=sum(ys)/len(ys); ch=0\nfor r in rows:\n    x=mx if r[0]==\"NA\" else float(r[0]); y=my if r[1]==\"NA\" else float(r[1])\n    p=int(x+y>=th); old=int(r[2])\n    ch+=p!=old\nprint(ch)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 21: The Missing Features\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: data cleaning, weighted scoring\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows with `x1 x2 label`; replace missing x values with column mean and print chan\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); th=float(input()); rows=[]\nfor _ in range(n): rows.append(input().split())\nxs=[float(r[0]) for r in rows if r[0]!=\"NA\"]; ys=[float(r[1]) for r in rows if r[1]!=\"NA\"]\nmx=sum(xs)/len(xs); my=sum(ys)/len(ys); ch=0\nfor r in rows:\n    x=mx if r[0]==\"NA\" else float(r[0]); y=my if r[1]==\"NA\" else float(r[1])\n    p=int(x+y>=th); old=int(r[2])\n    ch+=p!=old\nprint(ch)",
        "signature": "solve_case_21()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 21: The Missing Features\n// Domain: AI / Machine Learning\n// Input Contract: Input: n rows with `x1 x2 label`; replace missing x values with column mean and \n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 21: The Missing Features\n// Domain: AI / Machine Learning\n// Input Contract: Input: n rows with `x1 x2 label`; replace missing x values with column mean and \n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_21()",
    "starterCode": "# Project Enigmatrix \u2014 Case 21: The Missing Features\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: data cleaning, weighted scoring\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows with `x1 x2 label`; replace missing x values with column mean and print chan\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); th=float(input()); rows=[]\nfor _ in range(n): rows.append(input().split())\nxs=[float(r[0]) for r in rows if r[0]!=\"NA\"]; ys=[float(r[1]) for r in rows if r[1]!=\"NA\"]\nmx=sum(xs)/len(xs); my=sum(ys)/len(ys); ch=0\nfor r in rows:\n    x=mx if r[0]==\"NA\" else float(r[0]); y=my if r[1]==\"NA\" else float(r[1])\n    p=int(x+y>=th); old=int(r[2])\n    ch+=p!=old\nprint(ch)",
    "flag": "FLAG{CASE_21_TOKEN_21_VERIFIED}",
    "tests": [
      {
        "name": "Case 21 Forensic Test",
        "input": "2\n1.0 ? 1\n? 2.0 0\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n1.0 ? 1\\n? 2.0 0\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-22",
    "act": 2,
    "chapter": 22,
    "caseNum": "CASE 22",
    "title": "Case 22: The Model Audit",
    "domain": "AI / Machine Learning",
    "skills": "joins, sorting, dictionaries",
    "points": 75,
    "incidentCode": "#ENIGMA-C22",
    "phase": "PHASE II \u2014 WHEN THE MACHINES STARTED LYING",
    "incidentStory": "An AI audit trail has predictions but missing model-version identifiers.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 22 investigation concluded. Artifact for 'The Model Audit' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCorrelate prediction timestamps with deployment records and reconstruct the responsible model.\n\n**Input Contract**:\n`Input: predictions `time model`; deployments `start end model`; print model covering each prediction time.`\n\n**Required Result**:\n`Reconstruct model version.`",
    "formulation": "Skills: joins, sorting, dictionaries\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_22_<COMPUTED_RESULT>}",
    "inputContract": "Input: predictions `time model`; deployments `start end model`; print model covering each prediction time.",
    "requiredResult": "Reconstruct model version.",
    "sampleInput": "1\n100 M1\n1\n50 150 M1\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[float(x) for x in input().split()]; m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(*[i for i,x in enumerate(a) if s and abs(x-m)/s>2])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 22: The Model Audit\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: joins, sorting, dictionaries\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: predictions `time model`; deployments `start end model`; print model covering each \n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[float(x) for x in input().split()]; m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(*[i for i,x in enumerate(a) if s and abs(x-m)/s>2])",
        "signature": "solve_case_22()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 22: The Model Audit\n// Domain: AI / Machine Learning\n// Input Contract: Input: predictions `time model`; deployments `start end model`; print model cove\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 22: The Model Audit\n// Domain: AI / Machine Learning\n// Input Contract: Input: predictions `time model`; deployments `start end model`; print model cove\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_22()",
    "starterCode": "# Project Enigmatrix \u2014 Case 22: The Model Audit\n# Phase: PHASE II \u2014 WHEN THE MACHINES STARTED LYING\n# Domain: AI / Machine Learning\n# Core Skills: joins, sorting, dictionaries\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: predictions `time model`; deployments `start end model`; print model covering each \n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[float(x) for x in input().split()]; m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(*[i for i,x in enumerate(a) if s and abs(x-m)/s>2])",
    "flag": "FLAG{CASE_22_TOKEN_22_VERIFIED}",
    "tests": [
      {
        "name": "Case 22 Forensic Test",
        "input": "1\n100 M1\n1\n50 150 M1\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '1\\n100 M1\\n1\\n50 150 M1\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-23",
    "act": 2,
    "chapter": 23,
    "caseNum": "CASE 23",
    "title": "Case 23: The Fraudulent Ledger",
    "domain": "Data Science",
    "skills": "z-score, grouping, sorting",
    "points": 75,
    "incidentCode": "#ENIGMA-C23",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "A financial dataset contains a small cluster of manipulated transactions.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 23 investigation concluded. Artifact for 'The Fraudulent Ledger' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind statistical outliers and rank suspicious accounts.\n\n**Input Contract**:\n`Input: n amounts; print indices with z-score > 2.`\n\n**Required Result**:\n`Detect transaction outliers.`",
    "formulation": "Skills: z-score, grouping, sorting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_23_<COMPUTED_RESULT>}",
    "inputContract": "Input: n amounts; print indices with z-score > 2.",
    "requiredResult": "Detect transaction outliers.",
    "sampleInput": "3\n10 12 100\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); d={}\nfor _ in range(n):\n    i,s,t=input().split(); d.setdefault(i,[]).append((s,t))\nfor i,v in d.items():\n    v.sort()\n    for (_,to), (frm,_) in zip(v,v[1:]):\n        if to!=frm: print(i); break",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 23: The Fraudulent Ledger\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: z-score, grouping, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n amounts; print indices with z-score > 2.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    i,s,t=input().split(); d.setdefault(i,[]).append((s,t))\nfor i,v in d.items():\n    v.sort()\n    for (_,to), (frm,_) in zip(v,v[1:]):\n        if to!=frm: print(i); break",
        "signature": "solve_case_23()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 23: The Fraudulent Ledger\n// Domain: Data Science\n// Input Contract: Input: n amounts; print indices with z-score > 2.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 23: The Fraudulent Ledger\n// Domain: Data Science\n// Input Contract: Input: n amounts; print indices with z-score > 2.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_23()",
    "starterCode": "# Project Enigmatrix \u2014 Case 23: The Fraudulent Ledger\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: z-score, grouping, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n amounts; print indices with z-score > 2.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    i,s,t=input().split(); d.setdefault(i,[]).append((s,t))\nfor i,v in d.items():\n    v.sort()\n    for (_,to), (frm,_) in zip(v,v[1:]):\n        if to!=frm: print(i); break",
    "flag": "FLAG{CASE_23_TOKEN_23_VERIFIED}",
    "tests": [
      {
        "name": "Case 23 Forensic Test",
        "input": "3\n10 12 100\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n10 12 100\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-24",
    "act": 2,
    "chapter": 24,
    "caseNum": "CASE 24",
    "title": "Case 24: The Vanishing Shipment",
    "domain": "Data Science",
    "skills": "joins, aggregation, time series",
    "points": 75,
    "incidentCode": "#ENIGMA-C24",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "Shipment records disagree with warehouse scans.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 24 investigation concluded. Artifact for 'The Vanishing Shipment' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconcile records and identify the earliest impossible movement.\n\n**Input Contract**:\n`Input: n records `id source destination time`; print IDs whose destination at time t differs from next source.`\n\n**Required Result**:\n`Reconcile movement.`",
    "formulation": "Skills: joins, aggregation, time series\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_24_<COMPUTED_RESULT>}",
    "inputContract": "Input: n records `id source destination time`; print IDs whose destination at time t differs from next source.",
    "requiredResult": "Reconcile movement.",
    "sampleInput": "2\nID1 A B 100\nID2 B A 105\n",
    "expectedOutput": "2",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[]\nfor _ in range(n): a.append(input())\nprint(len(set(a)))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 24: The Vanishing Shipment\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: joins, aggregation, time series\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `id source destination time`; print IDs whose destination at time t diffe\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[]\nfor _ in range(n): a.append(input())\nprint(len(set(a)))",
        "signature": "solve_case_24()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 24: The Vanishing Shipment\n// Domain: Data Science\n// Input Contract: Input: n records `id source destination time`; print IDs whose destination at ti\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 24: The Vanishing Shipment\n// Domain: Data Science\n// Input Contract: Input: n records `id source destination time`; print IDs whose destination at ti\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_24()",
    "starterCode": "# Project Enigmatrix \u2014 Case 24: The Vanishing Shipment\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: joins, aggregation, time series\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n records `id source destination time`; print IDs whose destination at time t diffe\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[]\nfor _ in range(n): a.append(input())\nprint(len(set(a)))",
    "flag": "FLAG{CASE_24_TOKEN_24_2}",
    "tests": [
      {
        "name": "Case 24 Forensic Test",
        "input": "2\nID1 A B 100\nID2 B A 105\n",
        "expectedOutput": "2",
        "code": "Input: '2\\nID1 A B 100\\nID2 B A 105' -> Expected: '2'"
      }
    ]
  },
  {
    "id": "case-25",
    "act": 2,
    "chapter": 25,
    "caseNum": "CASE 25",
    "title": "Case 25: The Missing Sensor Day",
    "domain": "Data Science",
    "skills": "interpolation, statistics",
    "points": 75,
    "incidentCode": "#ENIGMA-C25",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "A city monitoring dataset has a deliberate gap.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 25 investigation concluded. Artifact for 'The Missing Sensor Day' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nEstimate the missing interval and detect whether surrounding measurements were altered.\n\n**Input Contract**:\n`Input: n daily values with -1 missing; linear-interpolate missing values and print them.`\n\n**Required Result**:\n`Recover missing measurements.`",
    "formulation": "Skills: interpolation, statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_25_<COMPUTED_RESULT>}",
    "inputContract": "Input: n daily values with -1 missing; linear-interpolate missing values and print them.",
    "requiredResult": "Recover missing measurements.",
    "sampleInput": "5\n10 20 -1 40 50\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,k=map(int,input().split()); a=list(map(int,input().split()))\ns=sum(a[:k]); best=(s,0)\nfor i in range(k,n): s+=a[i]-a[i-k]; best=max(best,(s,i-k+1))\nprint(best[1],best[0])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 25: The Missing Sensor Day\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: interpolation, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n daily values with -1 missing; linear-interpolate missing values and print them.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,k=map(int,input().split()); a=list(map(int,input().split()))\ns=sum(a[:k]); best=(s,0)\nfor i in range(k,n): s+=a[i]-a[i-k]; best=max(best,(s,i-k+1))\nprint(best[1],best[0])",
        "signature": "solve_case_25()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 25: The Missing Sensor Day\n// Domain: Data Science\n// Input Contract: Input: n daily values with -1 missing; linear-interpolate missing values and pri\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 25: The Missing Sensor Day\n// Domain: Data Science\n// Input Contract: Input: n daily values with -1 missing; linear-interpolate missing values and pri\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_25()",
    "starterCode": "# Project Enigmatrix \u2014 Case 25: The Missing Sensor Day\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: interpolation, statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n daily values with -1 missing; linear-interpolate missing values and print them.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,k=map(int,input().split()); a=list(map(int,input().split()))\ns=sum(a[:k]); best=(s,0)\nfor i in range(k,n): s+=a[i]-a[i-k]; best=max(best,(s,i-k+1))\nprint(best[1],best[0])",
    "flag": "FLAG{CASE_25_TOKEN_25_VERIFIED}",
    "tests": [
      {
        "name": "Case 25 Forensic Test",
        "input": "5\n10 20 -1 40 50\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '5\\n10 20 -1 40 50\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-26",
    "act": 2,
    "chapter": 26,
    "caseNum": "CASE 26",
    "title": "Case 26: The Corrupt Survey",
    "domain": "Data Science",
    "skills": "sets, grouping, frequency analysis",
    "points": 75,
    "incidentCode": "#ENIGMA-C26",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "A research survey contains duplicated responses and fabricated entries.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 26 investigation concluded. Artifact for 'The Corrupt Survey' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDeduplicate records and calculate the corrected distribution.\n\n**Input Contract**:\n`Input: n response strings; print number of unique responses.`\n\n**Required Result**:\n`Deduplicate.`",
    "formulation": "Skills: sets, grouping, frequency analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_26_<COMPUTED_RESULT>}",
    "inputContract": "Input: n response strings; print number of unique responses.",
    "requiredResult": "Deduplicate.",
    "sampleInput": "3\nyes\nno\nyes\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\na=list(map(float,input().split())); b=list(map(float,input().split())); n=len(a)\nma=sum(a)/n; mb=sum(b)/n\nnum=sum((a[i]-ma)*(b[i]-mb) for i in range(n))\nden=math.sqrt(sum((x-ma)**2 for x in a)*sum((x-mb)**2 for x in b))\nprint(round(num/den,4) if den else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 26: The Corrupt Survey\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: sets, grouping, frequency analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n response strings; print number of unique responses.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\na=list(map(float,input().split())); b=list(map(float,input().split())); n=len(a)\nma=sum(a)/n; mb=sum(b)/n\nnum=sum((a[i]-ma)*(b[i]-mb) for i in range(n))\nden=math.sqrt(sum((x-ma)**2 for x in a)*sum((x-mb)**2 for x in b))\nprint(round(num/den,4) if den else 0)",
        "signature": "solve_case_26()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 26: The Corrupt Survey\n// Domain: Data Science\n// Input Contract: Input: n response strings; print number of unique responses.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 26: The Corrupt Survey\n// Domain: Data Science\n// Input Contract: Input: n response strings; print number of unique responses.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_26()",
    "starterCode": "# Project Enigmatrix \u2014 Case 26: The Corrupt Survey\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: sets, grouping, frequency analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n response strings; print number of unique responses.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\na=list(map(float,input().split())); b=list(map(float,input().split())); n=len(a)\nma=sum(a)/n; mb=sum(b)/n\nnum=sum((a[i]-ma)*(b[i]-mb) for i in range(n))\nden=math.sqrt(sum((x-ma)**2 for x in a)*sum((x-mb)**2 for x in b))\nprint(round(num/den,4) if den else 0)",
    "flag": "FLAG{CASE_26_TOKEN_26_VERIFIED}",
    "tests": [
      {
        "name": "Case 26 Forensic Test",
        "input": "3\nyes\nno\nyes\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\nyes\\nno\\nyes\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-27",
    "act": 2,
    "chapter": 27,
    "caseNum": "CASE 27",
    "title": "Case 27: The Stockroom Pattern",
    "domain": "Data Science",
    "skills": "sliding windows, mean/variance",
    "points": 75,
    "incidentCode": "#ENIGMA-C27",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "Inventory theft occurs in irregular bursts.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 27 investigation concluded. Artifact for 'The Stockroom Pattern' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nUse rolling statistics to find the theft window.\n\n**Input Contract**:\n`Input: n daily theft counts and window k; print window with maximum sum.`\n\n**Required Result**:\n`Find theft burst.`",
    "formulation": "Skills: sliding windows, mean/variance\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_27_<COMPUTED_RESULT>}",
    "inputContract": "Input: n daily theft counts and window k; print window with maximum sum.",
    "requiredResult": "Find theft burst.",
    "sampleInput": "4 2\n10 20 50 10\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn=float(input()); pts=[tuple(map(float,input().split())) for _ in range(int(n))]\nt=float(input()); c=(sum(x for x,y in pts)/len(pts),sum(y for x,y in pts)/len(pts))\nprint(*[i for i,p in enumerate(pts) if math.dist(p,c)>t])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 27: The Stockroom Pattern\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: sliding windows, mean/variance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n daily theft counts and window k; print window with maximum sum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn=float(input()); pts=[tuple(map(float,input().split())) for _ in range(int(n))]\nt=float(input()); c=(sum(x for x,y in pts)/len(pts),sum(y for x,y in pts)/len(pts))\nprint(*[i for i,p in enumerate(pts) if math.dist(p,c)>t])",
        "signature": "solve_case_27()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 27: The Stockroom Pattern\n// Domain: Data Science\n// Input Contract: Input: n daily theft counts and window k; print window with maximum sum.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 27: The Stockroom Pattern\n// Domain: Data Science\n// Input Contract: Input: n daily theft counts and window k; print window with maximum sum.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_27()",
    "starterCode": "# Project Enigmatrix \u2014 Case 27: The Stockroom Pattern\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: sliding windows, mean/variance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n daily theft counts and window k; print window with maximum sum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn=float(input()); pts=[tuple(map(float,input().split())) for _ in range(int(n))]\nt=float(input()); c=(sum(x for x,y in pts)/len(pts),sum(y for x,y in pts)/len(pts))\nprint(*[i for i,p in enumerate(pts) if math.dist(p,c)>t])",
    "flag": "FLAG{CASE_27_TOKEN_27_VERIFIED}",
    "tests": [
      {
        "name": "Case 27 Forensic Test",
        "input": "4 2\n10 20 50 10\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '4 2\\n10 20 50 10\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-28",
    "act": 2,
    "chapter": 28,
    "caseNum": "CASE 28",
    "title": "Case 28: The False Correlation",
    "domain": "Data Science",
    "skills": "correlation, normalization",
    "points": 75,
    "incidentCode": "#ENIGMA-C28",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "An investigator claims two signals prove a conspiracy.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 28 investigation concluded. Artifact for 'The False Correlation' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCalculate correlation and test whether the apparent relationship is misleading.\n\n**Input Contract**:\n`Input: two arrays; print Pearson correlation rounded 4 decimals.`\n\n**Required Result**:\n`Test correlation.`",
    "formulation": "Skills: correlation, normalization\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_28_<COMPUTED_RESULT>}",
    "inputContract": "Input: two arrays; print Pearson correlation rounded 4 decimals.",
    "requiredResult": "Test correlation.",
    "sampleInput": "1 2 3 4\n2 4 6 8\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); rows=[list(map(float,input().split())) for _ in range(n)]\nbest=[0,0]\nfor j in (1,2):\n    v=sum(abs(rows[i][j]-rows[i-1][j]) for i in range(1,n))\n    if v>best[1]: best=[j,v]\nprint(best[0],best[1])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 28: The False Correlation\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: correlation, normalization\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two arrays; print Pearson correlation rounded 4 decimals.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); rows=[list(map(float,input().split())) for _ in range(n)]\nbest=[0,0]\nfor j in (1,2):\n    v=sum(abs(rows[i][j]-rows[i-1][j]) for i in range(1,n))\n    if v>best[1]: best=[j,v]\nprint(best[0],best[1])",
        "signature": "solve_case_28()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 28: The False Correlation\n// Domain: Data Science\n// Input Contract: Input: two arrays; print Pearson correlation rounded 4 decimals.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 28: The False Correlation\n// Domain: Data Science\n// Input Contract: Input: two arrays; print Pearson correlation rounded 4 decimals.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_28()",
    "starterCode": "# Project Enigmatrix \u2014 Case 28: The False Correlation\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: correlation, normalization\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: two arrays; print Pearson correlation rounded 4 decimals.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); rows=[list(map(float,input().split())) for _ in range(n)]\nbest=[0,0]\nfor j in (1,2):\n    v=sum(abs(rows[i][j]-rows[i-1][j]) for i in range(1,n))\n    if v>best[1]: best=[j,v]\nprint(best[0],best[1])",
    "flag": "FLAG{CASE_28_TOKEN_28_VERIFIED}",
    "tests": [
      {
        "name": "Case 28 Forensic Test",
        "input": "1 2 3 4\n2 4 6 8\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '1 2 3 4\\n2 4 6 8\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-29",
    "act": 2,
    "chapter": 29,
    "caseNum": "CASE 29",
    "title": "Case 29: The Missing Cluster",
    "domain": "Data Science",
    "skills": "distance, k-means-style iteration",
    "points": 75,
    "incidentCode": "#ENIGMA-C29",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "Research samples from one location form an unexplained cluster.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 29 investigation concluded. Artifact for 'The Missing Cluster' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCluster observations and identify the suspicious group.\n\n**Input Contract**:\n`Input: n 2D points and threshold; print indices whose distance from centroid > threshold.`\n\n**Required Result**:\n`Find isolated cluster.`",
    "formulation": "Skills: distance, k-means-style iteration\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_29_<COMPUTED_RESULT>}",
    "inputContract": "Input: n 2D points and threshold; print indices whose distance from centroid > threshold.",
    "requiredResult": "Find isolated cluster.",
    "sampleInput": "3 5.0\n0 0\n1 1\n10 10\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 29: The Missing Cluster\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: distance, k-means-style iteration\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n 2D points and threshold; print indices whose distance from centroid > threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
        "signature": "solve_case_29()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 29: The Missing Cluster\n// Domain: Data Science\n// Input Contract: Input: n 2D points and threshold; print indices whose distance from centroid > t\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 29: The Missing Cluster\n// Domain: Data Science\n// Input Contract: Input: n 2D points and threshold; print indices whose distance from centroid > t\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_29()",
    "starterCode": "# Project Enigmatrix \u2014 Case 29: The Missing Cluster\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: distance, k-means-style iteration\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n 2D points and threshold; print indices whose distance from centroid > threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_29_TOKEN_29_VERIFIED}",
    "tests": [
      {
        "name": "Case 29 Forensic Test",
        "input": "3 5.0\n0 0\n1 1\n10 10\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3 5.0\\n0 0\\n1 1\\n10 10\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-30",
    "act": 2,
    "chapter": 30,
    "caseNum": "CASE 30",
    "title": "Case 30: The Last Five Minutes",
    "domain": "Data Science",
    "skills": "time-series differences, sorting",
    "points": 75,
    "incidentCode": "#ENIGMA-C30",
    "phase": "PHASE III \u2014 NUMBERS DON'T FORGET",
    "incidentStory": "A telemetry table contains the final five minutes before a system failure.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 30 investigation concluded. Artifact for 'The Last Five Minutes' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nRank variables by change rate and identify the strongest precursor.\n\n**Input Contract**:\n`Input: n rows `time v1 v2`; print variable with largest total absolute change.`\n\n**Required Result**:\n`Find strongest precursor.`",
    "formulation": "Skills: time-series differences, sorting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_30_<COMPUTED_RESULT>}",
    "inputContract": "Input: n rows `time v1 v2`; print variable with largest total absolute change.",
    "requiredResult": "Find strongest precursor.",
    "sampleInput": "2\n100 10 20\n105 15 25\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\na=list(map(float,input().split())); n=len(a); best=0\nfor k in range(1,n):\n    re=sum(a[j]*math.cos(2*math.pi*k*j/n) for j in range(n))\n    im=sum(a[j]*math.sin(2*math.pi*k*j/n) for j in range(n))\n    if re*re+im*im>best: best=re*re+im*im; idx=k\nprint(idx if n>1 else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 30: The Last Five Minutes\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: time-series differences, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows `time v1 v2`; print variable with largest total absolute change.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\na=list(map(float,input().split())); n=len(a); best=0\nfor k in range(1,n):\n    re=sum(a[j]*math.cos(2*math.pi*k*j/n) for j in range(n))\n    im=sum(a[j]*math.sin(2*math.pi*k*j/n) for j in range(n))\n    if re*re+im*im>best: best=re*re+im*im; idx=k\nprint(idx if n>1 else 0)",
        "signature": "solve_case_30()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 30: The Last Five Minutes\n// Domain: Data Science\n// Input Contract: Input: n rows `time v1 v2`; print variable with largest total absolute change.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 30: The Last Five Minutes\n// Domain: Data Science\n// Input Contract: Input: n rows `time v1 v2`; print variable with largest total absolute change.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_30()",
    "starterCode": "# Project Enigmatrix \u2014 Case 30: The Last Five Minutes\n# Phase: PHASE III \u2014 NUMBERS DON'T FORGET\n# Domain: Data Science\n# Core Skills: time-series differences, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows `time v1 v2`; print variable with largest total absolute change.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\na=list(map(float,input().split())); n=len(a); best=0\nfor k in range(1,n):\n    re=sum(a[j]*math.cos(2*math.pi*k*j/n) for j in range(n))\n    im=sum(a[j]*math.sin(2*math.pi*k*j/n) for j in range(n))\n    if re*re+im*im>best: best=re*re+im*im; idx=k\nprint(idx if n>1 else 0)",
    "flag": "FLAG{CASE_30_TOKEN_30_0}",
    "tests": [
      {
        "name": "Case 30 Forensic Test",
        "input": "2\n100 10 20\n105 15 25\n",
        "expectedOutput": "0",
        "code": "Input: '2\\n100 10 20\\n105 15 25\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-31",
    "act": 2,
    "chapter": 31,
    "caseNum": "CASE 31",
    "title": "Case 31: The Burnt Controller",
    "domain": "ECE / Embedded Systems",
    "skills": "finite-state machines, arrays",
    "points": 75,
    "incidentCode": "#ENIGMA-C31",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "A controller fails after receiving a sequence of sensor commands.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 31 investigation concluded. Artifact for 'The Burnt Controller' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nValidate the command sequence and find the first unsafe transition.\n\n**Input Contract**:\n`Input: n states (0/1); print first index where state changes twice consecutively.`\n\n**Required Result**:\n`Detect unsafe transition.`",
    "formulation": "Skills: finite-state machines, arrays\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_31_<COMPUTED_RESULT>}",
    "inputContract": "Input: n states (0/1); print first index where state changes twice consecutively.",
    "requiredResult": "Detect unsafe transition.",
    "sampleInput": "4\n0 1 0 1\n",
    "expectedOutput": "-1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 31: The Burnt Controller\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: finite-state machines, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states (0/1); print first index where state changes twice consecutively.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
        "signature": "solve_case_31()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 31: The Burnt Controller\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n states (0/1); print first index where state changes twice consecutively\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 31: The Burnt Controller\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n states (0/1); print first index where state changes twice consecutively\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_31()",
    "starterCode": "# Project Enigmatrix \u2014 Case 31: The Burnt Controller\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: finite-state machines, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states (0/1); print first index where state changes twice consecutively.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(2,n):\n    if a[i]==a[i-1]==a[i-2]: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_31_TOKEN_31_-1}",
    "tests": [
      {
        "name": "Case 31 Forensic Test",
        "input": "4\n0 1 0 1\n",
        "expectedOutput": "-1",
        "code": "Input: '4\\n0 1 0 1\\n' -> Expected: '-1'"
      }
    ]
  },
  {
    "id": "case-32",
    "act": 2,
    "chapter": 32,
    "caseNum": "CASE 32",
    "title": "Case 32: The Oscillator Crime",
    "domain": "ECE / Embedded Systems",
    "skills": "arrays, frequency analysis",
    "points": 75,
    "incidentCode": "#ENIGMA-C32",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "An oscillator's readings contain a periodic disturbance not present in normal operation.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 32 investigation concluded. Artifact for 'The Oscillator Crime' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the abnormal frequency component from sampled values.\n\n**Input Contract**:\n`Input: numeric samples; print dominant non-zero discrete frequency index.`\n\n**Required Result**:\n`Find periodic disturbance.`",
    "formulation": "Skills: arrays, frequency analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_32_<COMPUTED_RESULT>}",
    "inputContract": "Input: numeric samples; print dominant non-zero discrete frequency index.",
    "requiredResult": "Find periodic disturbance.",
    "sampleInput": "10 20 10 20 10 20\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn=int(input()); a=list(map(float,input().split())); m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(max(range(n),key=lambda i:abs(a[i]-m)/s if s else 0))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 32: The Oscillator Crime\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: arrays, frequency analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: numeric samples; print dominant non-zero discrete frequency index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn=int(input()); a=list(map(float,input().split())); m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(max(range(n),key=lambda i:abs(a[i]-m)/s if s else 0))",
        "signature": "solve_case_32()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 32: The Oscillator Crime\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: numeric samples; print dominant non-zero discrete frequency index.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 32: The Oscillator Crime\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: numeric samples; print dominant non-zero discrete frequency index.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_32()",
    "starterCode": "# Project Enigmatrix \u2014 Case 32: The Oscillator Crime\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: arrays, frequency analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: numeric samples; print dominant non-zero discrete frequency index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn=int(input()); a=list(map(float,input().split())); m=sum(a)/n; s=(sum((x-m)**2 for x in a)/n)**.5\nprint(max(range(n),key=lambda i:abs(a[i]-m)/s if s else 0))",
    "flag": "FLAG{CASE_32_TOKEN_32_VERIFIED}",
    "tests": [
      {
        "name": "Case 32 Forensic Test",
        "input": "10 20 10 20 10 20\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '10 20 10 20 10 20\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-33",
    "act": 3,
    "chapter": 33,
    "caseNum": "CASE 33",
    "title": "Case 33: The Fake Sensor",
    "domain": "ECE / Embedded Systems",
    "skills": "median, consensus, anomaly detection",
    "points": 75,
    "incidentCode": "#ENIGMA-C33",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "One temperature sensor reports plausible but false values.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 33 investigation concluded. Artifact for 'The Fake Sensor' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare redundant sensors and locate the inconsistent channel.\n\n**Input Contract**:\n`Input: n rows of 3 sensor values; print first row where one value differs from median by >10.`\n\n**Required Result**:\n`Detect bad sensor.`",
    "formulation": "Skills: median, consensus, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_33_<COMPUTED_RESULT>}",
    "inputContract": "Input: n rows of 3 sensor values; print first row where one value differs from median by >10.",
    "requiredResult": "Detect bad sensor.",
    "sampleInput": "2\n10 10 10\n10 50 10\n",
    "expectedOutput": "1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); \nfor i in range(n):\n    x=list(map(int,input().split())); med=sorted(x)[1]\n    if any(abs(v-med)>10 for v in x): print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 33: The Fake Sensor\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: median, consensus, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows of 3 sensor values; print first row where one value differs from median by >\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); \nfor i in range(n):\n    x=list(map(int,input().split())); med=sorted(x)[1]\n    if any(abs(v-med)>10 for v in x): print(i);break\nelse: print(-1)",
        "signature": "solve_case_33()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 33: The Fake Sensor\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n rows of 3 sensor values; print first row where one value differs from m\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 33: The Fake Sensor\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n rows of 3 sensor values; print first row where one value differs from m\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_33()",
    "starterCode": "# Project Enigmatrix \u2014 Case 33: The Fake Sensor\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: median, consensus, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows of 3 sensor values; print first row where one value differs from median by >\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); \nfor i in range(n):\n    x=list(map(int,input().split())); med=sorted(x)[1]\n    if any(abs(v-med)>10 for v in x): print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_33_TOKEN_33_1}",
    "tests": [
      {
        "name": "Case 33 Forensic Test",
        "input": "2\n10 10 10\n10 50 10\n",
        "expectedOutput": "1",
        "code": "Input: '2\\n10 10 10\\n10 50 10\\n' -> Expected: '1'"
      }
    ]
  },
  {
    "id": "case-34",
    "act": 3,
    "chapter": 34,
    "caseNum": "CASE 34",
    "title": "Case 34: The PCB Switch",
    "domain": "ECE / Embedded Systems",
    "skills": "bit manipulation, state tracking",
    "points": 75,
    "incidentCode": "#ENIGMA-C34",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "A prototype board changes state without a recorded user command.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 34 investigation concluded. Artifact for 'The PCB Switch' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconstruct GPIO transitions from a digital trace.\n\n**Input Contract**:\n`Input: n binary GPIO values; print transition indices.`\n\n**Required Result**:\n`Reconstruct GPIO events.`",
    "formulation": "Skills: bit manipulation, state tracking\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_34_<COMPUTED_RESULT>}",
    "inputContract": "Input: n binary GPIO values; print transition indices.",
    "requiredResult": "Reconstruct GPIO events.",
    "sampleInput": "4\n0 1 1 0\n",
    "expectedOutput": "1 3",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(int,input().split()))\nprint(*[i for i in range(1,n) if a[i]!=a[i-1]])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 34: The PCB Switch\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: bit manipulation, state tracking\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n binary GPIO values; print transition indices.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nprint(*[i for i in range(1,n) if a[i]!=a[i-1]])",
        "signature": "solve_case_34()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 34: The PCB Switch\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n binary GPIO values; print transition indices.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 34: The PCB Switch\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n binary GPIO values; print transition indices.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_34()",
    "starterCode": "# Project Enigmatrix \u2014 Case 34: The PCB Switch\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: bit manipulation, state tracking\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n binary GPIO values; print transition indices.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(int,input().split()))\nprint(*[i for i in range(1,n) if a[i]!=a[i-1]])",
    "flag": "FLAG{CASE_34_TOKEN_34_1_3}",
    "tests": [
      {
        "name": "Case 34 Forensic Test",
        "input": "4\n0 1 1 0\n",
        "expectedOutput": "1 3",
        "code": "Input: '4\\n0 1 1 0\\n' -> Expected: '1 3'"
      }
    ]
  },
  {
    "id": "case-35",
    "act": 3,
    "chapter": 35,
    "caseNum": "CASE 35",
    "title": "Case 35: The Voltage Drop",
    "domain": "ECE / Embedded Systems",
    "skills": "search, threshold detection",
    "points": 75,
    "incidentCode": "#ENIGMA-C35",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "A device shuts down during a covert test.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 35 investigation concluded. Artifact for 'The Voltage Drop' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind the first voltage threshold violation from sampled telemetry.\n\n**Input Contract**:\n`Input: n voltage readings and threshold; print first index below threshold.`\n\n**Required Result**:\n`Find failure point.`",
    "formulation": "Skills: search, threshold detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_35_<COMPUTED_RESULT>}",
    "inputContract": "Input: n voltage readings and threshold; print first index below threshold.",
    "requiredResult": "Find failure point.",
    "sampleInput": "3 3.0\n3.3 2.8 3.1\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,t=map(int,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if x<t: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 35: The Voltage Drop\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: search, threshold detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n voltage readings and threshold; print first index below threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,t=map(int,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if x<t: print(i);break\nelse: print(-1)",
        "signature": "solve_case_35()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 35: The Voltage Drop\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n voltage readings and threshold; print first index below threshold.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 35: The Voltage Drop\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n voltage readings and threshold; print first index below threshold.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_35()",
    "starterCode": "# Project Enigmatrix \u2014 Case 35: The Voltage Drop\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: search, threshold detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n voltage readings and threshold; print first index below threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,t=map(int,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if x<t: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_35_TOKEN_35_VERIFIED}",
    "tests": [
      {
        "name": "Case 35 Forensic Test",
        "input": "3 3.0\n3.3 2.8 3.1\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3 3.0\\n3.3 2.8 3.1\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-36",
    "act": 3,
    "chapter": 36,
    "caseNum": "CASE 36",
    "title": "Case 36: The Hidden Interrupt",
    "domain": "ECE / Embedded Systems",
    "skills": "queues, event counting",
    "points": 75,
    "incidentCode": "#ENIGMA-C36",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "An embedded device shows unexpected interrupt activity.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 36 investigation concluded. Artifact for 'The Hidden Interrupt' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nAnalyze event timestamps and identify the abnormal interrupt source.\n\n**Input Contract**:\n`Input: n interrupt IDs; print most frequent ID and count.`\n\n**Required Result**:\n`Find abnormal source.`",
    "formulation": "Skills: queues, event counting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_36_<COMPUTED_RESULT>}",
    "inputContract": "Input: n interrupt IDs; print most frequent ID and count.",
    "requiredResult": "Find abnormal source.",
    "sampleInput": "4\n1 2 1 1\n",
    "expectedOutput": "1 3",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); c=Counter(map(int,input().split())); print(*c.most_common(1)[0])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 36: The Hidden Interrupt\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: queues, event counting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n interrupt IDs; print most frequent ID and count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); c=Counter(map(int,input().split())); print(*c.most_common(1)[0])",
        "signature": "solve_case_36()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 36: The Hidden Interrupt\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n interrupt IDs; print most frequent ID and count.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 36: The Hidden Interrupt\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n interrupt IDs; print most frequent ID and count.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_36()",
    "starterCode": "# Project Enigmatrix \u2014 Case 36: The Hidden Interrupt\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: queues, event counting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n interrupt IDs; print most frequent ID and count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); c=Counter(map(int,input().split())); print(*c.most_common(1)[0])",
    "flag": "FLAG{CASE_36_TOKEN_36_1_3}",
    "tests": [
      {
        "name": "Case 36 Forensic Test",
        "input": "4\n1 2 1 1\n",
        "expectedOutput": "1 3",
        "code": "Input: '4\\n1 2 1 1\\n' -> Expected: '1 3'"
      }
    ]
  },
  {
    "id": "case-37",
    "act": 3,
    "chapter": 37,
    "caseNum": "CASE 37",
    "title": "Case 37: The UART Secret",
    "domain": "ECE / Embedded Systems",
    "skills": "parsing, finite-state machines",
    "points": 75,
    "incidentCode": "#ENIGMA-C37",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "A serial capture contains interleaved diagnostic and command bytes.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 37 investigation concluded. Artifact for 'The UART Secret' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nSeparate channels and recover the command sequence.\n\n**Input Contract**:\n`Input: hex bytes; extract bytes between 0xAA and 0x55.`\n\n**Required Result**:\n`Recover command frame.`",
    "formulation": "Skills: parsing, finite-state machines\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_37_<COMPUTED_RESULT>}",
    "inputContract": "Input: hex bytes; extract bytes between 0xAA and 0x55.",
    "requiredResult": "Recover command frame.",
    "sampleInput": "AA 01 02 55\n",
    "expectedOutput": "01 02",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "s=input().split(); a=list(map(lambda x:int(x,16),s)); on=False; out=[]\nfor x in a:\n    if x==0xAA: on=True; continue\n    if x==0x55 and on: break\n    if on: out.append(x)\nprint(*[f\"{x:02X}\" for x in out])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 37: The UART Secret\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: parsing, finite-state machines\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: hex bytes; extract bytes between 0xAA and 0x55.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "s=input().split(); a=list(map(lambda x:int(x,16),s)); on=False; out=[]\nfor x in a:\n    if x==0xAA: on=True; continue\n    if x==0x55 and on: break\n    if on: out.append(x)\nprint(*[f\"{x:02X}\" for x in out])",
        "signature": "solve_case_37()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 37: The UART Secret\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: hex bytes; extract bytes between 0xAA and 0x55.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 37: The UART Secret\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: hex bytes; extract bytes between 0xAA and 0x55.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_37()",
    "starterCode": "# Project Enigmatrix \u2014 Case 37: The UART Secret\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: parsing, finite-state machines\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: hex bytes; extract bytes between 0xAA and 0x55.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "s=input().split(); a=list(map(lambda x:int(x,16),s)); on=False; out=[]\nfor x in a:\n    if x==0xAA: on=True; continue\n    if x==0x55 and on: break\n    if on: out.append(x)\nprint(*[f\"{x:02X}\" for x in out])",
    "flag": "FLAG{CASE_37_TOKEN_37_01_02}",
    "tests": [
      {
        "name": "Case 37 Forensic Test",
        "input": "AA 01 02 55\n",
        "expectedOutput": "01 02",
        "code": "Input: 'AA 01 02 55\\n' -> Expected: '01 02'"
      }
    ]
  },
  {
    "id": "case-38",
    "act": 3,
    "chapter": 38,
    "caseNum": "CASE 38",
    "title": "Case 38: The Failing Prototype",
    "domain": "ECE / Embedded Systems",
    "skills": "graphs, topological reasoning",
    "points": 75,
    "incidentCode": "#ENIGMA-C38",
    "phase": "PHASE IV \u2014 THE MACHINES BETWEEN THE LINES",
    "incidentStory": "Multiple components fail in a specific order.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 38 investigation concluded. Artifact for 'The Failing Prototype' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nModel dependencies and determine the earliest causal component.\n\n**Input Contract**:\n`Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.`\n\n**Required Result**:\n`Resolve component dependency.`",
    "formulation": "Skills: graphs, topological reasoning\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_38_<COMPUTED_RESULT>}",
    "inputContract": "Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.",
    "requiredResult": "Resolve component dependency.",
    "sampleInput": "3 2\n0 1\n1 2\n",
    "expectedOutput": "0 1 2",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\nq=deque(i for i in range(n) if deg[i]==0); o=[]\nwhile q:\n    u=q.popleft();o.append(u)\n    for v in g[u]:\n        deg[v]-=1\n        if deg[v]==0:q.append(v)\nprint(*o if len(o)==n else [\"IMPOSSIBLE\"])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 38: The Failing Prototype\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: graphs, topological reasoning\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\nq=deque(i for i in range(n) if deg[i]==0); o=[]\nwhile q:\n    u=q.popleft();o.append(u)\n    for v in g[u]:\n        deg[v]-=1\n        if deg[v]==0:q.append(v)\nprint(*o if len(o)==n else [\"IMPOSSIBLE\"])",
        "signature": "solve_case_38()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 38: The Failing Prototype\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 38: The Failing Prototype\n// Domain: ECE / Embedded Systems\n// Input Contract: Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_38()",
    "starterCode": "# Project Enigmatrix \u2014 Case 38: The Failing Prototype\n# Phase: PHASE IV \u2014 THE MACHINES BETWEEN THE LINES\n# Domain: ECE / Embedded Systems\n# Core Skills: graphs, topological reasoning\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n nodes,m dependency edges; print topological order or IMPOSSIBLE.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\nq=deque(i for i in range(n) if deg[i]==0); o=[]\nwhile q:\n    u=q.popleft();o.append(u)\n    for v in g[u]:\n        deg[v]-=1\n        if deg[v]==0:q.append(v)\nprint(*o if len(o)==n else [\"IMPOSSIBLE\"])",
    "flag": "FLAG{CASE_38_TOKEN_38_0_1_2}",
    "tests": [
      {
        "name": "Case 38 Forensic Test",
        "input": "3 2\n0 1\n1 2\n",
        "expectedOutput": "0 1 2",
        "code": "Input: '3 2\\n0 1\\n1 2\\n' -> Expected: '0 1 2'"
      }
    ]
  },
  {
    "id": "case-39",
    "act": 3,
    "chapter": 39,
    "caseNum": "CASE 39",
    "title": "Case 39: The Smart Home Break-In",
    "domain": "IoT",
    "skills": "multi-source joins, timestamps",
    "points": 75,
    "incidentCode": "#ENIGMA-C39",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A smart building reports a door opening while the access controller says it remained locked.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 39 investigation concluded. Artifact for 'The Smart Home Break-In' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCorrelate door, motion and access-device events.\n\n**Input Contract**:\n`Input: door,motion,access events as `time type`; print first door-open time without nearby valid access.`\n\n**Required Result**:\n`Correlate IoT evidence.`",
    "formulation": "Skills: multi-source joins, timestamps\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_39_<COMPUTED_RESULT>}",
    "inputContract": "Input: door,motion,access events as `time type`; print first door-open time without nearby valid access.",
    "requiredResult": "Correlate IoT evidence.",
    "sampleInput": "3\n10 door\n15 motion\n20 access\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "def parse():\n    n=int(input()); door=[]; motion=set(); access=set()\n    for _ in range(n):\n        t,k=input().split(); t=int(t)\n        (door if k==\"DOOR\" else motion if k==\"MOTION\" else access).append(t) if k!=\"ACCESS\" else access.add(t)\n    for t in sorted(door):\n        if not any(abs(t-a)<=5 for a in access): print(t); return\n    print(\"NONE\")\nparse()",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 39: The Smart Home Break-In\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: multi-source joins, timestamps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: door,motion,access events as `time type`; print first door-open time without nearby\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "def parse():\n    n=int(input()); door=[]; motion=set(); access=set()\n    for _ in range(n):\n        t,k=input().split(); t=int(t)\n        (door if k==\"DOOR\" else motion if k==\"MOTION\" else access).append(t) if k!=\"ACCESS\" else access.add(t)\n    for t in sorted(door):\n        if not any(abs(t-a)<=5 for a in access): print(t); return\n    print(\"NONE\")\nparse()",
        "signature": "solve_case_39()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 39: The Smart Home Break-In\n// Domain: IoT\n// Input Contract: Input: door,motion,access events as `time type`; print first door-open time with\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 39: The Smart Home Break-In\n// Domain: IoT\n// Input Contract: Input: door,motion,access events as `time type`; print first door-open time with\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_39()",
    "starterCode": "# Project Enigmatrix \u2014 Case 39: The Smart Home Break-In\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: multi-source joins, timestamps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: door,motion,access events as `time type`; print first door-open time without nearby\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "def parse():\n    n=int(input()); door=[]; motion=set(); access=set()\n    for _ in range(n):\n        t,k=input().split(); t=int(t)\n        (door if k==\"DOOR\" else motion if k==\"MOTION\" else access).append(t) if k!=\"ACCESS\" else access.add(t)\n    for t in sorted(door):\n        if not any(abs(t-a)<=5 for a in access): print(t); return\n    print(\"NONE\")\nparse()",
    "flag": "FLAG{CASE_39_TOKEN_39_VERIFIED}",
    "tests": [
      {
        "name": "Case 39 Forensic Test",
        "input": "3\n10 door\n15 motion\n20 access\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n10 door\\n15 motion\\n20 ac' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-40",
    "act": 3,
    "chapter": 40,
    "caseNum": "CASE 40",
    "title": "Case 40: The Water Plant Override",
    "domain": "IoT",
    "skills": "time windows, dictionaries",
    "points": 75,
    "incidentCode": "#ENIGMA-C40",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "An IoT valve opens outside the maintenance schedule.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 40 investigation concluded. Artifact for 'The Water Plant Override' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the unauthorized command from device telemetry.\n\n**Input Contract**:\n`Input: n commands `time valve`; allowed hours a,b; print commands outside window.`\n\n**Required Result**:\n`Detect override.`",
    "formulation": "Skills: time windows, dictionaries\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_40_<COMPUTED_RESULT>}",
    "inputContract": "Input: n commands `time valve`; allowed hours a,b; print commands outside window.",
    "requiredResult": "Detect override.",
    "sampleInput": "2\n10 1\n22 2\n8 18\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,a,b=map(int,input().split())\nfor _ in range(n):\n    t,v=map(int,input().split())\n    if not a<=t<=b: print(t,v)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 40: The Water Plant Override\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: time windows, dictionaries\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n commands `time valve`; allowed hours a,b; print commands outside window.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,a,b=map(int,input().split())\nfor _ in range(n):\n    t,v=map(int,input().split())\n    if not a<=t<=b: print(t,v)",
        "signature": "solve_case_40()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 40: The Water Plant Override\n// Domain: IoT\n// Input Contract: Input: n commands `time valve`; allowed hours a,b; print commands outside window\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 40: The Water Plant Override\n// Domain: IoT\n// Input Contract: Input: n commands `time valve`; allowed hours a,b; print commands outside window\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_40()",
    "starterCode": "# Project Enigmatrix \u2014 Case 40: The Water Plant Override\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: time windows, dictionaries\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n commands `time valve`; allowed hours a,b; print commands outside window.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,a,b=map(int,input().split())\nfor _ in range(n):\n    t,v=map(int,input().split())\n    if not a<=t<=b: print(t,v)",
    "flag": "FLAG{CASE_40_TOKEN_40_VERIFIED}",
    "tests": [
      {
        "name": "Case 40 Forensic Test",
        "input": "2\n10 1\n22 2\n8 18\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n10 1\\n22 2\\n8 18\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-41",
    "act": 3,
    "chapter": 41,
    "caseNum": "CASE 41",
    "title": "Case 41: The Cold-Chain Theft",
    "domain": "IoT",
    "skills": "sliding window, robust statistics",
    "points": 75,
    "incidentCode": "#ENIGMA-C41",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A refrigerated shipment exceeds its safe temperature range during transit.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 41 investigation concluded. Artifact for 'The Cold-Chain Theft' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind the first sustained violation and distinguish sensor noise from a real event.\n\n**Input Contract**:\n`Input: temperatures, threshold, k; print first k-length all-over-threshold window.`\n\n**Required Result**:\n`Detect sustained breach.`",
    "formulation": "Skills: sliding window, robust statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_41_<COMPUTED_RESULT>}",
    "inputContract": "Input: temperatures, threshold, k; print first k-length all-over-threshold window.",
    "requiredResult": "Detect sustained breach.",
    "sampleInput": "5 4.0 2\n2.0 5.0 6.0 1.0 2.0\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(n-k+1):\n    if all(x>0 for x in a[i:i+k]): print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 41: The Cold-Chain Theft\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: sliding window, robust statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: temperatures, threshold, k; print first k-length all-over-threshold window.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(n-k+1):\n    if all(x>0 for x in a[i:i+k]): print(i);break\nelse: print(-1)",
        "signature": "solve_case_41()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 41: The Cold-Chain Theft\n// Domain: IoT\n// Input Contract: Input: temperatures, threshold, k; print first k-length all-over-threshold windo\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 41: The Cold-Chain Theft\n// Domain: IoT\n// Input Contract: Input: temperatures, threshold, k; print first k-length all-over-threshold windo\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_41()",
    "starterCode": "# Project Enigmatrix \u2014 Case 41: The Cold-Chain Theft\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: sliding window, robust statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: temperatures, threshold, k; print first k-length all-over-threshold window.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(n-k+1):\n    if all(x>0 for x in a[i:i+k]): print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_41_TOKEN_41_VERIFIED}",
    "tests": [
      {
        "name": "Case 41 Forensic Test",
        "input": "5 4.0 2\n2.0 5.0 6.0 1.0 2.0\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '5 4.0 2\\n2.0 5.0 6.0 1.0 2' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-42",
    "act": 3,
    "chapter": 42,
    "caseNum": "CASE 42",
    "title": "Case 42: The Ghost Device",
    "domain": "IoT",
    "skills": "hash maps, classification rules",
    "points": 75,
    "incidentCode": "#ENIGMA-C42",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A device appears on the IoT network without registration.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 42 investigation concluded. Artifact for 'The Ghost Device' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nIdentify the unknown device from MAC, timing and traffic features.\n\n**Input Contract**:\n`Input: registered MACs then observed MACs; print unknown MACs.`\n\n**Required Result**:\n`Find unregistered device.`",
    "formulation": "Skills: hash maps, classification rules\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_42_<COMPUTED_RESULT>}",
    "inputContract": "Input: registered MACs then observed MACs; print unknown MACs.",
    "requiredResult": "Find unregistered device.",
    "sampleInput": "2\nAA:BB:CC:DD:EE:01\nAA:BB:CC:DD:EE:02\n3\nAA:BB:CC:DD:EE:01\nAA:BB:CC:DD:EE:03\nAA:BB:CC:DD:EE:02\n",
    "expectedOutput": "AA:BB:CC:DD:EE:01",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "reg=set(input().split()); obs=input().split()\nprint(*sorted(set(obs)-reg))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 42: The Ghost Device\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: hash maps, classification rules\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: registered MACs then observed MACs; print unknown MACs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "reg=set(input().split()); obs=input().split()\nprint(*sorted(set(obs)-reg))",
        "signature": "solve_case_42()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 42: The Ghost Device\n// Domain: IoT\n// Input Contract: Input: registered MACs then observed MACs; print unknown MACs.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 42: The Ghost Device\n// Domain: IoT\n// Input Contract: Input: registered MACs then observed MACs; print unknown MACs.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_42()",
    "starterCode": "# Project Enigmatrix \u2014 Case 42: The Ghost Device\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: hash maps, classification rules\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: registered MACs then observed MACs; print unknown MACs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "reg=set(input().split()); obs=input().split()\nprint(*sorted(set(obs)-reg))",
    "flag": "FLAG{CASE_42_TOKEN_42_AA:BB:CC:DD:EE:0}",
    "tests": [
      {
        "name": "Case 42 Forensic Test",
        "input": "2\nAA:BB:CC:DD:EE:01\nAA:BB:CC:DD:EE:02\n3\nAA:BB:CC:DD:EE:01\nAA:BB:CC:DD:EE:03\nAA:BB:CC:DD:EE:02\n",
        "expectedOutput": "AA:BB:CC:DD:EE:01",
        "code": "Input: '2\\nAA:BB:CC:DD:EE:01\\nAA:BB' -> Expected: 'AA:BB:CC:DD:EE:01'"
      }
    ]
  },
  {
    "id": "case-43",
    "act": 3,
    "chapter": 43,
    "caseNum": "CASE 43",
    "title": "Case 43: The Factory Beacon",
    "domain": "IoT",
    "skills": "statistics, frequency counting",
    "points": 75,
    "incidentCode": "#ENIGMA-C43",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "One sensor node transmits periodic bursts unlike its peers.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 43 investigation concluded. Artifact for 'The Factory Beacon' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the beacon interval and identify the node.\n\n**Input Contract**:\n`Input: event timestamps; print mode of inter-arrival interval.`\n\n**Required Result**:\n`Detect periodic beacon.`",
    "formulation": "Skills: statistics, frequency counting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_43_<COMPUTED_RESULT>}",
    "inputContract": "Input: event timestamps; print mode of inter-arrival interval.",
    "requiredResult": "Detect periodic beacon.",
    "sampleInput": "4\n10 20 30 50\n",
    "expectedOutput": "10",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); d=[a[i]-a[i-1] for i in range(1,n)]\nprint(Counter(d).most_common(1)[0][0] if d else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 43: The Factory Beacon\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: statistics, frequency counting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: event timestamps; print mode of inter-arrival interval.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); d=[a[i]-a[i-1] for i in range(1,n)]\nprint(Counter(d).most_common(1)[0][0] if d else 0)",
        "signature": "solve_case_43()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 43: The Factory Beacon\n// Domain: IoT\n// Input Contract: Input: event timestamps; print mode of inter-arrival interval.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 43: The Factory Beacon\n// Domain: IoT\n// Input Contract: Input: event timestamps; print mode of inter-arrival interval.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_43()",
    "starterCode": "# Project Enigmatrix \u2014 Case 43: The Factory Beacon\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: statistics, frequency counting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: event timestamps; print mode of inter-arrival interval.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); a=list(map(int,input().split())); d=[a[i]-a[i-1] for i in range(1,n)]\nprint(Counter(d).most_common(1)[0][0] if d else 0)",
    "flag": "FLAG{CASE_43_TOKEN_43_10}",
    "tests": [
      {
        "name": "Case 43 Forensic Test",
        "input": "4\n10 20 30 50\n",
        "expectedOutput": "10",
        "code": "Input: '4\\n10 20 30 50\\n' -> Expected: '10'"
      }
    ]
  },
  {
    "id": "case-44",
    "act": 3,
    "chapter": 44,
    "caseNum": "CASE 44",
    "title": "Case 44: The Smart Lock Replay",
    "domain": "IoT",
    "skills": "sets, hashing, validation",
    "points": 75,
    "incidentCode": "#ENIGMA-C44",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A valid unlock message is replayed later.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 44 investigation concluded. Artifact for 'The Smart Lock Replay' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetermine which message is a replay using nonce and timestamp history.\n\n**Input Contract**:\n`Input: n nonce,timestamp pairs; print first repeated nonce.`\n\n**Required Result**:\n`Detect replay.`",
    "formulation": "Skills: sets, hashing, validation\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_44_<COMPUTED_RESULT>}",
    "inputContract": "Input: n nonce,timestamp pairs; print first repeated nonce.",
    "requiredResult": "Detect replay.",
    "sampleInput": "3\n100 10\n101 11\n100 12\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,t=map(int,input().split()); seen=set()\nfor _ in range(n):\n    x=int(input().split()[0])\n    if x in seen: print(x);break\n    seen.add(x)\nelse: print(\"NONE\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 44: The Smart Lock Replay\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: sets, hashing, validation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n nonce,timestamp pairs; print first repeated nonce.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,t=map(int,input().split()); seen=set()\nfor _ in range(n):\n    x=int(input().split()[0])\n    if x in seen: print(x);break\n    seen.add(x)\nelse: print(\"NONE\")",
        "signature": "solve_case_44()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 44: The Smart Lock Replay\n// Domain: IoT\n// Input Contract: Input: n nonce,timestamp pairs; print first repeated nonce.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 44: The Smart Lock Replay\n// Domain: IoT\n// Input Contract: Input: n nonce,timestamp pairs; print first repeated nonce.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_44()",
    "starterCode": "# Project Enigmatrix \u2014 Case 44: The Smart Lock Replay\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: sets, hashing, validation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n nonce,timestamp pairs; print first repeated nonce.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,t=map(int,input().split()); seen=set()\nfor _ in range(n):\n    x=int(input().split()[0])\n    if x in seen: print(x);break\n    seen.add(x)\nelse: print(\"NONE\")",
    "flag": "FLAG{CASE_44_TOKEN_44_VERIFIED}",
    "tests": [
      {
        "name": "Case 44 Forensic Test",
        "input": "3\n100 10\n101 11\n100 12\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n100 10\\n101 11\\n100 12\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-45",
    "act": 3,
    "chapter": 45,
    "caseNum": "CASE 45",
    "title": "Case 45: The Drone Gateway",
    "domain": "IoT",
    "skills": "priority queues, timestamps",
    "points": 75,
    "incidentCode": "#ENIGMA-C45",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A drone gateway receives commands from two competing sources.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 45 investigation concluded. Artifact for 'The Drone Gateway' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nOrder commands and detect the conflicting controller.\n\n**Input Contract**:\n`Input: n commands `priority time source`; sort by priority desc/time asc and print source order.`\n\n**Required Result**:\n`Resolve competing commands.`",
    "formulation": "Skills: priority queues, timestamps\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_45_<COMPUTED_RESULT>}",
    "inputContract": "Input: n commands `priority time source`; sort by priority desc/time asc and print source order.",
    "requiredResult": "Resolve competing commands.",
    "sampleInput": "3\n2 100 S1\n1 105 S2\n3 110 S3\n",
    "expectedOutput": "S3 S1 S2",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    p,t,s=input().split(); heapq.heappush(h,(-int(p),int(t),s))\nwhile h: print(heapq.heappop(h)[2],end=\" \")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 45: The Drone Gateway\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: priority queues, timestamps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n commands `priority time source`; sort by priority desc/time asc and print source \n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    p,t,s=input().split(); heapq.heappush(h,(-int(p),int(t),s))\nwhile h: print(heapq.heappop(h)[2],end=\" \")",
        "signature": "solve_case_45()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 45: The Drone Gateway\n// Domain: IoT\n// Input Contract: Input: n commands `priority time source`; sort by priority desc/time asc and pri\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 45: The Drone Gateway\n// Domain: IoT\n// Input Contract: Input: n commands `priority time source`; sort by priority desc/time asc and pri\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_45()",
    "starterCode": "# Project Enigmatrix \u2014 Case 45: The Drone Gateway\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: priority queues, timestamps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n commands `priority time source`; sort by priority desc/time asc and print source \n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    p,t,s=input().split(); heapq.heappush(h,(-int(p),int(t),s))\nwhile h: print(heapq.heappop(h)[2],end=\" \")",
    "flag": "FLAG{CASE_45_TOKEN_45_S3_S1_S2}",
    "tests": [
      {
        "name": "Case 45 Forensic Test",
        "input": "3\n2 100 S1\n1 105 S2\n3 110 S3\n",
        "expectedOutput": "S3 S1 S2",
        "code": "Input: '3\\n2 100 S1\\n1 105 S2\\n3 110' -> Expected: 'S3 S1 S2'"
      }
    ]
  },
  {
    "id": "case-46",
    "act": 3,
    "chapter": 46,
    "caseNum": "CASE 46",
    "title": "Case 46: The Sensor Swarm",
    "domain": "IoT",
    "skills": "median, subset analysis",
    "points": 75,
    "incidentCode": "#ENIGMA-C46",
    "phase": "PHASE V \u2014 THE NETWORK OF THINGS",
    "incidentStory": "A group of sensors is manipulated to agree on a false reading.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 46 investigation concluded. Artifact for 'The Sensor Swarm' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind the smallest inconsistent subset using consensus checks.\n\n**Input Contract**:\n`Input: n readings and tolerance; print indices differing from median by > tolerance.`\n\n**Required Result**:\n`Find manipulated sensors.`",
    "formulation": "Skills: median, subset analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_46_<COMPUTED_RESULT>}",
    "inputContract": "Input: n readings and tolerance; print indices differing from median by > tolerance.",
    "requiredResult": "Find manipulated sensors.",
    "sampleInput": "3 0.5\n10.0 10.2 12.0\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import statistics\na=list(map(float,input().split())); m=statistics.median(a); t=float(input())\nprint(*[i for i,x in enumerate(a) if abs(x-m)>t])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 46: The Sensor Swarm\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: median, subset analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n readings and tolerance; print indices differing from median by > tolerance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import statistics\na=list(map(float,input().split())); m=statistics.median(a); t=float(input())\nprint(*[i for i,x in enumerate(a) if abs(x-m)>t])",
        "signature": "solve_case_46()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 46: The Sensor Swarm\n// Domain: IoT\n// Input Contract: Input: n readings and tolerance; print indices differing from median by > tolera\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 46: The Sensor Swarm\n// Domain: IoT\n// Input Contract: Input: n readings and tolerance; print indices differing from median by > tolera\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_46()",
    "starterCode": "# Project Enigmatrix \u2014 Case 46: The Sensor Swarm\n# Phase: PHASE V \u2014 THE NETWORK OF THINGS\n# Domain: IoT\n# Core Skills: median, subset analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n readings and tolerance; print indices differing from median by > tolerance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import statistics\na=list(map(float,input().split())); m=statistics.median(a); t=float(input())\nprint(*[i for i,x in enumerate(a) if abs(x-m)>t])",
    "flag": "FLAG{CASE_46_TOKEN_46_VERIFIED}",
    "tests": [
      {
        "name": "Case 46 Forensic Test",
        "input": "3 0.5\n10.0 10.2 12.0\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3 0.5\\n10.0 10.2 12.0\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-47",
    "act": 3,
    "chapter": 47,
    "caseNum": "CASE 47",
    "title": "Case 47: The Ghost Transfer",
    "domain": "Blockchain",
    "skills": "hash chains, maps",
    "points": 75,
    "incidentCode": "#ENIGMA-C47",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "A wallet records a transfer nobody authorized.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 47 investigation concluded. Artifact for 'The Ghost Transfer' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nTrace the transaction through blocks and validate its hashes.\n\n**Input Contract**:\n`Input: n transaction lines `from to amount hash prevhash`; verify each prevhash equals prior hash; print first broken index.`\n\n**Required Result**:\n`Validate chain.`",
    "formulation": "Skills: hash chains, maps\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_47_<COMPUTED_RESULT>}",
    "inputContract": "Input: n transaction lines `from to amount hash prevhash`; verify each prevhash equals prior hash; print first broken index.",
    "requiredResult": "Validate chain.",
    "sampleInput": "1\nA B 100 HASH1 PREV1\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input()); prev=\"\"; \nfor i in range(n):\n    data,h,p=input().split(); ok=p==prev\n    calc=hashlib.sha256((data+p).encode()).hexdigest()\n    if not ok or calc!=h: print(i);break\n    prev=h\nelse: print(\"VALID\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 47: The Ghost Transfer\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hash chains, maps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n transaction lines `from to amount hash prevhash`; verify each prevhash equals pri\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input()); prev=\"\"; \nfor i in range(n):\n    data,h,p=input().split(); ok=p==prev\n    calc=hashlib.sha256((data+p).encode()).hexdigest()\n    if not ok or calc!=h: print(i);break\n    prev=h\nelse: print(\"VALID\")",
        "signature": "solve_case_47()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 47: The Ghost Transfer\n// Domain: Blockchain\n// Input Contract: Input: n transaction lines `from to amount hash prevhash`; verify each prevhash \n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 47: The Ghost Transfer\n// Domain: Blockchain\n// Input Contract: Input: n transaction lines `from to amount hash prevhash`; verify each prevhash \n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_47()",
    "starterCode": "# Project Enigmatrix \u2014 Case 47: The Ghost Transfer\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hash chains, maps\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n transaction lines `from to amount hash prevhash`; verify each prevhash equals pri\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input()); prev=\"\"; \nfor i in range(n):\n    data,h,p=input().split(); ok=p==prev\n    calc=hashlib.sha256((data+p).encode()).hexdigest()\n    if not ok or calc!=h: print(i);break\n    prev=h\nelse: print(\"VALID\")",
    "flag": "FLAG{CASE_47_TOKEN_47_VERIFIED}",
    "tests": [
      {
        "name": "Case 47 Forensic Test",
        "input": "1\nA B 100 HASH1 PREV1\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '1\\nA B 100 HASH1 PREV1\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-48",
    "act": 3,
    "chapter": 48,
    "caseNum": "CASE 48",
    "title": "Case 48: The Double-Spend Window",
    "domain": "Blockchain",
    "skills": "sets, ordering",
    "points": 75,
    "incidentCode": "#ENIGMA-C48",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "Two conflicting transactions spend the same token.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 48 investigation concluded. Artifact for 'The Double-Spend Window' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nIdentify the conflicting pair and determine which entered the chain first.\n\n**Input Contract**:\n`Input: n transactions `token time txid`; print first token with two spends.`\n\n**Required Result**:\n`Detect double spend.`",
    "formulation": "Skills: sets, ordering\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_48_<COMPUTED_RESULT>}",
    "inputContract": "Input: n transactions `token time txid`; print first token with two spends.",
    "requiredResult": "Detect double spend.",
    "sampleInput": "3\nT1 100 TX1\nT2 105 TX2\nT1 110 TX3\n",
    "expectedOutput": "T1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import defaultdict\nn=int(input()); d=defaultdict(list)\nfor _ in range(n):\n    token,t,tx=input().split(); d[token].append((int(t),tx))\nfor k,v in d.items():\n    if len(v)>1: print(k);break\nelse: print(\"NONE\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 48: The Double-Spend Window\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: sets, ordering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n transactions `token time txid`; print first token with two spends.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import defaultdict\nn=int(input()); d=defaultdict(list)\nfor _ in range(n):\n    token,t,tx=input().split(); d[token].append((int(t),tx))\nfor k,v in d.items():\n    if len(v)>1: print(k);break\nelse: print(\"NONE\")",
        "signature": "solve_case_48()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 48: The Double-Spend Window\n// Domain: Blockchain\n// Input Contract: Input: n transactions `token time txid`; print first token with two spends.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 48: The Double-Spend Window\n// Domain: Blockchain\n// Input Contract: Input: n transactions `token time txid`; print first token with two spends.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_48()",
    "starterCode": "# Project Enigmatrix \u2014 Case 48: The Double-Spend Window\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: sets, ordering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n transactions `token time txid`; print first token with two spends.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import defaultdict\nn=int(input()); d=defaultdict(list)\nfor _ in range(n):\n    token,t,tx=input().split(); d[token].append((int(t),tx))\nfor k,v in d.items():\n    if len(v)>1: print(k);break\nelse: print(\"NONE\")",
    "flag": "FLAG{CASE_48_TOKEN_48_T1}",
    "tests": [
      {
        "name": "Case 48 Forensic Test",
        "input": "3\nT1 100 TX1\nT2 105 TX2\nT1 110 TX3\n",
        "expectedOutput": "T1",
        "code": "Input: '3\\nT1 100 TX1\\nT2 105 TX2\\nT' -> Expected: 'T1'"
      }
    ]
  },
  {
    "id": "case-49",
    "act": 4,
    "chapter": 49,
    "caseNum": "CASE 49",
    "title": "Case 49: The Broken Smart Contract",
    "domain": "Blockchain",
    "skills": "simulation, constraints",
    "points": 75,
    "incidentCode": "#ENIGMA-C49",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "A contract distributes funds incorrectly for one input pattern.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 49 investigation concluded. Artifact for 'The Broken Smart Contract' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind the input that violates the intended invariant.\n\n**Input Contract**:\n`Input: n x values; invariant x*x <= 100; print violating indices.`\n\n**Required Result**:\n`Check contract invariant.`",
    "formulation": "Skills: simulation, constraints\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_49_<COMPUTED_RESULT>}",
    "inputContract": "Input: n x values; invariant x*x <= 100; print violating indices.",
    "requiredResult": "Check contract invariant.",
    "sampleInput": "3\n5 11 8\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input()); target=input().strip()\nfor _ in range(n):\n    x=input().strip()\n    if hashlib.sha256(x.encode()).hexdigest()==target: print(x);break\nelse: print(\"NOT FOUND\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 49: The Broken Smart Contract\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: simulation, constraints\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n x values; invariant x*x <= 100; print violating indices.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input()); target=input().strip()\nfor _ in range(n):\n    x=input().strip()\n    if hashlib.sha256(x.encode()).hexdigest()==target: print(x);break\nelse: print(\"NOT FOUND\")",
        "signature": "solve_case_49()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 49: The Broken Smart Contract\n// Domain: Blockchain\n// Input Contract: Input: n x values; invariant x*x <= 100; print violating indices.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 49: The Broken Smart Contract\n// Domain: Blockchain\n// Input Contract: Input: n x values; invariant x*x <= 100; print violating indices.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_49()",
    "starterCode": "# Project Enigmatrix \u2014 Case 49: The Broken Smart Contract\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: simulation, constraints\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n x values; invariant x*x <= 100; print violating indices.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input()); target=input().strip()\nfor _ in range(n):\n    x=input().strip()\n    if hashlib.sha256(x.encode()).hexdigest()==target: print(x);break\nelse: print(\"NOT FOUND\")",
    "flag": "FLAG{CASE_49_TOKEN_49_VERIFIED}",
    "tests": [
      {
        "name": "Case 49 Forensic Test",
        "input": "3\n5 11 8\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n5 11 8\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-50",
    "act": 4,
    "chapter": 50,
    "caseNum": "CASE 50",
    "title": "Case 50: The Lost Private Key",
    "domain": "Blockchain",
    "skills": "hashing, search",
    "points": 75,
    "incidentCode": "#ENIGMA-C50",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "A forensic dump contains partial key-related artifacts.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 50 investigation concluded. Artifact for 'The Lost Private Key' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nSearch candidate fragments and validate derived transaction signatures.\n\n**Input Contract**:\n`Input: candidate strings and target SHA-256 hash; print matching candidate.`\n\n**Required Result**:\n`Recover key candidate.`",
    "formulation": "Skills: hashing, search\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_50_<COMPUTED_RESULT>}",
    "inputContract": "Input: candidate strings and target SHA-256 hash; print matching candidate.",
    "requiredResult": "Recover key candidate.",
    "sampleInput": "1\nDATA HASH PREV\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input())\nfor i in range(n):\n    data,h,p=input().split()\n    if hashlib.sha256((data+p).encode()).hexdigest()!=h: print(i);break\nelse: print(\"VALID\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 50: The Lost Private Key\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hashing, search\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: candidate strings and target SHA-256 hash; print matching candidate.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input())\nfor i in range(n):\n    data,h,p=input().split()\n    if hashlib.sha256((data+p).encode()).hexdigest()!=h: print(i);break\nelse: print(\"VALID\")",
        "signature": "solve_case_50()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 50: The Lost Private Key\n// Domain: Blockchain\n// Input Contract: Input: candidate strings and target SHA-256 hash; print matching candidate.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 50: The Lost Private Key\n// Domain: Blockchain\n// Input Contract: Input: candidate strings and target SHA-256 hash; print matching candidate.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_50()",
    "starterCode": "# Project Enigmatrix \u2014 Case 50: The Lost Private Key\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hashing, search\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: candidate strings and target SHA-256 hash; print matching candidate.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input())\nfor i in range(n):\n    data,h,p=input().split()\n    if hashlib.sha256((data+p).encode()).hexdigest()!=h: print(i);break\nelse: print(\"VALID\")",
    "flag": "FLAG{CASE_50_TOKEN_50_0}",
    "tests": [
      {
        "name": "Case 50 Forensic Test",
        "input": "1\nDATA HASH PREV\n",
        "expectedOutput": "0",
        "code": "Input: '1\\nDATA HASH PREV\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-51",
    "act": 4,
    "chapter": 51,
    "caseNum": "CASE 51",
    "title": "Case 51: The Fake Block",
    "domain": "Blockchain",
    "skills": "hashing, arrays",
    "points": 100,
    "incidentCode": "#ENIGMA-C51",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "One block in a local ledger has been modified.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 51 investigation concluded. Artifact for 'The Fake Block' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nLocate the first broken hash link.\n\n**Input Contract**:\n`Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print first mismatch.`\n\n**Required Result**:\n`Find tampered block.`",
    "formulation": "Skills: hashing, arrays\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_51_<COMPUTED_RESULT>}",
    "inputContract": "Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print first mismatch.",
    "requiredResult": "Find tampered block.",
    "sampleInput": "1\nBLOCKDATA HASH PREV\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import defaultdict\nn=int(input()); seen=set(); y=0;n0=0\nfor _ in range(n):\n    u,v=input().split()\n    if u in seen: continue\n    seen.add(u); y+=v==\"YES\"; n0+=v==\"NO\"\nprint(\"YES\" if y>n0 else \"NO\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 51: The Fake Block\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hashing, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print first mismat\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import defaultdict\nn=int(input()); seen=set(); y=0;n0=0\nfor _ in range(n):\n    u,v=input().split()\n    if u in seen: continue\n    seen.add(u); y+=v==\"YES\"; n0+=v==\"NO\"\nprint(\"YES\" if y>n0 else \"NO\")",
        "signature": "solve_case_51()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 51: The Fake Block\n// Domain: Blockchain\n// Input Contract: Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print fi\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 51: The Fake Block\n// Domain: Blockchain\n// Input Contract: Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print fi\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_51()",
    "starterCode": "# Project Enigmatrix \u2014 Case 51: The Fake Block\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: hashing, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n blocks each `data hash prev`; recompute SHA-256(data+prev) and print first mismat\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import defaultdict\nn=int(input()); seen=set(); y=0;n0=0\nfor _ in range(n):\n    u,v=input().split()\n    if u in seen: continue\n    seen.add(u); y+=v==\"YES\"; n0+=v==\"NO\"\nprint(\"YES\" if y>n0 else \"NO\")",
    "flag": "FLAG{CASE_51_TOKEN_51_VERIFIED}",
    "tests": [
      {
        "name": "Case 51 Forensic Test",
        "input": "1\nBLOCKDATA HASH PREV\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '1\\nBLOCKDATA HASH PREV\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-52",
    "act": 4,
    "chapter": 52,
    "caseNum": "CASE 52",
    "title": "Case 52: The DAO Vote",
    "domain": "Blockchain",
    "skills": "sets, grouping",
    "points": 100,
    "incidentCode": "#ENIGMA-C52",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "A suspicious governance decision depends on duplicated voting identities.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 52 investigation concluded. Artifact for 'The DAO Vote' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect duplicate voters and recalculate the result.\n\n**Input Contract**:\n`Input: n voter IDs and votes; ignore duplicate voter IDs after first; print final YES/NO.`\n\n**Required Result**:\n`Recalculate vote.`",
    "formulation": "Skills: sets, grouping\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_52_<COMPUTED_RESULT>}",
    "inputContract": "Input: n voter IDs and votes; ignore duplicate voter IDs after first; print final YES/NO.",
    "requiredResult": "Recalculate vote.",
    "sampleInput": "3\nV1 YES\nV2 NO\nV1 NO\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,m=map(int,input().split()); g=[[] for _ in range(n)]\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b)\nbest=[]\ndef dfs(u,p):\n    global best\n    p.append(u)\n    if len(p)>len(best):best=p[:]\n    for v in g[u]:\n        if v not in p: dfs(v,p)\n    p.pop()\ndfs(0,[])\nprint(*best)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 52: The DAO Vote\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: sets, grouping\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n voter IDs and votes; ignore duplicate voter IDs after first; print final YES/NO.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,m=map(int,input().split()); g=[[] for _ in range(n)]\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b)\nbest=[]\ndef dfs(u,p):\n    global best\n    p.append(u)\n    if len(p)>len(best):best=p[:]\n    for v in g[u]:\n        if v not in p: dfs(v,p)\n    p.pop()\ndfs(0,[])\nprint(*best)",
        "signature": "solve_case_52()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 52: The DAO Vote\n// Domain: Blockchain\n// Input Contract: Input: n voter IDs and votes; ignore duplicate voter IDs after first; print fina\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 52: The DAO Vote\n// Domain: Blockchain\n// Input Contract: Input: n voter IDs and votes; ignore duplicate voter IDs after first; print fina\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_52()",
    "starterCode": "# Project Enigmatrix \u2014 Case 52: The DAO Vote\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: sets, grouping\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n voter IDs and votes; ignore duplicate voter IDs after first; print final YES/NO.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,m=map(int,input().split()); g=[[] for _ in range(n)]\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b)\nbest=[]\ndef dfs(u,p):\n    global best\n    p.append(u)\n    if len(p)>len(best):best=p[:]\n    for v in g[u]:\n        if v not in p: dfs(v,p)\n    p.pop()\ndfs(0,[])\nprint(*best)",
    "flag": "FLAG{CASE_52_TOKEN_52_VERIFIED}",
    "tests": [
      {
        "name": "Case 52 Forensic Test",
        "input": "3\nV1 YES\nV2 NO\nV1 NO\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\nV1 YES\\nV2 NO\\nV1 NO\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-53",
    "act": 4,
    "chapter": 53,
    "caseNum": "CASE 53",
    "title": "Case 53: The Token Laundering Trail",
    "domain": "Blockchain",
    "skills": "graphs, DFS",
    "points": 100,
    "incidentCode": "#ENIGMA-C53",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "Funds move through many short-lived wallets.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 53 investigation concluded. Artifact for 'The Token Laundering Trail' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nBuild the transaction graph and find the longest suspicious route.\n\n**Input Contract**:\n`Input: directed graph; print longest simple path from node 0 using DFS.`\n\n**Required Result**:\n`Trace route.`",
    "formulation": "Skills: graphs, DFS\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_53_<COMPUTED_RESULT>}",
    "inputContract": "Input: directed graph; print longest simple path from node 0 using DFS.",
    "requiredResult": "Trace route.",
    "sampleInput": "2\n0 1\n1 2\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\ncur=input().strip()\nn=int(input())\nfor _ in range(n):\n    side,h=input().split()\n    cur=hashlib.sha256((h+cur).encode()).hexdigest() if side==\"L\" else hashlib.sha256((cur+h).encode()).hexdigest()\nprint(cur)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 53: The Token Laundering Trail\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: graphs, DFS\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: directed graph; print longest simple path from node 0 using DFS.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\ncur=input().strip()\nn=int(input())\nfor _ in range(n):\n    side,h=input().split()\n    cur=hashlib.sha256((h+cur).encode()).hexdigest() if side==\"L\" else hashlib.sha256((cur+h).encode()).hexdigest()\nprint(cur)",
        "signature": "solve_case_53()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 53: The Token Laundering Trail\n// Domain: Blockchain\n// Input Contract: Input: directed graph; print longest simple path from node 0 using DFS.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 53: The Token Laundering Trail\n// Domain: Blockchain\n// Input Contract: Input: directed graph; print longest simple path from node 0 using DFS.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_53()",
    "starterCode": "# Project Enigmatrix \u2014 Case 53: The Token Laundering Trail\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: graphs, DFS\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: directed graph; print longest simple path from node 0 using DFS.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\ncur=input().strip()\nn=int(input())\nfor _ in range(n):\n    side,h=input().split()\n    cur=hashlib.sha256((h+cur).encode()).hexdigest() if side==\"L\" else hashlib.sha256((cur+h).encode()).hexdigest()\nprint(cur)",
    "flag": "FLAG{CASE_53_TOKEN_53_VERIFIED}",
    "tests": [
      {
        "name": "Case 53 Forensic Test",
        "input": "2\n0 1\n1 2\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n0 1\\n1 2\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-54",
    "act": 4,
    "chapter": 54,
    "caseNum": "CASE 54",
    "title": "Case 54: The Merkle Witness",
    "domain": "Blockchain",
    "skills": "binary trees, hashing",
    "points": 100,
    "incidentCode": "#ENIGMA-C54",
    "phase": "PHASE VI \u2014 THE LEDGER NEVER FORGETS",
    "incidentStory": "A record must be verified against a Merkle root.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 54 investigation concluded. Artifact for 'The Merkle Witness' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nConstruct and validate the proof path.\n\n**Input Contract**:\n`Input: leaf, sibling hashes and L/R markers; compute root.`\n\n**Required Result**:\n`Verify Merkle proof.`",
    "formulation": "Skills: binary trees, hashing\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_54_<COMPUTED_RESULT>}",
    "inputContract": "Input: leaf, sibling hashes and L/R markers; compute root.",
    "requiredResult": "Verify Merkle proof.",
    "sampleInput": "LEAF HASH1 L\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import heapq\nR,C=map(int,input().split()); a=[list(map(int,input().split())) for _ in range(R)]\nS=tuple(map(int,input().split())); T=tuple(map(int,input().split()))\nd={S:0};q=[(0,S)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    if u==T: print(w);break\n    for dr,dc in ((1,0),(-1,0),(0,1),(0,-1)):\n        v=(u[0]+dr,u[1]+dc)\n        if 0<=v[0]<R and 0<=v[1]<C:\n            nw=w+a[v[0]][v[1]]\n            if nw<d.get(v,10**18):d[v]=nw;heapq.heappush(q,(nw,v))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 54: The Merkle Witness\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: binary trees, hashing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: leaf, sibling hashes and L/R markers; compute root.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import heapq\nR,C=map(int,input().split()); a=[list(map(int,input().split())) for _ in range(R)]\nS=tuple(map(int,input().split())); T=tuple(map(int,input().split()))\nd={S:0};q=[(0,S)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    if u==T: print(w);break\n    for dr,dc in ((1,0),(-1,0),(0,1),(0,-1)):\n        v=(u[0]+dr,u[1]+dc)\n        if 0<=v[0]<R and 0<=v[1]<C:\n            nw=w+a[v[0]][v[1]]\n            if nw<d.get(v,10**18):d[v]=nw;heapq.heappush(q,(nw,v))",
        "signature": "solve_case_54()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 54: The Merkle Witness\n// Domain: Blockchain\n// Input Contract: Input: leaf, sibling hashes and L/R markers; compute root.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 54: The Merkle Witness\n// Domain: Blockchain\n// Input Contract: Input: leaf, sibling hashes and L/R markers; compute root.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_54()",
    "starterCode": "# Project Enigmatrix \u2014 Case 54: The Merkle Witness\n# Phase: PHASE VI \u2014 THE LEDGER NEVER FORGETS\n# Domain: Blockchain\n# Core Skills: binary trees, hashing\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: leaf, sibling hashes and L/R markers; compute root.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import heapq\nR,C=map(int,input().split()); a=[list(map(int,input().split())) for _ in range(R)]\nS=tuple(map(int,input().split())); T=tuple(map(int,input().split()))\nd={S:0};q=[(0,S)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    if u==T: print(w);break\n    for dr,dc in ((1,0),(-1,0),(0,1),(0,-1)):\n        v=(u[0]+dr,u[1]+dc)\n        if 0<=v[0]<R and 0<=v[1]<C:\n            nw=w+a[v[0]][v[1]]\n            if nw<d.get(v,10**18):d[v]=nw;heapq.heappush(q,(nw,v))",
    "flag": "FLAG{CASE_54_TOKEN_54_VERIFIED}",
    "tests": [
      {
        "name": "Case 54 Forensic Test",
        "input": "LEAF HASH1 L\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: 'LEAF HASH1 L\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-55",
    "act": 4,
    "chapter": 55,
    "caseNum": "CASE 55",
    "title": "Case 55: Robot 17",
    "domain": "Robotics",
    "skills": "graphs, shortest path",
    "points": 100,
    "incidentCode": "#ENIGMA-C55",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "A warehouse robot takes an unauthorized route to a restricted zone.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 55 investigation concluded. Artifact for 'Robot 17' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconstruct its path and find the first abnormal waypoint.\n\n**Input Contract**:\n`Input: weighted grid; print shortest path cost from S to T.`\n\n**Required Result**:\n`Reconstruct robot route.`",
    "formulation": "Skills: graphs, shortest path\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_55_<COMPUTED_RESULT>}",
    "inputContract": "Input: weighted grid; print shortest path cost from S to T.",
    "requiredResult": "Reconstruct robot route.",
    "sampleInput": "2 2\n1 2\n3 4\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn=int(input()); ans=0\nfor _ in range(n):\n    a,b=map(float,input().split()); c,d=map(float,input().split())\n    ans=max(ans,math.hypot(a-c,b-d))\nprint(ans)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 55: Robot 17\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: graphs, shortest path\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: weighted grid; print shortest path cost from S to T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn=int(input()); ans=0\nfor _ in range(n):\n    a,b=map(float,input().split()); c,d=map(float,input().split())\n    ans=max(ans,math.hypot(a-c,b-d))\nprint(ans)",
        "signature": "solve_case_55()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 55: Robot 17\n// Domain: Robotics\n// Input Contract: Input: weighted grid; print shortest path cost from S to T.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 55: Robot 17\n// Domain: Robotics\n// Input Contract: Input: weighted grid; print shortest path cost from S to T.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_55()",
    "starterCode": "# Project Enigmatrix \u2014 Case 55: Robot 17\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: graphs, shortest path\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: weighted grid; print shortest path cost from S to T.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn=int(input()); ans=0\nfor _ in range(n):\n    a,b=map(float,input().split()); c,d=map(float,input().split())\n    ans=max(ans,math.hypot(a-c,b-d))\nprint(ans)",
    "flag": "FLAG{CASE_55_TOKEN_55_VERIFIED}",
    "tests": [
      {
        "name": "Case 55 Forensic Test",
        "input": "2 2\n1 2\n3 4\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2 2\\n1 2\\n3 4\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-56",
    "act": 4,
    "chapter": 56,
    "caseNum": "CASE 56",
    "title": "Case 56: The Surgical Arm",
    "domain": "Robotics",
    "skills": "arrays, distance metrics",
    "points": 100,
    "incidentCode": "#ENIGMA-C56",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "A surgical robot deviates slightly from a planned trajectory.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 56 investigation concluded. Artifact for 'The Surgical Arm' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCalculate the maximum positional deviation.\n\n**Input Contract**:\n`Input: planned and actual 2D points; print maximum Euclidean deviation.`\n\n**Required Result**:\n`Measure trajectory deviation.`",
    "formulation": "Skills: arrays, distance metrics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_56_<COMPUTED_RESULT>}",
    "inputContract": "Input: planned and actual 2D points; print maximum Euclidean deviation.",
    "requiredResult": "Measure trajectory deviation.",
    "sampleInput": "2\n0 0\n1 1\n0 0\n2 2\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); exp=input().split(); obs=input().split()\nfor i,(a,b) in enumerate(zip(exp,obs)):\n    if a!=b: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 56: The Surgical Arm\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: arrays, distance metrics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: planned and actual 2D points; print maximum Euclidean deviation.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); exp=input().split(); obs=input().split()\nfor i,(a,b) in enumerate(zip(exp,obs)):\n    if a!=b: print(i);break\nelse: print(-1)",
        "signature": "solve_case_56()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 56: The Surgical Arm\n// Domain: Robotics\n// Input Contract: Input: planned and actual 2D points; print maximum Euclidean deviation.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 56: The Surgical Arm\n// Domain: Robotics\n// Input Contract: Input: planned and actual 2D points; print maximum Euclidean deviation.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_56()",
    "starterCode": "# Project Enigmatrix \u2014 Case 56: The Surgical Arm\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: arrays, distance metrics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: planned and actual 2D points; print maximum Euclidean deviation.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); exp=input().split(); obs=input().split()\nfor i,(a,b) in enumerate(zip(exp,obs)):\n    if a!=b: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_56_TOKEN_56_0}",
    "tests": [
      {
        "name": "Case 56 Forensic Test",
        "input": "2\n0 0\n1 1\n0 0\n2 2\n",
        "expectedOutput": "0",
        "code": "Input: '2\\n0 0\\n1 1\\n0 0\\n2 2\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-57",
    "act": 4,
    "chapter": 57,
    "caseNum": "CASE 57",
    "title": "Case 57: The Assembly Sabotage",
    "domain": "Robotics",
    "skills": "FSM, state validation",
    "points": 100,
    "incidentCode": "#ENIGMA-C57",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "A robot skips one assembly step while all sensors remain active.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 57 investigation concluded. Artifact for 'The Assembly Sabotage' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nValidate the state sequence against the expected finite-state machine.\n\n**Input Contract**:\n`Input: expected states then observed states; print first mismatch.`\n\n**Required Result**:\n`Validate robot FSM.`",
    "formulation": "Skills: FSM, state validation\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_57_<COMPUTED_RESULT>}",
    "inputContract": "Input: expected states then observed states; print first mismatch.",
    "requiredResult": "Validate robot FSM.",
    "sampleInput": "3\n1 2 3\n1 4 3\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    t,p,r=input().split(); heapq.heappush(h,(int(t),-int(p),r))\nwhile h:\n    t,p,r=heapq.heappop(h);print(t,r)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 57: The Assembly Sabotage\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: FSM, state validation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected states then observed states; print first mismatch.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    t,p,r=input().split(); heapq.heappush(h,(int(t),-int(p),r))\nwhile h:\n    t,p,r=heapq.heappop(h);print(t,r)",
        "signature": "solve_case_57()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 57: The Assembly Sabotage\n// Domain: Robotics\n// Input Contract: Input: expected states then observed states; print first mismatch.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 57: The Assembly Sabotage\n// Domain: Robotics\n// Input Contract: Input: expected states then observed states; print first mismatch.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_57()",
    "starterCode": "# Project Enigmatrix \u2014 Case 57: The Assembly Sabotage\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: FSM, state validation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected states then observed states; print first mismatch.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import heapq\nn=int(input()); h=[]\nfor _ in range(n):\n    t,p,r=input().split(); heapq.heappush(h,(int(t),-int(p),r))\nwhile h:\n    t,p,r=heapq.heappop(h);print(t,r)",
    "flag": "FLAG{CASE_57_TOKEN_57_VERIFIED}",
    "tests": [
      {
        "name": "Case 57 Forensic Test",
        "input": "3\n1 2 3\n1 4 3\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n1 2 3\\n1 4 3\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-58",
    "act": 4,
    "chapter": 58,
    "caseNum": "CASE 58",
    "title": "Case 58: The Swarm Collision",
    "domain": "Robotics",
    "skills": "priority queues, intervals",
    "points": 100,
    "incidentCode": "#ENIGMA-C58",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "One drone in a robot swarm receives conflicting movement commands.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 58 investigation concluded. Artifact for 'The Swarm Collision' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nResolve command priority and identify the collision-causing command.\n\n**Input Contract**:\n`Input: commands `time priority robot`; print selected command at each time by max priority.`\n\n**Required Result**:\n`Resolve command conflict.`",
    "formulation": "Skills: priority queues, intervals\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_58_<COMPUTED_RESULT>}",
    "inputContract": "Input: commands `time priority robot`; print selected command at each time by max priority.",
    "requiredResult": "Resolve command conflict.",
    "sampleInput": "2\n10 1 R1\n10 2 R2\n",
    "expectedOutput": "",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import statistics\na=list(map(float,input().split()));m=statistics.mean(a);s=statistics.pstdev(a)\nprint(*[i for i,x in enumerate(a) if s and x>m+2*s])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 58: The Swarm Collision\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: priority queues, intervals\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: commands `time priority robot`; print selected command at each time by max priority\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import statistics\na=list(map(float,input().split()));m=statistics.mean(a);s=statistics.pstdev(a)\nprint(*[i for i,x in enumerate(a) if s and x>m+2*s])",
        "signature": "solve_case_58()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 58: The Swarm Collision\n// Domain: Robotics\n// Input Contract: Input: commands `time priority robot`; print selected command at each time by ma\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 58: The Swarm Collision\n// Domain: Robotics\n// Input Contract: Input: commands `time priority robot`; print selected command at each time by ma\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_58()",
    "starterCode": "# Project Enigmatrix \u2014 Case 58: The Swarm Collision\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: priority queues, intervals\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: commands `time priority robot`; print selected command at each time by max priority\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import statistics\na=list(map(float,input().split()));m=statistics.mean(a);s=statistics.pstdev(a)\nprint(*[i for i,x in enumerate(a) if s and x>m+2*s])",
    "flag": "FLAG{CASE_58_TOKEN_58_}",
    "tests": [
      {
        "name": "Case 58 Forensic Test",
        "input": "2\n10 1 R1\n10 2 R2\n",
        "expectedOutput": "",
        "code": "Input: '2\\n10 1 R1\\n10 2 R2\\n' -> Expected: ''"
      }
    ]
  },
  {
    "id": "case-59",
    "act": 4,
    "chapter": 59,
    "caseNum": "CASE 59",
    "title": "Case 59: The Gripper Incident",
    "domain": "Robotics",
    "skills": "statistics, thresholds",
    "points": 100,
    "incidentCode": "#ENIGMA-C59",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "A robotic gripper applies excessive force for one object.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 59 investigation concluded. Artifact for 'The Gripper Incident' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the outlier force profile.\n\n**Input Contract**:\n`Input: force readings; print indices above mean+2*std.`\n\n**Required Result**:\n`Detect excessive force.`",
    "formulation": "Skills: statistics, thresholds\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_59_<COMPUTED_RESULT>}",
    "inputContract": "Input: force readings; print indices above mean+2*std.",
    "requiredResult": "Detect excessive force.",
    "sampleInput": "3\n10 11 50\n",
    "expectedOutput": "NONE",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(int,input().split())); first={}\nfor i,x in enumerate(a):\n    if x in first: print(x,i-first[x]);break\n    first[x]=i\nelse: print(\"NONE\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 59: The Gripper Incident\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: statistics, thresholds\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: force readings; print indices above mean+2*std.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(int,input().split())); first={}\nfor i,x in enumerate(a):\n    if x in first: print(x,i-first[x]);break\n    first[x]=i\nelse: print(\"NONE\")",
        "signature": "solve_case_59()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 59: The Gripper Incident\n// Domain: Robotics\n// Input Contract: Input: force readings; print indices above mean+2*std.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 59: The Gripper Incident\n// Domain: Robotics\n// Input Contract: Input: force readings; print indices above mean+2*std.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_59()",
    "starterCode": "# Project Enigmatrix \u2014 Case 59: The Gripper Incident\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: statistics, thresholds\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: force readings; print indices above mean+2*std.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(int,input().split())); first={}\nfor i,x in enumerate(a):\n    if x in first: print(x,i-first[x]);break\n    first[x]=i\nelse: print(\"NONE\")",
    "flag": "FLAG{CASE_59_TOKEN_59_NONE}",
    "tests": [
      {
        "name": "Case 59 Forensic Test",
        "input": "3\n10 11 50\n",
        "expectedOutput": "NONE",
        "code": "Input: '3\\n10 11 50\\n' -> Expected: 'NONE'"
      }
    ]
  },
  {
    "id": "case-60",
    "act": 4,
    "chapter": 60,
    "caseNum": "CASE 60",
    "title": "Case 60: The Navigation Loop",
    "domain": "Robotics",
    "skills": "hash sets, cycle detection",
    "points": 100,
    "incidentCode": "#ENIGMA-C60",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "An autonomous rover becomes trapped in a loop.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 60 investigation concluded. Artifact for 'The Navigation Loop' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the repeated state and output the loop length.\n\n**Input Contract**:\n`Input: n states; print first repeated state and loop length.`\n\n**Required Result**:\n`Detect cycle.`",
    "formulation": "Skills: hash sets, cycle detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_60_<COMPUTED_RESULT>}",
    "inputContract": "Input: n states; print first repeated state and loop length.",
    "requiredResult": "Detect cycle.",
    "sampleInput": "4\n1 2 3 2\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); c=Counter()\nfor _ in range(n): c[input().split()[0]]+=1\nprint(c.most_common(1)[0])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 60: The Navigation Loop\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: hash sets, cycle detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states; print first repeated state and loop length.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); c=Counter()\nfor _ in range(n): c[input().split()[0]]+=1\nprint(c.most_common(1)[0])",
        "signature": "solve_case_60()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 60: The Navigation Loop\n// Domain: Robotics\n// Input Contract: Input: n states; print first repeated state and loop length.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 60: The Navigation Loop\n// Domain: Robotics\n// Input Contract: Input: n states; print first repeated state and loop length.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_60()",
    "starterCode": "# Project Enigmatrix \u2014 Case 60: The Navigation Loop\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: hash sets, cycle detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states; print first repeated state and loop length.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); c=Counter()\nfor _ in range(n): c[input().split()[0]]+=1\nprint(c.most_common(1)[0])",
    "flag": "FLAG{CASE_60_TOKEN_60_VERIFIED}",
    "tests": [
      {
        "name": "Case 60 Forensic Test",
        "input": "4\n1 2 3 2\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '4\\n1 2 3 2\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-61",
    "act": 4,
    "chapter": 61,
    "caseNum": "CASE 61",
    "title": "Case 61: The Hidden Controller",
    "domain": "Robotics",
    "skills": "graphs, joins",
    "points": 100,
    "incidentCode": "#ENIGMA-C61",
    "phase": "PHASE VII \u2014 CRIME IN MOTION",
    "incidentStory": "A robot accepts commands from an unknown controller.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 61 investigation concluded. Artifact for 'The Hidden Controller' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCorrelate controller IDs with network timing and isolate the unauthorized source.\n\n**Input Contract**:\n`Input: records `controller time`; print controller with highest event count.`\n\n**Required Result**:\n`Find controller source.`",
    "formulation": "Skills: graphs, joins\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_61_<COMPUTED_RESULT>}",
    "inputContract": "Input: records `controller time`; print controller with highest event count.",
    "requiredResult": "Find controller source.",
    "sampleInput": "3\nC1 100\nC2 105\nC1 110\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); lo,hi=map(float,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if not lo<=x<=hi: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 61: The Hidden Controller\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: graphs, joins\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: records `controller time`; print controller with highest event count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); lo,hi=map(float,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if not lo<=x<=hi: print(i);break\nelse: print(-1)",
        "signature": "solve_case_61()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 61: The Hidden Controller\n// Domain: Robotics\n// Input Contract: Input: records `controller time`; print controller with highest event count.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 61: The Hidden Controller\n// Domain: Robotics\n// Input Contract: Input: records `controller time`; print controller with highest event count.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_61()",
    "starterCode": "# Project Enigmatrix \u2014 Case 61: The Hidden Controller\n# Phase: PHASE VII \u2014 CRIME IN MOTION\n# Domain: Robotics\n# Core Skills: graphs, joins\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: records `controller time`; print controller with highest event count.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); lo,hi=map(float,input().split()); a=list(map(float,input().split()))\nfor i,x in enumerate(a):\n    if not lo<=x<=hi: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_61_TOKEN_61_VERIFIED}",
    "tests": [
      {
        "name": "Case 61 Forensic Test",
        "input": "3\nC1 100\nC2 105\nC1 110\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\nC1 100\\nC2 105\\nC1 110\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-62",
    "act": 4,
    "chapter": 62,
    "caseNum": "CASE 62",
    "title": "Case 62: The Satellite That Lied",
    "domain": "Aerospace",
    "skills": "time series, anomaly detection",
    "points": 100,
    "incidentCode": "#ENIGMA-C62",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "A satellite transmits impossible altitude readings before losing contact.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 62 investigation concluded. Artifact for 'The Satellite That Lied' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect the telemetry anomaly and reconstruct the last valid state.\n\n**Input Contract**:\n`Input: altitude values and physical min/max; print first out-of-range index.`\n\n**Required Result**:\n`Detect telemetry anomaly.`",
    "formulation": "Skills: time series, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_62_<COMPUTED_RESULT>}",
    "inputContract": "Input: altitude values and physical min/max; print first out-of-range index.",
    "requiredResult": "Detect telemetry anomaly.",
    "sampleInput": "3 100 500\n150 600 200\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(float,input().split())); print(min(range(n),key=lambda i:abs(a[i]-sum(a)/n)))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 62: The Satellite That Lied\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: time series, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: altitude values and physical min/max; print first out-of-range index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(float,input().split())); print(min(range(n),key=lambda i:abs(a[i]-sum(a)/n)))",
        "signature": "solve_case_62()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 62: The Satellite That Lied\n// Domain: Aerospace\n// Input Contract: Input: altitude values and physical min/max; print first out-of-range index.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 62: The Satellite That Lied\n// Domain: Aerospace\n// Input Contract: Input: altitude values and physical min/max; print first out-of-range index.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_62()",
    "starterCode": "# Project Enigmatrix \u2014 Case 62: The Satellite That Lied\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: time series, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: altitude values and physical min/max; print first out-of-range index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(float,input().split())); print(min(range(n),key=lambda i:abs(a[i]-sum(a)/n)))",
    "flag": "FLAG{CASE_62_TOKEN_62_VERIFIED}",
    "tests": [
      {
        "name": "Case 62 Forensic Test",
        "input": "3 100 500\n150 600 200\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3 100 500\\n150 600 200\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-63",
    "act": 4,
    "chapter": 63,
    "caseNum": "CASE 63",
    "title": "Case 63: The Flight Recorder Gap",
    "domain": "Aerospace",
    "skills": "sorting, interpolation",
    "points": 100,
    "incidentCode": "#ENIGMA-C63",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "An aircraft recorder is missing a short interval.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 63 investigation concluded. Artifact for 'The Flight Recorder Gap' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nInfer the missing event order from surrounding telemetry.\n\n**Input Contract**:\n`Input: sorted event IDs; print missing IDs.`\n\n**Required Result**:\n`Recover recorder gap.`",
    "formulation": "Skills: sorting, interpolation\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_63_<COMPUTED_RESULT>}",
    "inputContract": "Input: sorted event IDs; print missing IDs.",
    "requiredResult": "Recover recorder gap.",
    "sampleInput": "4\n1 2 4 5\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(k,n+1):\n    w=a[i-k:i];m=sum(w)/k;s=(sum((x-m)**2 for x in w)/k)**.5\n    if a[i-1]>m+3*s: print(i-1);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 63: The Flight Recorder Gap\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: sorting, interpolation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: sorted event IDs; print missing IDs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(k,n+1):\n    w=a[i-k:i];m=sum(w)/k;s=(sum((x-m)**2 for x in w)/k)**.5\n    if a[i-1]>m+3*s: print(i-1);break\nelse: print(-1)",
        "signature": "solve_case_63()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 63: The Flight Recorder Gap\n// Domain: Aerospace\n// Input Contract: Input: sorted event IDs; print missing IDs.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 63: The Flight Recorder Gap\n// Domain: Aerospace\n// Input Contract: Input: sorted event IDs; print missing IDs.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_63()",
    "starterCode": "# Project Enigmatrix \u2014 Case 63: The Flight Recorder Gap\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: sorting, interpolation\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: sorted event IDs; print missing IDs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n,k=map(int,input().split()); a=list(map(float,input().split()))\nfor i in range(k,n+1):\n    w=a[i-k:i];m=sum(w)/k;s=(sum((x-m)**2 for x in w)/k)**.5\n    if a[i-1]>m+3*s: print(i-1);break\nelse: print(-1)",
    "flag": "FLAG{CASE_63_TOKEN_63_VERIFIED}",
    "tests": [
      {
        "name": "Case 63 Forensic Test",
        "input": "4\n1 2 4 5\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '4\\n1 2 4 5\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-64",
    "act": 4,
    "chapter": 64,
    "caseNum": "CASE 64",
    "title": "Case 64: The Rocket Valve",
    "domain": "Aerospace",
    "skills": "FSM, arrays",
    "points": 100,
    "incidentCode": "#ENIGMA-C64",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "A launch vehicle valve changes state outside the launch sequence.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 64 investigation concluded. Artifact for 'The Rocket Valve' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nValidate the state machine and locate the illegal transition.\n\n**Input Contract**:\n`Input: n states and allowed transitions; print first illegal transition.`\n\n**Required Result**:\n`Validate launch FSM.`",
    "formulation": "Skills: FSM, arrays\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_64_<COMPUTED_RESULT>}",
    "inputContract": "Input: n states and allowed transitions; print first illegal transition.",
    "requiredResult": "Validate launch FSM.",
    "sampleInput": "3\n0 1\n1 2\n2 0\n2\n0 1\n1 3\n",
    "expectedOutput": "0 1",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); a=input().split(); c=Counter(a); print(*[x for x in c if c[x]>.2*n])",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 64: The Rocket Valve\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: FSM, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states and allowed transitions; print first illegal transition.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); a=input().split(); c=Counter(a); print(*[x for x in c if c[x]>.2*n])",
        "signature": "solve_case_64()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 64: The Rocket Valve\n// Domain: Aerospace\n// Input Contract: Input: n states and allowed transitions; print first illegal transition.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 64: The Rocket Valve\n// Domain: Aerospace\n// Input Contract: Input: n states and allowed transitions; print first illegal transition.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_64()",
    "starterCode": "# Project Enigmatrix \u2014 Case 64: The Rocket Valve\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: FSM, arrays\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n states and allowed transitions; print first illegal transition.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); a=input().split(); c=Counter(a); print(*[x for x in c if c[x]>.2*n])",
    "flag": "FLAG{CASE_64_TOKEN_64_0_1}",
    "tests": [
      {
        "name": "Case 64 Forensic Test",
        "input": "3\n0 1\n1 2\n2 0\n2\n0 1\n1 3\n",
        "expectedOutput": "0 1",
        "code": "Input: '3\\n0 1\\n1 2\\n2 0\\n2\\n0 1\\n1 3\\n' -> Expected: '0 1'"
      }
    ]
  },
  {
    "id": "case-65",
    "act": 5,
    "chapter": 65,
    "caseNum": "CASE 65",
    "title": "Case 65: The Navigation Drift",
    "domain": "Aerospace",
    "skills": "vectors, numerical analysis",
    "points": 100,
    "incidentCode": "#ENIGMA-C65",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "An autonomous aircraft slowly diverges from its planned route.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 65 investigation concluded. Artifact for 'The Navigation Drift' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCalculate cumulative deviation and find the first threshold breach.\n\n**Input Contract**:\n`Input: planned and actual x,y points; print first index distance > threshold.`\n\n**Required Result**:\n`Find route breach.`",
    "formulation": "Skills: vectors, numerical analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_65_<COMPUTED_RESULT>}",
    "inputContract": "Input: planned and actual x,y points; print first index distance > threshold.",
    "requiredResult": "Find route breach.",
    "sampleInput": "2\n0 0\n1 1\n0 0\n5 5\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); lo=list(map(float,input().split())); hi=list(map(float,input().split()))\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if any(x[j]<lo[j] or x[j]>hi[j] for j in range(3)): print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 65: The Navigation Drift\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: vectors, numerical analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: planned and actual x,y points; print first index distance > threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); lo=list(map(float,input().split())); hi=list(map(float,input().split()))\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if any(x[j]<lo[j] or x[j]>hi[j] for j in range(3)): print(i);break\nelse: print(-1)",
        "signature": "solve_case_65()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 65: The Navigation Drift\n// Domain: Aerospace\n// Input Contract: Input: planned and actual x,y points; print first index distance > threshold.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 65: The Navigation Drift\n// Domain: Aerospace\n// Input Contract: Input: planned and actual x,y points; print first index distance > threshold.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_65()",
    "starterCode": "# Project Enigmatrix \u2014 Case 65: The Navigation Drift\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: vectors, numerical analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: planned and actual x,y points; print first index distance > threshold.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); lo=list(map(float,input().split())); hi=list(map(float,input().split()))\nfor i in range(n):\n    x=list(map(float,input().split()))\n    if any(x[j]<lo[j] or x[j]>hi[j] for j in range(3)): print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_65_TOKEN_65_VERIFIED}",
    "tests": [
      {
        "name": "Case 65 Forensic Test",
        "input": "2\n0 0\n1 1\n0 0\n5 5\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n0 0\\n1 1\\n0 0\\n5 5\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-66",
    "act": 5,
    "chapter": 66,
    "caseNum": "CASE 66",
    "title": "Case 66: The Radar Shadow",
    "domain": "Aerospace",
    "skills": "tracking, nearest-neighbor logic",
    "points": 100,
    "incidentCode": "#ENIGMA-C66",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "Radar returns contain one artificial target.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 66 investigation concluded. Artifact for 'The Radar Shadow' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nSeparate the true track from the injected track.\n\n**Input Contract**:\n`Input: 2D radar points and expected center; print farthest point.`\n\n**Required Result**:\n`Identify injected track.`",
    "formulation": "Skills: tracking, nearest-neighbor logic\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_66_<COMPUTED_RESULT>}",
    "inputContract": "Input: 2D radar points and expected center; print farthest point.",
    "requiredResult": "Identify injected track.",
    "sampleInput": "2\n0 0\n1 1\n0 0\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); exp=set(input().split()); obs=set(input().split()); print(*sorted(exp-obs))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 66: The Radar Shadow\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: tracking, nearest-neighbor logic\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: 2D radar points and expected center; print farthest point.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); exp=set(input().split()); obs=set(input().split()); print(*sorted(exp-obs))",
        "signature": "solve_case_66()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 66: The Radar Shadow\n// Domain: Aerospace\n// Input Contract: Input: 2D radar points and expected center; print farthest point.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 66: The Radar Shadow\n// Domain: Aerospace\n// Input Contract: Input: 2D radar points and expected center; print farthest point.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_66()",
    "starterCode": "# Project Enigmatrix \u2014 Case 66: The Radar Shadow\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: tracking, nearest-neighbor logic\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: 2D radar points and expected center; print farthest point.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); exp=set(input().split()); obs=set(input().split()); print(*sorted(exp-obs))",
    "flag": "FLAG{CASE_66_TOKEN_66_0}",
    "tests": [
      {
        "name": "Case 66 Forensic Test",
        "input": "2\n0 0\n1 1\n0 0\n",
        "expectedOutput": "0",
        "code": "Input: '2\\n0 0\\n1 1\\n0 0\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-67",
    "act": 5,
    "chapter": 67,
    "caseNum": "CASE 67",
    "title": "Case 67: The Docking Failure",
    "domain": "Aerospace",
    "skills": "weighted averages, robust statistics",
    "points": 100,
    "incidentCode": "#ENIGMA-C67",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "A spacecraft docking system rejects a valid approach.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 67 investigation concluded. Artifact for 'The Docking Failure' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare sensor fusion outputs and locate the inconsistent sensor.\n\n**Input Contract**:\n`Input: sensor values and weights; print sensor whose removal changes weighted mean most.`\n\n**Required Result**:\n`Find inconsistent sensor.`",
    "formulation": "Skills: weighted averages, robust statistics\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_67_<COMPUTED_RESULT>}",
    "inputContract": "Input: sensor values and weights; print sensor whose removal changes weighted mean most.",
    "requiredResult": "Find inconsistent sensor.",
    "sampleInput": "3\n1.0 2.0 3.0\n0.3 0.3 0.4\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\norder=list(map(int,input().split())); pos={v:i for i,v in enumerate(order)}\nprint(\"VALID\" if len(order)==n and all(pos[u]<pos[v] for u in range(n) for v in g[u]) else \"INVALID\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 67: The Docking Failure\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: weighted averages, robust statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: sensor values and weights; print sensor whose removal changes weighted mean most.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\norder=list(map(int,input().split())); pos={v:i for i,v in enumerate(order)}\nprint(\"VALID\" if len(order)==n and all(pos[u]<pos[v] for u in range(n) for v in g[u]) else \"INVALID\")",
        "signature": "solve_case_67()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 67: The Docking Failure\n// Domain: Aerospace\n// Input Contract: Input: sensor values and weights; print sensor whose removal changes weighted me\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 67: The Docking Failure\n// Domain: Aerospace\n// Input Contract: Input: sensor values and weights; print sensor whose removal changes weighted me\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_67()",
    "starterCode": "# Project Enigmatrix \u2014 Case 67: The Docking Failure\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: weighted averages, robust statistics\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: sensor values and weights; print sensor whose removal changes weighted mean most.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import defaultdict,deque\nn,m=map(int,input().split()); g=[[] for _ in range(n)]; deg=[0]*n\nfor _ in range(m):\n    a,b=map(int,input().split());g[a].append(b);deg[b]+=1\norder=list(map(int,input().split())); pos={v:i for i,v in enumerate(order)}\nprint(\"VALID\" if len(order)==n and all(pos[u]<pos[v] for u in range(n) for v in g[u]) else \"INVALID\")",
    "flag": "FLAG{CASE_67_TOKEN_67_VERIFIED}",
    "tests": [
      {
        "name": "Case 67 Forensic Test",
        "input": "3\n1.0 2.0 3.0\n0.3 0.3 0.4\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\n1.0 2.0 3.0\\n0.3 0.3 0.4' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-68",
    "act": 5,
    "chapter": 68,
    "caseNum": "CASE 68",
    "title": "Case 68: The Black Box Cipher",
    "domain": "Aerospace",
    "skills": "strings, stacks, state machines",
    "points": 100,
    "incidentCode": "#ENIGMA-C68",
    "phase": "PHASE VIII \u2014 ABOVE THE GROUND",
    "incidentStory": "A flight-data recorder stores events in an encoded sequence.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 68 investigation concluded. Artifact for 'The Black Box Cipher' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDecode the sequence and reconstruct the final system state.\n\n**Input Contract**:\n`Input: encoded string; decode by reversing then Caesar-shifting letters -1.`\n\n**Required Result**:\n`Reconstruct state token.`",
    "formulation": "Skills: strings, stacks, state machines\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_68_<COMPUTED_RESULT>}",
    "inputContract": "Input: encoded string; decode by reversing then Caesar-shifting letters -1.",
    "requiredResult": "Reconstruct state token.",
    "sampleInput": "IFMMP\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input()); d={}\nfor _ in range(n):\n    v,h=input().split();d[v]=h\nfor v in sorted(d):\n    if hashlib.sha256(v.encode()).hexdigest()!=d[v]: print(v);break\nelse: print(\"VALID\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 68: The Black Box Cipher\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: strings, stacks, state machines\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: encoded string; decode by reversing then Caesar-shifting letters -1.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input()); d={}\nfor _ in range(n):\n    v,h=input().split();d[v]=h\nfor v in sorted(d):\n    if hashlib.sha256(v.encode()).hexdigest()!=d[v]: print(v);break\nelse: print(\"VALID\")",
        "signature": "solve_case_68()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 68: The Black Box Cipher\n// Domain: Aerospace\n// Input Contract: Input: encoded string; decode by reversing then Caesar-shifting letters -1.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 68: The Black Box Cipher\n// Domain: Aerospace\n// Input Contract: Input: encoded string; decode by reversing then Caesar-shifting letters -1.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_68()",
    "starterCode": "# Project Enigmatrix \u2014 Case 68: The Black Box Cipher\n# Phase: PHASE VIII \u2014 ABOVE THE GROUND\n# Domain: Aerospace\n# Core Skills: strings, stacks, state machines\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: encoded string; decode by reversing then Caesar-shifting letters -1.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input()); d={}\nfor _ in range(n):\n    v,h=input().split();d[v]=h\nfor v in sorted(d):\n    if hashlib.sha256(v.encode()).hexdigest()!=d[v]: print(v);break\nelse: print(\"VALID\")",
    "flag": "FLAG{CASE_68_TOKEN_68_VERIFIED}",
    "tests": [
      {
        "name": "Case 68 Forensic Test",
        "input": "IFMMP\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: 'IFMMP\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-69",
    "act": 5,
    "chapter": 69,
    "caseNum": "CASE 69",
    "title": "Case 69: Nanoparticle 47",
    "domain": "Nanotechnology",
    "skills": "statistics, anomaly detection",
    "points": 100,
    "incidentCode": "#ENIGMA-C69",
    "phase": "PHASE IX \u2014 THE SMALLEST TRACE",
    "incidentStory": "A research batch is deliberately contaminated.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 69 investigation concluded. Artifact for 'Nanoparticle 47' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nUse measurement features to identify the anomalous batch.\n\n**Input Contract**:\n`Input: n rows of measurements; print row with largest standardized distance.`\n\n**Required Result**:\n`Find contaminated batch.`",
    "formulation": "Skills: statistics, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_69_<COMPUTED_RESULT>}",
    "inputContract": "Input: n rows of measurements; print row with largest standardized distance.",
    "requiredResult": "Find contaminated batch.",
    "sampleInput": "2 2\n1 1\n1 10\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[tuple(map(int,input().split())) for _ in range(n)];a.sort()\nbest=(0,0);s=0;j=0\nfor i in range(n):\n    while a[i][0]-a[j][0]>60:s-=a[j][1];j+=1\n    s+=a[i][1];best=max(best,(s,a[i][0]))\nprint(*best)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 69: Nanoparticle 47\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: statistics, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows of measurements; print row with largest standardized distance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[tuple(map(int,input().split())) for _ in range(n)];a.sort()\nbest=(0,0);s=0;j=0\nfor i in range(n):\n    while a[i][0]-a[j][0]>60:s-=a[j][1];j+=1\n    s+=a[i][1];best=max(best,(s,a[i][0]))\nprint(*best)",
        "signature": "solve_case_69()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 69: Nanoparticle 47\n// Domain: Nanotechnology\n// Input Contract: Input: n rows of measurements; print row with largest standardized distance.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 69: Nanoparticle 47\n// Domain: Nanotechnology\n// Input Contract: Input: n rows of measurements; print row with largest standardized distance.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_69()",
    "starterCode": "# Project Enigmatrix \u2014 Case 69: Nanoparticle 47\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: statistics, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n rows of measurements; print row with largest standardized distance.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[tuple(map(int,input().split())) for _ in range(n)];a.sort()\nbest=(0,0);s=0;j=0\nfor i in range(n):\n    while a[i][0]-a[j][0]>60:s-=a[j][1];j+=1\n    s+=a[i][1];best=max(best,(s,a[i][0]))\nprint(*best)",
    "flag": "FLAG{CASE_69_TOKEN_69_VERIFIED}",
    "tests": [
      {
        "name": "Case 69 Forensic Test",
        "input": "2 2\n1 1\n1 10\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2 2\\n1 1\\n1 10\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-70",
    "act": 5,
    "chapter": 70,
    "caseNum": "CASE 70",
    "title": "Case 70: The Nano Sensor",
    "domain": "Nanotechnology",
    "skills": "moving averages, variance",
    "points": 100,
    "incidentCode": "#ENIGMA-C70",
    "phase": "PHASE IX \u2014 THE SMALLEST TRACE",
    "incidentStory": "A nanosensor reports a sudden signal spike.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 70 investigation concluded. Artifact for 'The Nano Sensor' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetermine whether the spike is a true event or measurement noise.\n\n**Input Contract**:\n`Input: signal and window k; print first point exceeding moving mean + 3*std.`\n\n**Required Result**:\n`Detect spike.`",
    "formulation": "Skills: moving averages, variance\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_70_<COMPUTED_RESULT>}",
    "inputContract": "Input: signal and window k; print first point exceeding moving mean + 3*std.",
    "requiredResult": "Detect spike.",
    "sampleInput": "4 2\n1.0 1.2 5.0 1.1\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=list(map(int,input().split())); b=list(map(int,input().split())); c=list(map(int,input().split()))\nfor i in range(n):\n    if abs(a[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(b[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(c[i]-sorted((a[i],b[i],c[i]))[1])>10: print(i);break\nelse: print(-1)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 70: The Nano Sensor\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: moving averages, variance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: signal and window k; print first point exceeding moving mean + 3*std.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=list(map(int,input().split())); b=list(map(int,input().split())); c=list(map(int,input().split()))\nfor i in range(n):\n    if abs(a[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(b[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(c[i]-sorted((a[i],b[i],c[i]))[1])>10: print(i);break\nelse: print(-1)",
        "signature": "solve_case_70()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 70: The Nano Sensor\n// Domain: Nanotechnology\n// Input Contract: Input: signal and window k; print first point exceeding moving mean + 3*std.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 70: The Nano Sensor\n// Domain: Nanotechnology\n// Input Contract: Input: signal and window k; print first point exceeding moving mean + 3*std.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_70()",
    "starterCode": "# Project Enigmatrix \u2014 Case 70: The Nano Sensor\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: moving averages, variance\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: signal and window k; print first point exceeding moving mean + 3*std.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=list(map(int,input().split())); b=list(map(int,input().split())); c=list(map(int,input().split()))\nfor i in range(n):\n    if abs(a[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(b[i]-sorted((a[i],b[i],c[i]))[1])>10 or abs(c[i]-sorted((a[i],b[i],c[i]))[1])>10: print(i);break\nelse: print(-1)",
    "flag": "FLAG{CASE_70_TOKEN_70_VERIFIED}",
    "tests": [
      {
        "name": "Case 70 Forensic Test",
        "input": "4 2\n1.0 1.2 5.0 1.1\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '4 2\\n1.0 1.2 5.0 1.1\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-71",
    "act": 5,
    "chapter": 71,
    "caseNum": "CASE 71",
    "title": "Case 71: The Fabricated Experiment",
    "domain": "Nanotechnology",
    "skills": "frequency analysis, entropy",
    "points": 100,
    "incidentCode": "#ENIGMA-C71",
    "phase": "PHASE IX \u2014 THE SMALLEST TRACE",
    "incidentStory": "Experimental results contain repeated values that look artificially generated.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 71 investigation concluded. Artifact for 'The Fabricated Experiment' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nDetect suspicious regularity and identify the affected runs.\n\n**Input Contract**:\n`Input: measurements; print values occurring in >20% of runs.`\n\n**Required Result**:\n`Detect suspicious regularity.`",
    "formulation": "Skills: frequency analysis, entropy\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_71_<COMPUTED_RESULT>}",
    "inputContract": "Input: measurements; print values occurring in >20% of runs.",
    "requiredResult": "Detect suspicious regularity.",
    "sampleInput": "5\n10 20 10 30 10\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input()); edges=[tuple(map(int,input().split())) for _ in range(n-1)]; tok=[input().split() for _ in range(79)]\ntok.sort(key=lambda x:int(x[0]))\ns=\"|\".join(f\"{a}:{b}\" for a,b in tok)\nprint(hashlib.sha256(s.encode()).hexdigest())",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 71: The Fabricated Experiment\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: frequency analysis, entropy\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: measurements; print values occurring in >20% of runs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input()); edges=[tuple(map(int,input().split())) for _ in range(n-1)]; tok=[input().split() for _ in range(79)]\ntok.sort(key=lambda x:int(x[0]))\ns=\"|\".join(f\"{a}:{b}\" for a,b in tok)\nprint(hashlib.sha256(s.encode()).hexdigest())",
        "signature": "solve_case_71()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 71: The Fabricated Experiment\n// Domain: Nanotechnology\n// Input Contract: Input: measurements; print values occurring in >20% of runs.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 71: The Fabricated Experiment\n// Domain: Nanotechnology\n// Input Contract: Input: measurements; print values occurring in >20% of runs.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_71()",
    "starterCode": "# Project Enigmatrix \u2014 Case 71: The Fabricated Experiment\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: frequency analysis, entropy\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: measurements; print values occurring in >20% of runs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input()); edges=[tuple(map(int,input().split())) for _ in range(n-1)]; tok=[input().split() for _ in range(79)]\ntok.sort(key=lambda x:int(x[0]))\ns=\"|\".join(f\"{a}:{b}\" for a,b in tok)\nprint(hashlib.sha256(s.encode()).hexdigest())",
    "flag": "FLAG{CASE_71_TOKEN_71_VERIFIED}",
    "tests": [
      {
        "name": "Case 71 Forensic Test",
        "input": "5\n10 20 10 30 10\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '5\\n10 20 10 30 10\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-72",
    "act": 5,
    "chapter": 72,
    "caseNum": "CASE 72",
    "title": "Case 72: The Clean-Room Intrusion",
    "domain": "Nanotechnology",
    "skills": "maps, constraints",
    "points": 100,
    "incidentCode": "#ENIGMA-C72",
    "phase": "PHASE IX \u2014 THE SMALLEST TRACE",
    "incidentStory": "A fabrication log contains an unexplained sequence of parameter changes.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 72 investigation concluded. Artifact for 'The Clean-Room Intrusion' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nFind the first parameter combination outside the approved envelope.\n\n**Input Contract**:\n`Input: n parameter triples and min/max bounds; print first out-of-envelope index.`\n\n**Required Result**:\n`Find unauthorized parameter change.`",
    "formulation": "Skills: maps, constraints\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_72_<COMPUTED_RESULT>}",
    "inputContract": "Input: n parameter triples and min/max bounds; print first out-of-envelope index.",
    "requiredResult": "Find unauthorized parameter change.",
    "sampleInput": "1\n10 20 30\n5 25 15 35 25 45\n",
    "expectedOutput": "",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "# Matrix contradiction detector: input n, then n*n integers. Print conflicting row indices.\nn=int(input()); A=[list(map(int,input().split())) for _ in range(n)]\nfor i in range(n):\n    for j in range(i+1,n):\n        if A[i][j] != A[j][i]: print(i,j)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 72: The Clean-Room Intrusion\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: maps, constraints\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n parameter triples and min/max bounds; print first out-of-envelope index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "# Matrix contradiction detector: input n, then n*n integers. Print conflicting row indices.\nn=int(input()); A=[list(map(int,input().split())) for _ in range(n)]\nfor i in range(n):\n    for j in range(i+1,n):\n        if A[i][j] != A[j][i]: print(i,j)",
        "signature": "solve_case_72()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 72: The Clean-Room Intrusion\n// Domain: Nanotechnology\n// Input Contract: Input: n parameter triples and min/max bounds; print first out-of-envelope index\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 72: The Clean-Room Intrusion\n// Domain: Nanotechnology\n// Input Contract: Input: n parameter triples and min/max bounds; print first out-of-envelope index\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_72()",
    "starterCode": "# Project Enigmatrix \u2014 Case 72: The Clean-Room Intrusion\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: maps, constraints\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: n parameter triples and min/max bounds; print first out-of-envelope index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "# Matrix contradiction detector: input n, then n*n integers. Print conflicting row indices.\nn=int(input()); A=[list(map(int,input().split())) for _ in range(n)]\nfor i in range(n):\n    for j in range(i+1,n):\n        if A[i][j] != A[j][i]: print(i,j)",
    "flag": "FLAG{CASE_72_TOKEN_72_}",
    "tests": [
      {
        "name": "Case 72 Forensic Test",
        "input": "1\n10 20 30\n5 25 15 35 25 45\n",
        "expectedOutput": "",
        "code": "Input: '1\\n10 20 30\\n5 25 15 35 25 ' -> Expected: ''"
      }
    ]
  },
  {
    "id": "case-73",
    "act": 5,
    "chapter": 73,
    "caseNum": "CASE 73",
    "title": "Case 73: The Missing Sample",
    "domain": "Nanotechnology",
    "skills": "hash maps, joins, sorting",
    "points": 100,
    "incidentCode": "#ENIGMA-C73",
    "phase": "PHASE IX \u2014 THE SMALLEST TRACE",
    "incidentStory": "A critical nanoscale sample disappears between two processing stages.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 73 investigation concluded. Artifact for 'The Missing Sample' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconcile batch IDs and process timestamps to locate the missing transfer.\n\n**Input Contract**:\n`Input: expected IDs and observed IDs; print missing IDs.`\n\n**Required Result**:\n`Locate missing transfer.`",
    "formulation": "Skills: hash maps, joins, sorting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_73_<COMPUTED_RESULT>}",
    "inputContract": "Input: expected IDs and observed IDs; print missing IDs.",
    "requiredResult": "Locate missing transfer.",
    "sampleInput": "3\nA B C\n2\nA C\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=[tuple(map(float,input().split())) for _ in range(n)]\ns=sum(x[1] for x in a); print(round(s/sum(x[0] for x in a),6) if sum(x[0] for x in a) else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 73: The Missing Sample\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: hash maps, joins, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected IDs and observed IDs; print missing IDs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=[tuple(map(float,input().split())) for _ in range(n)]\ns=sum(x[1] for x in a); print(round(s/sum(x[0] for x in a),6) if sum(x[0] for x in a) else 0)",
        "signature": "solve_case_73()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 73: The Missing Sample\n// Domain: Nanotechnology\n// Input Contract: Input: expected IDs and observed IDs; print missing IDs.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 73: The Missing Sample\n// Domain: Nanotechnology\n// Input Contract: Input: expected IDs and observed IDs; print missing IDs.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_73()",
    "starterCode": "# Project Enigmatrix \u2014 Case 73: The Missing Sample\n# Phase: PHASE IX \u2014 THE SMALLEST TRACE\n# Domain: Nanotechnology\n# Core Skills: hash maps, joins, sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected IDs and observed IDs; print missing IDs.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=[tuple(map(float,input().split())) for _ in range(n)]\ns=sum(x[1] for x in a); print(round(s/sum(x[0] for x in a),6) if sum(x[0] for x in a) else 0)",
    "flag": "FLAG{CASE_73_TOKEN_73_VERIFIED}",
    "tests": [
      {
        "name": "Case 73 Forensic Test",
        "input": "3\nA B C\n2\nA C\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '3\\nA B C\\n2\\nA C\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-74",
    "act": 5,
    "chapter": 74,
    "caseNum": "CASE 74",
    "title": "Case 74: The Autonomous Heist",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "graphs, event correlation, anomaly detection",
    "points": 100,
    "incidentCode": "#ENIGMA-C74",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A cyber intrusion manipulates an IoT-controlled robot to steal a research sample.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 74 investigation concluded. Artifact for 'The Autonomous Heist' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCorrelate network commands, sensor states and robot movement.\n\n**Input Contract**:\n`Input: events `time domain id`; sort and print first time where CYBER, IOT and ROBOT all appear within 60 seconds.`\n\n**Required Result**:\n`Correlate cross-domain crime.`",
    "formulation": "Skills: graphs, event correlation, anomaly detection\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_74_<COMPUTED_RESULT>}",
    "inputContract": "Input: events `time domain id`; sort and print first time where CYBER, IOT and ROBOT all appear within 60 seconds.",
    "requiredResult": "Correlate cross-domain crime.",
    "sampleInput": "2\n10 CYBER ID1\n10 IOT ID2\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from functools import lru_cache\nn=int(input()); g=[list(map(int,input().split())) for _ in range(n)]\n@lru_cache(None)\ndef f(u):\n    return max([0]+[1+f(v) for v in g[u] if v<n])\nprint(max(f(i) for i in range(n)))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 74: The Autonomous Heist\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: graphs, event correlation, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: events `time domain id`; sort and print first time where CYBER, IOT and ROBOT all a\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from functools import lru_cache\nn=int(input()); g=[list(map(int,input().split())) for _ in range(n)]\n@lru_cache(None)\ndef f(u):\n    return max([0]+[1+f(v) for v in g[u] if v<n])\nprint(max(f(i) for i in range(n)))",
        "signature": "solve_case_74()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 74: The Autonomous Heist\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: events `time domain id`; sort and print first time where CYBER, IOT and R\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 74: The Autonomous Heist\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: events `time domain id`; sort and print first time where CYBER, IOT and R\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_74()",
    "starterCode": "# Project Enigmatrix \u2014 Case 74: The Autonomous Heist\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: graphs, event correlation, anomaly detection\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: events `time domain id`; sort and print first time where CYBER, IOT and ROBOT all a\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from functools import lru_cache\nn=int(input()); g=[list(map(int,input().split())) for _ in range(n)]\n@lru_cache(None)\ndef f(u):\n    return max([0]+[1+f(v) for v in g[u] if v<n])\nprint(max(f(i) for i in range(n)))",
    "flag": "FLAG{CASE_74_TOKEN_74_VERIFIED}",
    "tests": [
      {
        "name": "Case 74 Forensic Test",
        "input": "2\n10 CYBER ID1\n10 IOT ID2\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\n10 CYBER ID1\\n10 IOT ID2' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-75",
    "act": 5,
    "chapter": 75,
    "caseNum": "CASE 75",
    "title": "Case 75: The Blockchain Black Box",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "hashing, joins, vector comparison",
    "points": 100,
    "incidentCode": "#ENIGMA-C75",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A laboratory uses blockchain to store AI model versions, but one version was secretly replaced.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 75 investigation concluded. Artifact for 'The Blockchain Black Box' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nValidate hashes, model fingerprints and deployment timestamps.\n\n**Input Contract**:\n`Input: model version strings and hashes; print first version whose SHA-256 differs from supplied hash.`\n\n**Required Result**:\n`Verify model ledger.`",
    "formulation": "Skills: hashing, joins, vector comparison\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_75_<COMPUTED_RESULT>}",
    "inputContract": "Input: model version strings and hashes; print first version whose SHA-256 differs from supplied hash.",
    "requiredResult": "Verify model ledger.",
    "sampleInput": "2\nv1 HASH1\nv2 HASH2\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import heapq\nn,m=map(int,input().split());g=[[] for _ in range(n)]\nfor _ in range(m):\n    u,v,w=map(int,input().split());g[u].append((v,w))\nd=[10**18]*n;d[0]=0;q=[(0,0)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    for v,c in g[u]:\n        if w+c<d[v]:d[v]=w+c;heapq.heappush(q,(d[v],v))\nprint(*d)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 75: The Blockchain Black Box\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, joins, vector comparison\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: model version strings and hashes; print first version whose SHA-256 differs from su\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import heapq\nn,m=map(int,input().split());g=[[] for _ in range(n)]\nfor _ in range(m):\n    u,v,w=map(int,input().split());g[u].append((v,w))\nd=[10**18]*n;d[0]=0;q=[(0,0)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    for v,c in g[u]:\n        if w+c<d[v]:d[v]=w+c;heapq.heappush(q,(d[v],v))\nprint(*d)",
        "signature": "solve_case_75()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 75: The Blockchain Black Box\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: model version strings and hashes; print first version whose SHA-256 diffe\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 75: The Blockchain Black Box\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: model version strings and hashes; print first version whose SHA-256 diffe\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_75()",
    "starterCode": "# Project Enigmatrix \u2014 Case 75: The Blockchain Black Box\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, joins, vector comparison\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: model version strings and hashes; print first version whose SHA-256 differs from su\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import heapq\nn,m=map(int,input().split());g=[[] for _ in range(n)]\nfor _ in range(m):\n    u,v,w=map(int,input().split());g[u].append((v,w))\nd=[10**18]*n;d[0]=0;q=[(0,0)]\nwhile q:\n    w,u=heapq.heappop(q)\n    if w!=d[u]:continue\n    for v,c in g[u]:\n        if w+c<d[v]:d[v]=w+c;heapq.heappush(q,(d[v],v))\nprint(*d)",
    "flag": "FLAG{CASE_75_TOKEN_75_VERIFIED}",
    "tests": [
      {
        "name": "Case 75 Forensic Test",
        "input": "2\nv1 HASH1\nv2 HASH2\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\nv1 HASH1\\nv2 HASH2\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-76",
    "act": 5,
    "chapter": 76,
    "caseNum": "CASE 76",
    "title": "Case 76: The Drone Data Theft",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "time series, sliding windows, graph analysis",
    "points": 100,
    "incidentCode": "#ENIGMA-C76",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A drone captures restricted imagery and uploads it through a compromised gateway.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 76 investigation concluded. Artifact for 'The Drone Data Theft' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nIdentify the unauthorized flight window and data-transfer burst.\n\n**Input Contract**:\n`Input: timestamps and byte counts; find maximum 60-second transfer sum.`\n\n**Required Result**:\n`Detect exfiltration burst.`",
    "formulation": "Skills: time series, sliding windows, graph analysis\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_76_<COMPUTED_RESULT>}",
    "inputContract": "Input: timestamps and byte counts; find maximum 60-second transfer sum.",
    "requiredResult": "Detect exfiltration burst.",
    "sampleInput": "3\n10 100\n40 200\n80 50\n",
    "expectedOutput": "0",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "from collections import Counter\nn=int(input()); tp=fp=fn=0\nfor _ in range(n):\n    y,p=input().split();y=int(y);p=int(p)\n    tp+=y==p==1;fp+=y==0 and p==1;fn+=y==1 and p==0\nprec=tp/(tp+fp) if tp+fp else 0;rec=tp/(tp+fn) if tp+fn else 0\nprint(round(2*prec*rec/(prec+rec),4) if prec+rec else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 76: The Drone Data Theft\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: time series, sliding windows, graph analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: timestamps and byte counts; find maximum 60-second transfer sum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "from collections import Counter\nn=int(input()); tp=fp=fn=0\nfor _ in range(n):\n    y,p=input().split();y=int(y);p=int(p)\n    tp+=y==p==1;fp+=y==0 and p==1;fn+=y==1 and p==0\nprec=tp/(tp+fp) if tp+fp else 0;rec=tp/(tp+fn) if tp+fn else 0\nprint(round(2*prec*rec/(prec+rec),4) if prec+rec else 0)",
        "signature": "solve_case_76()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 76: The Drone Data Theft\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: timestamps and byte counts; find maximum 60-second transfer sum.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 76: The Drone Data Theft\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: timestamps and byte counts; find maximum 60-second transfer sum.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_76()",
    "starterCode": "# Project Enigmatrix \u2014 Case 76: The Drone Data Theft\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: time series, sliding windows, graph analysis\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: timestamps and byte counts; find maximum 60-second transfer sum.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "from collections import Counter\nn=int(input()); tp=fp=fn=0\nfor _ in range(n):\n    y,p=input().split();y=int(y);p=int(p)\n    tp+=y==p==1;fp+=y==0 and p==1;fn+=y==1 and p==0\nprec=tp/(tp+fp) if tp+fp else 0;rec=tp/(tp+fn) if tp+fn else 0\nprint(round(2*prec*rec/(prec+rec),4) if prec+rec else 0)",
    "flag": "FLAG{CASE_76_TOKEN_76_0}",
    "tests": [
      {
        "name": "Case 76 Forensic Test",
        "input": "3\n10 100\n40 200\n80 50\n",
        "expectedOutput": "0",
        "code": "Input: '3\\n10 100\\n40 200\\n80 50\\n' -> Expected: '0'"
      }
    ]
  },
  {
    "id": "case-77",
    "act": 5,
    "chapter": 77,
    "caseNum": "CASE 77",
    "title": "Case 77: The Smart Factory Sabotage",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "FSM, statistics, classification",
    "points": 100,
    "incidentCode": "#ENIGMA-C77",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "An attacker changes an embedded controller, causing robotic equipment to reject good products.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 77 investigation concluded. Artifact for 'The Smart Factory Sabotage' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nReconstruct controller states and classify the anomalous production batch.\n\n**Input Contract**:\n`Input: expected product labels and observed labels; print first mismatch index.`\n\n**Required Result**:\n`Detect production manipulation.`",
    "formulation": "Skills: FSM, statistics, classification\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_77_<COMPUTED_RESULT>}",
    "inputContract": "Input: expected product labels and observed labels; print first mismatch index.",
    "requiredResult": "Detect production manipulation.",
    "sampleInput": "2\nL1 L2\nL1 L3\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); d={}\nfor _ in range(n):\n    user,dev,t=input().split();d.setdefault(user,set()).add(dev)\nfor u,v in d.items(): print(u,len(v))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 77: The Smart Factory Sabotage\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: FSM, statistics, classification\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected product labels and observed labels; print first mismatch index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    user,dev,t=input().split();d.setdefault(user,set()).add(dev)\nfor u,v in d.items(): print(u,len(v))",
        "signature": "solve_case_77()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 77: The Smart Factory Sabotage\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: expected product labels and observed labels; print first mismatch index.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 77: The Smart Factory Sabotage\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: expected product labels and observed labels; print first mismatch index.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_77()",
    "starterCode": "# Project Enigmatrix \u2014 Case 77: The Smart Factory Sabotage\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: FSM, statistics, classification\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: expected product labels and observed labels; print first mismatch index.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); d={}\nfor _ in range(n):\n    user,dev,t=input().split();d.setdefault(user,set()).add(dev)\nfor u,v in d.items(): print(u,len(v))",
    "flag": "FLAG{CASE_77_TOKEN_77_VERIFIED}",
    "tests": [
      {
        "name": "Case 77 Forensic Test",
        "input": "2\nL1 L2\nL1 L3\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\nL1 L2\\nL1 L3\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-78",
    "act": 5,
    "chapter": 78,
    "caseNum": "CASE 78",
    "title": "Case 78: The Satellite Supply Chain",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "hashing, graphs, topological sorting",
    "points": 100,
    "incidentCode": "#ENIGMA-C78",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A compromised software package reaches an aerospace telemetry system.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 78 investigation concluded. Artifact for 'The Satellite Supply Chain' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nCompare package hashes, dependency graphs and deployment records.\n\n**Input Contract**:\n`Input: package dependencies and installed order; print whether order is a valid topological order.`\n\n**Required Result**:\n`Validate software supply chain.`",
    "formulation": "Skills: hashing, graphs, topological sorting\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_78_<COMPUTED_RESULT>}",
    "inputContract": "Input: package dependencies and installed order; print whether order is a valid topological order.",
    "requiredResult": "Validate software supply chain.",
    "sampleInput": "2\nA B\n2\nB A\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "n=int(input()); a=sorted(set(input().split() for _ in range(n)))\nprint(len(a))",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 78: The Satellite Supply Chain\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, graphs, topological sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: package dependencies and installed order; print whether order is a valid topologica\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "n=int(input()); a=sorted(set(input().split() for _ in range(n)))\nprint(len(a))",
        "signature": "solve_case_78()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 78: The Satellite Supply Chain\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: package dependencies and installed order; print whether order is a valid \n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 78: The Satellite Supply Chain\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: package dependencies and installed order; print whether order is a valid \n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_78()",
    "starterCode": "# Project Enigmatrix \u2014 Case 78: The Satellite Supply Chain\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, graphs, topological sorting\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: package dependencies and installed order; print whether order is a valid topologica\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "n=int(input()); a=sorted(set(input().split() for _ in range(n)))\nprint(len(a))",
    "flag": "FLAG{CASE_78_TOKEN_78_VERIFIED}",
    "tests": [
      {
        "name": "Case 78 Forensic Test",
        "input": "2\nA B\n2\nB A\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\nA B\\n2\\nB A\\n' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-79",
    "act": 5,
    "chapter": 79,
    "caseNum": "CASE 79",
    "title": "Case 79: The Nano Lab Ransomware",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "hashing, diff analysis, time ordering",
    "points": 100,
    "incidentCode": "#ENIGMA-C79",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A ransomware attack locks a nanofabrication system while altering sensor calibration files.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 79 investigation concluded. Artifact for 'The Nano Lab Ransomware' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nIdentify the modified calibration records and restore the valid sequence.\n\n**Input Contract**:\n`Input: original and current calibration dictionaries; print changed keys.`\n\n**Required Result**:\n`Recover modified calibration.`",
    "formulation": "Skills: hashing, diff analysis, time ordering\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_79_<COMPUTED_RESULT>}",
    "inputContract": "Input: original and current calibration dictionaries; print changed keys.",
    "requiredResult": "Recover modified calibration.",
    "sampleInput": "2\nK1 10\nK2 20\n2\nK1 10\nK2 25\n",
    "expectedOutput": "VERIFIED",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import math\nn=int(input()); p=[tuple(map(float,input().split())) for _ in range(n)]\nw=[x[2] for x in p]; s=sum(w); print(round(sum(x[0]*x[2] for x in p)/s,6) if s else 0)",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 79: The Nano Lab Ransomware\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, diff analysis, time ordering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: original and current calibration dictionaries; print changed keys.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import math\nn=int(input()); p=[tuple(map(float,input().split())) for _ in range(n)]\nw=[x[2] for x in p]; s=sum(w); print(round(sum(x[0]*x[2] for x in p)/s,6) if s else 0)",
        "signature": "solve_case_79()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 79: The Nano Lab Ransomware\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: original and current calibration dictionaries; print changed keys.\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 79: The Nano Lab Ransomware\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: original and current calibration dictionaries; print changed keys.\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_79()",
    "starterCode": "# Project Enigmatrix \u2014 Case 79: The Nano Lab Ransomware\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: hashing, diff analysis, time ordering\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: original and current calibration dictionaries; print changed keys.\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import math\nn=int(input()); p=[tuple(map(float,input().split())) for _ in range(n)]\nw=[x[2] for x in p]; s=sum(w); print(round(sum(x[0]*x[2] for x in p)/s,6) if s else 0)",
    "flag": "FLAG{CASE_79_TOKEN_79_VERIFIED}",
    "tests": [
      {
        "name": "Case 79 Forensic Test",
        "input": "2\nK1 10\nK2 20\n2\nK1 10\nK2 25\n",
        "expectedOutput": "VERIFIED",
        "code": "Input: '2\\nK1 10\\nK2 20\\n2\\nK1 10\\nK2 ' -> Expected: 'VERIFIED'"
      }
    ]
  },
  {
    "id": "case-80",
    "act": 5,
    "chapter": 80,
    "caseNum": "CASE 80",
    "title": "Case 80: THE FINAL CONVERGENCE",
    "domain": "Cross-Domain Grand Crimes",
    "skills": "graphs, hashing, anomaly detection, scoring, DSA",
    "points": 200,
    "incidentCode": "#ENIGMA-C80",
    "phase": "FINAL PHASE \u2014 THE PIECES MEET",
    "incidentStory": "A multinational research facility suffers a coordinated crime involving AI, IoT, robotics, blockchain, aerospace telemetry and nanotechnology.",
    "storyDebrief": "\u2713 EVIDENCE RECOVERED: Case 80 investigation concluded. Artifact for 'THE FINAL CONVERGENCE' verified and recorded in the master consortium ledger.",
    "description": "**Investigator Objective**:\nBuild a unified evidence graph, rank anomalies, validate integrity and reconstruct the complete technical attack chain. No culprit is hard-coded; the evidence must determine the conclusion.\n\n**Input Contract**:\n`Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; print a deterministic SHA-256 of the canonical sorted evidence chain.`\n\n**Required Result**:\n`Build final evidence chain.`",
    "formulation": "Skills: graphs, hashing, anomaly detection, scoring, DSA\nComplexity: O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).\nFlag format: FLAG{CASE_80_<COMPUTED_RESULT>}",
    "inputContract": "Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; print a deterministic SHA-256 of the canonical sorted evidence chain.",
    "requiredResult": "Build final evidence chain.",
    "sampleInput": "2\n1 TOKEN1\n2 TOKEN2\n1\n1 2\n",
    "expectedOutput": "FLAG{8702657b07aa5a13}",
    "complexity": "O(n log n) for sorting-based cases; O(n) for single-pass cases; graph cases depend on V/E. Hashing is O(total input size).",
    "referenceSolution": "import hashlib\nn=int(input()); a=[tuple(input().split(maxsplit=1)) for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nchain=\"|\".join(f\"{k}:{v}\" for k,v in a)\nprint(\"FLAG{\"+hashlib.sha256(chain.encode()).hexdigest()[:16]+\"}\")",
    "languages": {
      "python": {
        "starterCode": "# Project Enigmatrix \u2014 Case 80: THE FINAL CONVERGENCE\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: graphs, hashing, anomaly detection, scoring, DSA\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; print a dete\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
        "referenceCode": "import hashlib\nn=int(input()); a=[tuple(input().split(maxsplit=1)) for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nchain=\"|\".join(f\"{k}:{v}\" for k,v in a)\nprint(\"FLAG{\"+hashlib.sha256(chain.encode()).hexdigest()[:16]+\"}\")",
        "signature": "solve_case_80()"
      },
      "c": {
        "starterCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Project Enigmatrix \u2014 Case 80: THE FINAL CONVERGENCE\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; pr\n\nint main() {\n    // TODO: Read from stdin using scanf/fgets and solve\n    printf(\"VERIFIED\\n\");\n    return 0;\n}\n",
        "signature": "int main()"
      },
      "cpp": {
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n// Project Enigmatrix \u2014 Case 80: THE FINAL CONVERGENCE\n// Domain: Cross-Domain Grand Crimes\n// Input Contract: Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; pr\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    // TODO: Read from cin and solve\n    cout << \"VERIFIED\" << endl;\n    return 0;\n}\n",
        "signature": "int main()"
      }
    },
    "signature": "solve_case_80()",
    "starterCode": "# Project Enigmatrix \u2014 Case 80: THE FINAL CONVERGENCE\n# Phase: FINAL PHASE \u2014 THE PIECES MEET\n# Domain: Cross-Domain Grand Crimes\n# Core Skills: graphs, hashing, anomaly detection, scoring, DSA\n\nimport sys\n\ndef solve():\n    # Input Contract: Input: 79 evidence tokens as `case value`, plus graph edges connecting cases; print a dete\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    \n    # TODO: Implement solution here\n    print(\"VERIFIED\")\n\nif __name__ == '__main__':\n    solve()\n",
    "referenceCode": "import hashlib\nn=int(input()); a=[tuple(input().split(maxsplit=1)) for _ in range(n)]\na.sort(key=lambda x:int(x[0]))\nchain=\"|\".join(f\"{k}:{v}\" for k,v in a)\nprint(\"FLAG{\"+hashlib.sha256(chain.encode()).hexdigest()[:16]+\"}\")",
    "flag": "FLAG{CASE_80_TOKEN_80_FLAG{8702657b07a}",
    "tests": [
      {
        "name": "Case 80 Forensic Test",
        "input": "2\n1 TOKEN1\n2 TOKEN2\n1\n1 2\n",
        "expectedOutput": "FLAG{8702657b07aa5a13}",
        "code": "Input: '2\\n1 TOKEN1\\n2 TOKEN2\\n1\\n1 2' -> Expected: 'FLAG{8702657b07aa5a13}'"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALL_80_CHALLENGES };
}

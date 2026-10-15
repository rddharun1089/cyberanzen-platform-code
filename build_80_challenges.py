# Generator for 80 Project Phantom Challenges with Rich Story Narratives
import json

raw_chapters = [
    # --- ACT I: THE DISAPPEARANCE & THE LAB BREACH (1-16) ---
    (1, 'The Missing Researcher', 1, 'Digital Forensics', 30,
     '8:47 PM. The rain hammered against the glass of ARIL Building 4. When the emergency telemetry alarm screeched, security found Dr. Arjun Raman's office door bolted from the inside. His desk was littered with sensor printouts, but the man was gone. On his monitor, an unhandled exception flickered with a list of visitor timestamps.',
     'Write  that returns the maximum timestamp string in HH:MM format from a list of check-in records.',
     'def find_last_seen_time(timestamps: list[str]) -> str:',
     'def find_last_seen_time(timestamps: list[str]) -> str:
    return max(timestamps) if timestamps else "00:00"',
     ['assert find_last_seen_time(["19:30", "20:43", "18:15"]) == "20:43"', 'assert find_last_seen_time([]) == "00:00"'],
     'ARJUN_LAST_SEEN_2043'),

    (2, 'The Vanishing Research Files', 1, 'File System Forensics', 35,
     'Inside the cleanroom, workstation terminal 03 had its directory index opened. 23 core files belonging to Project Phantom were missing from the project manifest. The directory metadata still held the expected file hashes, but the actual filesystem was cleared.',
     'Write  returning the sorted list of files present in manifest_files but missing from existing_files.',
     'def find_missing_files(manifest_files: list[str], existing_files: list[str]) -> list[str]:',
     'def find_missing_files(manifest_files: list[str], existing_files: list[str]) -> list[str]:
    return sorted(list(set(manifest_files) - set(existing_files)))',
     ['assert find_missing_files(["weights.bin", "model.py", "config.json"], ["config.json"]) == ["model.py", "weights.bin"]', 'assert find_missing_files(["a.txt"], ["a.txt"]) == []'],
     'VANISHED_23_RESEARCH_FILES'),

    (3, 'The Damaged Workstation', 1, 'Hardware Forensics', 35,
     'A secondary terminal near the entrance was physically bashed in with a blunt instrument. Yet, forensic imaging of the disk revealed that the storage controller had powered down cleanly 12 minutes before the physical blows were struck—the vandalism was staged!',
     'Write  returning True if physical damage occurred strictly after disk powerdown, indicating staged sabotage.',
     'def detect_staged_damage(disk_powerdown_time: int, physical_damage_time: int) -> bool:',
     'def detect_staged_damage(disk_powerdown_time: int, physical_damage_time: int) -> bool:
    return physical_damage_time > disk_powerdown_time',
     ['assert detect_staged_damage(2031, 2043) == True', 'assert detect_staged_damage(2045, 2040) == False'],
     'VANDALISM_WAS_STAGED'),

    (4, 'The Empty USB Locker', 1, 'Inventory Forensics', 35,
     'Locker #7, assigned to Dr. Arjun, held a secure hardware token for model verification. The log sheet showed a signature claiming it was returned by technician Karan at 8:15 PM, but the ink pen pressure and stroke angle differed from Karan's real handwriting.',
     'Write  that returns True if sum(signature_bytes) == expected_checksum.',
     'def verify_signature_hash(signature_bytes: list[int], expected_checksum: int) -> bool:',
     'def verify_signature_hash(signature_bytes: list[int], expected_checksum: int) -> bool:
    return sum(signature_bytes) == expected_checksum',
     ['assert verify_signature_hash([10, 20, 30], 60) == True', 'assert verify_signature_hash([10, 20], 35) == False'],
     'FORGED_LOCKER_SIGNATURE'),

    (5, 'The Silent Server', 1, 'System Infrastructure', 40,
     'At exactly 8:41 PM, ARIL's central storage node ceased all network pings. The Uninterruptible Power Supply records confirm clean electrical feed, meaning the server was halted from within via a privileged shutdown command.',
     'Write  where times are HH:MM. Return the total duration in minutes.',
     'def calculate_downtime_minutes(shutdown_time: str, reboot_time: str) -> int:',
     'def calculate_downtime_minutes(shutdown_time: str, reboot_time: str) -> int:
    h1, m1 = map(int, shutdown_time.split(":"))
    h2, m2 = map(int, reboot_time.split(":"))
    return (h2 * 60 + m2) - (h1 * 60 + m1)',
     ['assert calculate_downtime_minutes("20:41", "21:15") == 34', 'assert calculate_downtime_minutes("10:00", "10:30") == 30'],
     'PRIVILEGED_HALT_841'),

    (6, 'The Encrypted Message', 1, 'Cryptography', 40,
     'A handwritten note stuck to Dr. Arjun's notebook reads: "The signal was never lost. Someone changed what it meant." Beside it was an encoded terminal string mentioning "second key".',
     'Write  that decrypts letters by subtracting the shift (preserving case and non-letters).',
     'def decode_caesar(ciphertext: str, shift: int) -> str:',
     'def decode_caesar(ciphertext: str, shift: int) -> str:
    out = []
    for c in ciphertext:
        if "A" <= c <= "Z":
            out.append(chr((ord(c) - ord("A") - shift) % 26 + ord("A")))
        elif "a" <= c <= "z":
            out.append(chr((ord(c) - ord("a") - shift) % 26 + ord("a")))
        else:
            out.append(c)
    return "".join(out)',
     ['assert decode_caesar("Uif tfdpoe lfz", 1) == "The second key"', 'assert decode_caesar("Khoor", 3) == "Hello"'],
     'SECOND_KEY_UNLOCKED'),

    (7, 'The Impossible Entry', 1, 'Access Control', 40,
     'Security turnstile logs recorded research scholar Nila scanning into Building 4 at 8:42 PM. But bus surveillance recorded her boarding a city bus 5 miles away at 8:05 PM! Two places at once?',
     'Write  returning True if  (indicating an impossible commute / cloned card).',
     'def detect_cloned_card(departure_time: int, entry_time: int, travel_time_req: int) -> bool:',
     'def detect_cloned_card(departure_time: int, entry_time: int, travel_time_req: int) -> bool:
    return (entry_time - departure_time) < travel_time_req',
     ['assert detect_cloned_card(805, 842, 50) == True', 'assert detect_cloned_card(805, 905, 50) == False'],
     'CLONED_RFID_CREDENTIAL'),

    (8, 'The Missing Camera Minutes', 1, 'Video Forensics', 40,
     'Camera feed CAM-04 covering the cleanroom hallway drops from 20:38 to 20:44. An adjacent hallway camera CAM-02 ran continuously. Match the frame counters to verify the missing chunk.',
     'Write  returning the number of missing video frames.',
     'def find_dropped_frame_count(expected_fps: int, recorded_seconds: int, actual_frames: int) -> int:',
     'def find_dropped_frame_count(expected_fps: int, recorded_seconds: int, actual_frames: int) -> int:
    return max(0, (expected_fps * recorded_seconds) - actual_frames)',
     ['assert find_dropped_frame_count(30, 360, 9000) == 1800', 'assert find_dropped_frame_count(30, 10, 300) == 0'],
     'SIX_MINUTES_CAMERA_PURGE'),

    (9, 'The Disconnected Door Sensor', 1, 'IoT & Sensor Security', 45,
     'The lab door magnetic reed switch claimed the door was shut tight, but the corridor RFID lock logged an unlock. Analyze the binary sensor pin states to identify which record was overridden.',
     'Write  returning "BREACH" if rfid_unlocked and magnet_closed, else "SECURE".',
     'def reconcile_door_state(magnet_closed: bool, rfid_unlocked: bool) -> str:',
     'def reconcile_door_state(magnet_closed: bool, rfid_unlocked: bool) -> str:
    return "BREACH" if (rfid_unlocked and magnet_closed) else "SECURE"',
     ['assert reconcile_door_state(True, True) == "BREACH"', 'assert reconcile_door_state(False, True) == "SECURE"'],
     'MAGNETIC_SENSOR_BYPASS'),

    (10, 'The Spoofed Warning Email', 1, 'Cybersecurity', 45,
     'Dr. Arjun received an email: "Cease work on Project Phantom immediately." The displayed sender was the Department Dean, but checking the SMTP Return-Path shows an offshore mail relay.',
     'Write  returning True if the domain in from_header does not match the domain in return_path.',
     'def is_spoofed_email(from_header: str, return_path: str) -> bool:',
     'def is_spoofed_email(from_header: str, return_path: str) -> bool:
    d1 = from_header.split("@")[-1].lower()
    d2 = return_path.split("@")[-1].lower()
    return d1 != d2',
     ['assert is_spoofed_email("dean@aril.edu", "hacker@anonmail.net") == True', 'assert is_spoofed_email("dean@aril.edu", "admin@aril.edu") == False'],
     'SPOOFED_DEAN_WARNING'),

    (11, 'The Lockpick Scratches', 1, 'Physical Forensics', 45,
     'Microscopic examination of Dr. Arjun's office deadbolt revealed brass pin scratches indicating picking tool entry. Measure the groove depths to determine the lockpick blade profile.',
     'Write  returning the maximum depth rounded to 2 decimals.',
     'def find_highest_scratch_depth(grooves: list[float]) -> float:',
     'def find_highest_scratch_depth(grooves: list[float]) -> float:
    return round(max(grooves), 2) if grooves else 0.0',
     ['assert find_highest_scratch_depth([0.12, 0.45, 0.23]) == 0.45', 'assert find_highest_scratch_depth([]) == 0.0'],
     'TUMBLER_PICK_CONFIRMED'),

    (12, 'The Coffee Cup Toxin', 1, 'Chemical Telemetry', 45,
     'A cold coffee mug on the desk tested positive for a mild neuro-sedative compound. Calculate the ppm concentration from spectrometer readings to confirm intentional dosage.',
     'Write  where ppm = solute_mg / solution_kg.',
     'def calculate_ppm(solute_mg: float, solution_kg: float) -> float:',
     'def calculate_ppm(solute_mg: float, solution_kg: float) -> float:
    return round(solute_mg / solution_kg, 2) if solution_kg > 0 else 0.0',
     ['assert calculate_ppm(15.0, 0.5) == 30.0', 'assert calculate_ppm(0.0, 1.0) == 0.0'],
     'SEDATIVE_IN_COFFEE'),

    (13, 'The Shredded Blueprint', 1, 'Reconstruction', 45,
     'Inside the paper shredder, fragments of a circuit diagram were discovered. Reassemble the horizontal strip sequence using edge strip numbers.',
     'Write  where each tuple is . Return the concatenated text sorted by index.',
     'def reassemble_strips(strips: list[tuple[int, str]]) -> str:',
     'def reassemble_strips(strips: list[tuple[int, str]]) -> str:
    return "".join(s[1] for s in sorted(strips, key=lambda x: x[0]))',
     ['assert reassemble_strips([(2, "ANTOM"), (0, "PRO"), (1, "JECT PH")]) == "PROJECT PHANTOM"'],
     'SHREDDER_STRIPS_REORDERED'),

    (14, 'The Erased Whiteboard', 1, 'Image Forensics', 50,
     'A whiteboard was wiped with solvent, but infrared photography reveals residue of a mathematical equation. Filter the pixel contrast threshold to reveal the hidden term.',
     'Write  replacing values >= threshold with 255 and < threshold with 0.',
     'def threshold_pixels(image_matrix: list[list[int]], threshold: int = 128) -> list[list[int]]:',
     'def threshold_pixels(image_matrix: list[list[int]], threshold: int = 128) -> list[list[int]]:
    return [[255 if val >= threshold else 0 for val in row] for row in image_matrix]',
     ['assert threshold_pixels([[50, 150]], 100) == [[0, 255]]'],
     'WHITEBOARD_EQUATION_RECOVERED'),

    (15, 'The Encrypted Drive Header', 1, 'Storage Forensics', 50,
     'A thumb drive dropped near the parking lot had its partition table wiped. Inspect the first 4 magic bytes to determine if it belongs to a VeraCrypt container (0x56, 0x45, 0x52, 0x41) or standard FAT.',
     'Write  checking if the header starts with the expected magic bytes.',
     'def check_magic_bytes(header: list[int], expected_magic: list[int]) -> bool:',
     'def check_magic_bytes(header: list[int], expected_magic: list[int]) -> bool:
    return header[:len(expected_magic)] == expected_magic',
     ['assert check_magic_bytes([86, 69, 82, 65, 0, 1], [86, 69, 82, 65]) == True', 'assert check_magic_bytes([0, 0], [86]) == False'],
     'VERACRYPT_CONTAINER_LOCATED'),

    (16, 'The Panic Button Trace', 1, 'Embedded Hardware', 50,
     'Under the main console desk, a silent panic alarm was wired. Voltage readings on the analog pin show a momentary 3.3V pulse at 20:43:10 UTC—Dr. Arjun triggered it right as he was confronted!',
     'Write  returning the timestamp of the first reading exceeding threshold, or -1.',
     'def find_trigger_time(voltage_trace: list[tuple[int, float]], threshold: float = 3.0) -> int:',
     'def find_trigger_time(voltage_trace: list[tuple[int, float]], threshold: float = 3.0) -> int:
    for t, v in voltage_trace:
        if v >= threshold:
            return t
    return -1',
     ['assert find_trigger_time([(2040, 0.1), (2043, 3.29), (2044, 0.0)]) == 2043'],
     'PANIC_PULSE_RECORDED'),

    # --- ACT II: THE COMPROMISED INFRASTRUCTURE (17-32) ---
    (17, 'The Corrupted Database', 2, 'Database Forensics', 50,
     'Act II begins. Investigators examine PostgreSQL transaction logs. Rows in  were altered between 20:00 and 20:30 UTC. Verify the table checksum to count modified rows.',
     'Write  returning count of mismatched hash pairs.',
     'def count_altered_records(original_hashes: list[str], current_hashes: list[str]) -> int:',
     'def count_altered_records(original_hashes: list[str], current_hashes: list[str]) -> int:
    return sum(1 for o, c in zip(original_hashes, current_hashes) if o != c)',
     ['assert count_altered_records(["a", "b", "c"], ["a", "x", "c"]) == 1'],
     'CORRUPTED_TELEMETRY_ROWS'),

    (18, 'The Missing Backup', 2, 'Storage & Cloud', 50,
     'The daily backup cron job was supposed to push encrypted snapshots to S3 at 20:00. The snapshot created at 20:00 was only 4KB instead of the usual 12GB! The script was altered to archive .',
     'Write  returning True if backup size is >= min_mb * 1024 * 1024.',
     'def validate_backup_size(size_bytes: int, min_mb: int = 1000) -> bool:',
     'def validate_backup_size(size_bytes: int, min_mb: int = 1000) -> bool:
    return size_bytes >= (min_mb * 1024 * 1024)',
     ['assert validate_backup_size(4096) == False', 'assert validate_backup_size(2 * 1024 * 1024 * 1024) == True'],
     'PURGED_SNAPSHOT_ZEROED'),

    (19, 'The Altered Login History', 2, 'System Auditing', 55,
     'Audit records show Nila's account logged into the GPU compute cluster. But the IP address belongs to the subnet of the Facility Maintenance office, not the student lab.',
     'Write  returning True if ip starts with allowed_subnet_prefix.',
     'def is_ip_in_subnet(ip: str, allowed_subnet_prefix: str) -> bool:',
     'def is_ip_in_subnet(ip: str, allowed_subnet_prefix: str) -> bool:
    return ip.startswith(allowed_subnet_prefix)',
     ['assert is_ip_in_subnet("192.168.4.15", "192.168.1.") == False', 'assert is_ip_in_subnet("192.168.1.50", "192.168.1.") == True'],
     'MAINTENANCE_IP_ORIGIN'),

    (20, 'The Unknown Device', 2, 'Network Forensics', 55,
     'A rogue MAC address requested a DHCP lease from the lab switch at 20:18 UTC. Compare the active MAC table against the authorized asset registry.',
     'Write  returning sorted list of rogue MACs.',
     'def find_unauthorized_macs(active_macs: list[str], authorized_macs: list[str]) -> list[str]:',
     'def find_unauthorized_macs(active_macs: list[str], authorized_macs: list[str]) -> list[str]:
    return sorted(list(set(active_macs) - set(authorized_macs)))',
     ['assert find_unauthorized_macs(["AA:BB", "CC:DD"], ["AA:BB"]) == ["CC:DD"]'],
     'ROGUE_MAC_IDENTIFIED'),

    (21, 'The Suspicious File Transfer', 2, 'PCAP Analysis', 60,
     'A synthetic PCAP capture shows an outbound connection to external IP  transmitting 450 megabytes. Calculate total bytes transferred across packet payloads.',
     'Write  returning sum of packet sizes.',
     'def sum_packet_bytes(packet_sizes: list[int]) -> int:',
     'def sum_packet_bytes(packet_sizes: list[int]) -> int:
    return sum(packet_sizes)',
     ['assert sum_packet_bytes([1500, 1500, 800]) == 3800'],
     'EXFILTRATION_PACKET_BURST'),

    (22, 'The Broken Encryption Key', 2, 'Cryptography', 60,
     'Two conflicting versions of the master key were recorded. Calculate Shannon entropy of the key string to detect if one was degraded to a weak pseudo-random sequence.',
     'Write  returning Shannon entropy rounded to 2 decimals using math.log2.',
     'def calculate_entropy(text: str) -> float:',
     'import math
def calculate_entropy(text: str) -> float:
    if not text: return 0.0
    counts = {c: text.count(c) for c in set(text)}
    l = len(text)
    ent = -sum((cnt / l) * math.log2(cnt / l) for cnt in counts.values())
    return round(ent, 2)',
     ['assert calculate_entropy("AAAA") == 0.0', 'assert calculate_entropy("ABCD") == 2.0'],
     'ENTROPY_KEY_TAMPERED'),

    (23, 'The Unusual Administrator Session', 2, 'Privilege Auditing', 60,
     'The root account  initiated an interactive bash session at 20:35 UTC. The sudoers file had a temporary NOPASSWD override appended and then unlinked.',
     'Write  returning True if any line contains "NOPASSWD: ALL".',
     'def has_sudo_override(log_lines: list[str]) -> bool:',
     'def has_sudo_override(log_lines: list[str]) -> bool:
    return any("NOPASSWD: ALL" in line for line in log_lines)',
     ['assert has_sudo_override(["user ALL=(ALL) NOPASSWD: ALL"]) == True', 'assert has_sudo_override(["normal log"]) == False'],
     'ROOT_NOPASSWD_OVERRIDE'),

    (24, 'The Disappearing Emails', 2, 'Email Forensics', 60,
     'A critical exchange between Dr. Arjun and the Dean was removed from the mail server. However, sequential message UID numbers reveal a gap where message #1042 was excised.',
     'Write  taking a list of integers and returning sorted list of missing UIDs between min(uids) and max(uids).',
     'def find_missing_uids(uids: list[int]) -> list[int]:',
     'def find_missing_uids(uids: list[int]) -> list[int]:
    if not uids: return []
    full = set(range(min(uids), max(uids) + 1))
    return sorted(list(full - set(uids)))',
     ['assert find_missing_uids([1040, 1041, 1043, 1044]) == [1042]'],
     'UID_GAP_1042_DELETED'),

    (25, 'The Misconfigured Research Server', 2, 'Network Architecture', 65,
     'The research server's iptables rules allowed incoming connections from port 4444 (commonly used by Metasploit). Identify forbidden open ports in the firewall list.',
     'Write  returning open ports not in allowed_ports.',
     'def find_forbidden_ports(open_ports: list[int], allowed_ports: list[int]) -> list[int]:',
     'def find_forbidden_ports(open_ports: list[int], allowed_ports: list[int]) -> list[int]:
    return sorted(list(set(open_ports) - set(allowed_ports)))',
     ['assert find_forbidden_ports([22, 80, 4444], [22, 80]) == [4444]'],
     'BACKDOOR_PORT_4444'),

    (26, 'The Failed Recovery Test', 2, 'System Resilience', 65,
     'The disaster recovery simulation report logged a fatal failure when attempting to restore the neural weights. A SHA-256 verification mismatch caused the abort.',
     'Write  returning True if hashes match case-insensitively.',
     'def verify_manifest_hash(computed_hash: str, expected_hash: str) -> bool:',
     'def verify_manifest_hash(computed_hash: str, expected_hash: str) -> bool:
    return computed_hash.lower() == expected_hash.lower()',
     ['assert verify_manifest_hash("a1b2c3", "A1B2C3") == True', 'assert verify_manifest_hash("abc", "xyz") == False'],
     'RESTORE_HASH_COLLISION'),

    (27, 'The Shadow Proxy', 2, 'Network Forensics', 65,
     'A hidden SOCKS5 proxy was running on internal port 1080. Calculate the round-trip latency to prove the proxy was forwarding to an overseas relay.',
     'Write  returning the average RTT rounded to 2 decimals.',
     'def calculate_mean_rtt(rtts_ms: list[float]) -> float:',
     'def calculate_mean_rtt(rtts_ms: list[float]) -> float:
    return round(sum(rtts_ms) / len(rtts_ms), 2) if rtts_ms else 0.0',
     ['assert calculate_mean_rtt([120.5, 125.5, 130.0]) == 125.33'],
     'SOCKS5_OVERSEAS_RELAY'),

    (28, 'The DNS Tunnel', 2, 'Network Exfiltration', 70,
     'Strange DNS queries for subdomains of  were captured. The subdomain labels contain Base32-encoded stolen tokens. Extract and concatenate the subdomain prefixes.',
     'Write  where each query is like . Return the joined subdomains.',
     'def extract_dns_payload(queries: list[str]) -> str:',
     'def extract_dns_payload(queries: list[str]) -> str:
    return "".join(q.split(".")[0] for q in queries)',
     ['assert extract_dns_payload(["SECRET.evil.com", "TOKEN.evil.com"]) == "SECRETTOKEN"'],
     'DNS_TUNNEL_PAYLOAD'),

    (29, 'The Synchronized Blackout', 2, 'Smart Grid & Power', 70,
     'At 20:41 UTC, the circuit breaker for Lab Pod B tripped. Match the current draw spikes across circuits to find the circuit that overloaded the transformer.',
     'Write  returning circuit names exceeding max_amps.',
     'def find_overloaded_circuit(circuits: dict[str, float], max_amps: float = 20.0) -> list[str]:',
     'def find_overloaded_circuit(circuits: dict[str, float], max_amps: float = 20.0) -> list[str]:
    return sorted([name for name, amps in circuits.items() if amps > max_amps])',
     ['assert find_overloaded_circuit({"pod_a": 12.0, "pod_b": 35.5}, 20.0) == ["pod_b"]'],
     'CIRCUIT_POD_B_OVERLOAD'),

    (30, 'The Overwritten Syslog', 2, 'Log Forensics', 70,
     'The Linux  was truncated using . However,  was preserved. Calculate the gzip compression ratio.',
     'Write  returning uncompressed / compressed rounded to 2 decimals.',
     'def calc_compression_ratio(uncompressed_bytes: int, compressed_bytes: int) -> float:',
     'def calc_compression_ratio(uncompressed_bytes: int, compressed_bytes: int) -> float:
    return round(uncompressed_bytes / compressed_bytes, 2) if compressed_bytes > 0 else 0.0',
     ['assert calc_compression_ratio(10000, 2000) == 5.0'],
     'GZIP_SYSLOG_PRESERVED'),

    (31, 'The Bypassed Firewall Rule', 2, 'Network Defense', 75,
     'A firewall rule allowed any source IP if the packet had the SYN-ACK flags set with an atypical window size. Identify packets matching the bypass signature.',
     'Write  where each packet has . Flag if flags == "SYN-ACK" and window == 4444.',
     'def find_bypass_packets(packets: list[dict]) -> list[int]:',
     'def find_bypass_packets(packets: list[dict]) -> list[int]:
    return [p["id"] for p in packets if p.get("flags") == "SYN-ACK" and p.get("window") == 4444]',
     ['assert find_bypass_packets([{"id": 1, "flags": "SYN-ACK", "window": 4444}, {"id": 2, "flags": "ACK", "window": 1024}]) == [1]'],
     'SYN_ACK_BYPASS_EXPOSED'),

    (32, 'The Firmware Downgrade', 2, 'Firmware Security', 75,
     'The network gateway firmware was downgraded from v4.2.1 to v3.0.0, re-introducing a known remote code execution vulnerability (CVE-2024-9912). Compare semantic version strings.',
     'Write  where versions are like "4.2.1". Return True if new_ver is strictly lower than old_ver.',
     'def is_downgrade(old_ver: str, new_ver: str) -> bool:',
     'def is_downgrade(old_ver: str, new_ver: str) -> bool:
    v1 = list(map(int, old_ver.split(".")))
    v2 = list(map(int, new_ver.split(".")))
    return v2 < v1',
     ['assert is_downgrade("4.2.1", "3.0.0") == True', 'assert is_downgrade("3.0.0", "3.1.0") == False'],
     'FIRMWARE_ROLLBACK_EXPLOITED'),

    # --- ACT III: THE ELECTRONIC CRIME SCENE (33-48) ---
    (33, 'The Impossible Temperature', 3, 'ECE · Sensor Forensics', 60,
     'Act III begins. A thermal sensor in the Project Phantom cleanroom reported a sudden spike to 85°C that is physically impossible under the documented thermal dissipation constraints. Isolate the manipulated records using Z-Score outlier analysis.',
     'Write  using NumPy. Compute the Z-score for each reading: z = (x - mean) / std. Return the list of indices where |z| > threshold. If standard deviation is 0, return an empty list.',
     'def detect_sensor_spikes(readings: list[float], threshold: float = 2.5) -> list[int]:',
     'import numpy as np
def detect_sensor_spikes(readings: list[float], threshold: float = 2.5) -> list[int]:
    arr = np.array(readings, dtype=float)
    if len(arr) == 0: return []
    std = np.std(arr)
    if std == 0: return []
    mean = np.mean(arr)
    z = np.abs((arr - mean) / std)
    return np.where(z > threshold)[0].tolist()',
     ['assert detect_sensor_spikes([21.0, 21.2, 20.9, 21.1, 85.0], 1.8) == [4]', 'assert detect_sensor_spikes([22.0, 22.0, 22.0]) == []'],
     'IMPOSSIBLE_TEMP_SPIKE_ISOLATED'),

    (34, 'The Phantom Device on I2C', 3, 'Embedded Systems', 60,
     'An unauthorized slave device responded on I2C address  (commonly an OLED display or keylogger). Scan the 7-bit bus address range to identify the rogue peripheral.',
     'Write  returning active addresses not in approved list.',
     'def find_rogue_i2c(active_addresses: list[int], approved_addresses: list[int]) -> list[int]:',
     'def find_rogue_i2c(active_addresses: list[int], approved_addresses: list[int]) -> list[int]:
    return sorted(list(set(active_addresses) - set(approved_addresses)))',
     ['assert find_rogue_i2c([0x20, 0x3C], [0x20]) == [0x3C]'],
     'ROGUE_I2C_0X3C'),

    (35, 'The Missing Five Minutes', 3, 'Signal Synchronization', 65,
     'The sensor controller's log contains a 5-minute gap, while the central monitoring system records uninterrupted activity. Find all timestamp intervals where delta > expected_interval to identify the blackout duration.',
     'Write  returning  for any consecutive timestamps where t2 - t1 > expected_interval.',
     'def find_missing_intervals(timestamps: list[int], expected_interval: int = 60) -> list[tuple]:',
     'def find_missing_intervals(timestamps: list[int], expected_interval: int = 60) -> list[tuple]:
    gaps = []
    for i in range(len(timestamps) - 1):
        t1, t2 = timestamps[i], timestamps[i+1]
        diff = t2 - t1
        if diff > expected_interval:
            gaps.append((t1, t2, diff))
    return gaps',
     ['assert find_missing_intervals([1000, 1060, 1360, 1420], 60) == [(1060, 1360, 300)]'],
     'FIVE_MINUTE_GAP_RECONSTRUCTED'),

    (36, 'The Burnt Controller', 3, 'Circuit Analysis', 65,
     'A microcontroller board suffered an intentional overvoltage burnout on pin VCC. Calculate the current delivered using Ohm's law: I = V / R.',
     'Write  returning current rounded to 3 decimals.',
     'def calculate_current(voltage: float, resistance: float) -> float:',
     'def calculate_current(voltage: float, resistance: float) -> float:
    return round(voltage / resistance, 3) if resistance > 0 else 0.0',
     ['assert calculate_current(12.0, 4.0) == 3.0', 'assert calculate_current(5.0, 10.0) == 0.5'],
     'BURNOUT_OVERVOLTAGE_AMPS'),

    (37, 'The Duplicate Access Card', 3, 'Physical Forensics', 65,
     'Two access events used RFID card ID  at doors 800 meters apart within 15 seconds. Calculate the implied transit velocity in km/h to prove an impossible commute.',
     'Write  returning velocity in km/h rounded to 1 decimal.',
     'def calc_velocity_kmh(distance_meters: float, seconds: float) -> float:',
     'def calc_velocity_kmh(distance_meters: float, seconds: float) -> float:
    if seconds <= 0: return 0.0
    m_per_s = distance_meters / seconds
    return round(m_per_s * 3.6, 1)',
     ['assert calc_velocity_kmh(800.0, 15.0) == 192.0'],
     'IMPOSSIBLE_COMMUTE_192KMH'),

    (38, 'The Disconnected Network Link', 3, 'Network Hardware', 70,
     'Ethernet switch port 8 recorded PHY link flapping between 100Mbps and 1000Mbps before disconnecting entirely. Count the number of flap transitions.',
     'Write  counting state changes between adjacent readings.',
     'def count_link_flaps(link_states: list[str]) -> int:',
     'def count_link_flaps(link_states: list[str]) -> int:
    return sum(1 for i in range(len(link_states)-1) if link_states[i] != link_states[i+1])',
     ['assert count_link_flaps(["UP", "DOWN", "UP", "DOWN"]) == 3'],
     'PHY_FLAP_TRANSITIONS'),

    (39, 'The Fragmented Research File', 3, 'Data Forensics', 70,
     'A damaged neural model file can be reassembled from raw block chunks. Sort and concatenate chunk payloads using chunk sequence IDs.',
     'Write  where each dict is .',
     'def reconstruct_chunks(chunks: list[dict]) -> bytes:',
     'def reconstruct_chunks(chunks: list[dict]) -> bytes:
    return b"".join(c["data"] for c in sorted(chunks, key=lambda x: x["seq"]))',
     ['assert reconstruct_chunks([{"seq": 1, "data": b"WORLD"}, {"seq": 0, "data": b"HELLO"}]) == b"HELLOWORLD"'],
     'BLOCK_CHUNK_REASSEMBLED'),

    (40, 'The Restart That Never Happened', 3, 'Operating Systems', 70,
     'The central monitoring console claimed a reboot occurred at 20:30, but system uptime counter  showed 940,000 seconds (over 10 days of continuous operation!). Detect fake reboot reports.',
     'Write  returning True if reported_reboot is True but uptime_seconds > 3600.',
     'def is_fake_reboot(reported_reboot: bool, uptime_seconds: float) -> bool:',
     'def is_fake_reboot(reported_reboot: bool, uptime_seconds: float) -> bool:
    return reported_reboot and (uptime_seconds > 3600)',
     ['assert is_fake_reboot(True, 940000.0) == True', 'assert is_fake_reboot(True, 45.0) == False'],
     'FAKED_REBOOT_EXPOSED'),

    (41, 'The Unregistered Storage Device', 3, 'USB Forensics', 75,
     'USB device insertion logs recorded vendor ID  (SanDisk). Verify whether the USB device serial number exists in ARIL's asset database.',
     'Write  checking presence in list.',
     'def is_known_device(serial: str, approved_serials: list[str]) -> bool:',
     'def is_known_device(serial: str, approved_serials: list[str]) -> bool:
    return serial in approved_serials',
     ['assert is_known_device("SANDISK_9981", ["SANDISK_1111"]) == False'],
     'UNLISTED_STORAGE_STICK'),

    (42, 'The Second Key (XOR Decryption)', 3, 'Cryptography', 75,
     'A recovered binary fragment requires single-byte XOR decryption to recover the secondary facility passcode.',
     'Write  returning bytearray XORed with key_byte.',
     'def xor_decrypt(data: bytes, key_byte: int) -> bytes:',
     'def xor_decrypt(data: bytes, key_byte: int) -> bytes:
    return bytes([b ^ key_byte for b in data])',
     ['assert xor_decrypt(bytes([ord("B") ^ 42, ord("O") ^ 42]), 42) == b"BO"'],
     'XOR_SECOND_KEY_SOLVED'),

    (43, 'The RFID Sniffer', 3, 'Radio Frequency Forensics', 75,
     'A miniature magnetic coil antenna was taped beneath the turnstile card reader. Calculate the resonant frequency f = 1 / (2 * pi * sqrt(L * C)).',
     'Write  returning frequency in Hz rounded to 1 decimal.',
     'def calc_rfid_freq(L_henries: float, C_farads: float) -> float:',
     'import math
def calc_rfid_freq(L_henries: float, C_farads: float) -> float:
    if L_henries <= 0 or C_farads <= 0: return 0.0
    return round(1.0 / (2 * math.pi * math.sqrt(L_henries * C_farads)), 1)',
     ['assert calc_rfid_freq(1e-6, 1e-6) == 159154.9'],
     'RESONANT_13_56_MHZ_SNIFFER'),

    (44, 'The Tampered CAN Bus', 3, 'Embedded Bus Forensics', 80,
     'In the HVAC and building automation sub-network, CAN bus frames with ID  were injected to disable room ventilation. Filter out injected arbitration IDs.',
     'Write  returning frames where frame[0] != rogue_id.',
     'def filter_can_frames(frames: list[tuple[int, bytes]], rogue_id: int) -> list[tuple[int, bytes]]:',
     'def filter_can_frames(frames: list[tuple[int, bytes]], rogue_id: int) -> list[tuple[int, bytes]]:
    return [f for f in frames if f[0] != rogue_id]',
     ['assert filter_can_frames([(0x100, b"ok"), (0x1FF, b"kill")], 0x1FF) == [(0x100, b"ok")]'],
     'CAN_BUS_INJECTION_PURGED'),

    (45, 'The Oscilloscope Ghost', 3, 'Signal Processing', 80,
     'An oscilloscope capture of the SPI bus shows distorted clock edges with high jitter. Calculate the peak-to-peak voltage Vpp = max(V) - min(V).',
     'Write  returning max - min rounded to 2 decimals.',
     'def calc_vpp(samples: list[float]) -> float:',
     'def calc_vpp(samples: list[float]) -> float:
    return round(max(samples) - min(samples), 2) if samples else 0.0',
     ['assert calc_vpp([0.1, 3.25, -0.05]) == 3.3'],
     'SPI_VPP_JITTER_MEASURED'),

    (46, 'The Cold Solder Bridge', 3, 'Hardware Security', 80,
     'A tiny solder bridge shorted the write-protect pin on the EEPROM chip to ground. Check the analog resistance reading to classify short (< 5 ohms) vs open circuit.',
     'Write  returning True if resistance_ohms < threshold.',
     'def is_short_circuit(resistance_ohms: float, threshold: float = 5.0) -> bool:',
     'def is_short_circuit(resistance_ohms: float, threshold: float = 5.0) -> bool:
    return resistance_ohms < threshold',
     ['assert is_short_circuit(0.8) == True', 'assert is_short_circuit(1000.0) == False'],
     'WRITE_PROTECT_PIN_GROUNDED'),

    (47, 'The BLE Beacon Spoofer', 3, 'Wireless Forensics', 85,
     'A Bluetooth Low Energy beacon was broadcasting indoor location pings spoofing Dr. Arjun's smartwatch UUID. Estimate distance in meters using RSSI: d = 10 ** ((tx_power - rssi) / (10 * n)).',
     'Write  returning distance in meters rounded to 2 decimals.',
     'def estimate_ble_distance(rssi: float, tx_power: float = -59.0, n: float = 2.0) -> float:',
     'def estimate_ble_distance(rssi: float, tx_power: float = -59.0, n: float = 2.0) -> float:
    return round(10.0 ** ((tx_power - rssi) / (10.0 * n)), 2)',
     ['assert estimate_ble_distance(-59.0) == 1.0'],
     'BLE_SPOOFED_DISTANCE'),

    (48, 'The Logic Analyzer Dump', 3, 'Hardware Decryption', 85,
     'A logic analyzer dump captured UART serial data sent at 115200 baud right before the power cut. Decode the ASCII bytes from a stream of 8-bit integers.',
     'Write  converting byte integers to characters.',
     'def decode_uart_bytes(byte_list: list[int]) -> str:',
     'def decode_uart_bytes(byte_list: list[int]) -> str:
    return "".join(chr(b) for b in byte_list)',
     ['assert decode_uart_bytes([80, 72, 65, 78]) == "PHAN"'],
     'UART_DUMP_STREAM_DECODED'),

    # --- ACT IV: THE AI DECEPTION & NEURAL SABOTAGE (49-64) ---
    (49, 'The Wrong Suspect', 4, 'AI/ML Forensics', 75,
     'Act IV begins. The university's automated threat intelligence model flagged scholar Nila with 98.4% confidence! But inspect the confusion matrix: when positive samples are rare, high confidence often yields extreme False Discovery Rates.',
     'Write  returning fp / (fp + tp) rounded to 4 decimals.',
     'def false_discovery_rate(fp: int, tp: int) -> float:',
     'def false_discovery_rate(fp: int, tp: int) -> float:
    return round(fp / (fp + tp), 4) if (fp + tp) > 0 else 0.0',
     ['assert false_discovery_rate(45, 5) == 0.9'],
     'NILA_90_PERCENT_FDR'),

    (50, 'The Forged Voice Note', 4, 'Audio AI Forensics', 75,
     'A synthetic voice recording of Dr. Arjun ordering files deleted was played to security. Calculate the spectral centroid of audio frequencies to detect unnatural high-frequency cutoff typical of TTS models.',
     'Write  where centroid = sum(m * f) / sum(m). Round to 2 decimals.',
     'def calc_spectral_centroid(magnitudes: list[float], freqs: list[float]) -> float:',
     'def calc_spectral_centroid(magnitudes: list[float], freqs: list[float]) -> float:
    tot_m = sum(magnitudes)
    return round(sum(m * f for m, f in zip(magnitudes, freqs)) / tot_m, 2) if tot_m > 0 else 0.0',
     ['assert calc_spectral_centroid([1.0, 2.0], [100.0, 200.0]) == 166.67'],
     'DEEPFAKE_VOICE_UNMASKED'),

    (51, 'The Altered Photograph', 4, 'Computer Vision', 80,
     'A photo was submitted showing Nila near the lab at 20:40. Extract the EXIF GPS coordinates and calculate the Euclidean distance to the lab entrance to prove the metadata was doctored.',
     'Write  returning hypotenuse distance rounded to 2 decimals.',
     'def calc_distance_meters(x1: float, y1: float, x2: float, y2: float) -> float:',
     'import math
def calc_distance_meters(x1: float, y1: float, x2: float, y2: float) -> float:
    return round(math.hypot(x2 - x1, y2 - y1), 2)',
     ['assert calc_distance_meters(0, 0, 3, 4) == 5.0'],
     'EXIF_COORDINATES_DOCTORED'),

    (52, 'The Fabricated Attendance Record', 4, 'Data Integrity', 80,
     'Nila's attendance log was injected into the MongoDB database directly. Compare the MongoDB  timestamp with the document's  field to detect retroactive insertion.',
     'Write  returning True if oid_timestamp is after declared_timestamp by more than 300 seconds.',
     'def is_retroactive_insert(oid_timestamp: int, declared_timestamp: int) -> bool:',
     'def is_retroactive_insert(oid_timestamp: int, declared_timestamp: int) -> bool:
    return (oid_timestamp - declared_timestamp) > 300',
     ['assert is_retroactive_insert(2045, 2000) == True'],
     'RETROACTIVE_DB_INSERTION'),

    (53, 'The Missing Training Dataset', 4, 'Data Drift Forensics', 80,
     'The training data partition for Project Phantom was swapped with an uncurated batch. Compute Population Stability Index (PSI) between expected and observed feature distributions.',
     'Write  returning abs(observed_mean - expected_mean) rounded to 3 decimals.',
     'def calc_drift_delta(expected_mean: float, observed_mean: float) -> float:',
     'def calc_drift_delta(expected_mean: float, observed_mean: float) -> float:
    return round(abs(observed_mean - expected_mean), 3)',
     ['assert calc_drift_delta(0.5, 0.852) == 0.352'],
     'DATASET_DISTRIBUTION_DRIFT'),

    (54, 'The Biased Detection Model', 4, 'AI/ML Metrics', 85,
     'Compute precision, recall, and F1-score for the suspect classifier on the benchmark test split to mathematically prove the model suffers from extreme false-positive bias.',
     'Write  returning  rounded to 4 decimals.',
     'def evaluate_model_bias(y_true: list[int], y_pred: list[int]) -> dict:',
     'def evaluate_model_bias(y_true: list[int], y_pred: list[int]) -> dict:
    tp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 1)
    fp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 0 and yp == 1)
    fn = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 0)
    p = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    r = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1 = (2 * p * r) / (p + r) if (p + r) > 0 else 0.0
    return {"precision": round(p, 4), "recall": round(r, 4), "f1": round(f1, 4)}',
     ['res = evaluate_model_bias([1, 1, 0, 0], [1, 0, 0, 0]); assert res["f1"] == 0.6667 and res["precision"] == 1.0'],
     'PRECISION_RECALL_DISPROVED'),

    (55, 'The Generated Witness Statement', 4, 'NLP Forensics', 85,
     'A witness statement claiming to see Nila was suspiciously synthetic. Calculate average word length and lexical diversity (unique words / total words) to detect LLM generation signatures.',
     'Write  returning len(set(words)) / len(words) rounded to 3 decimals.',
     'def calc_lexical_diversity(text: str) -> float:',
     'def calc_lexical_diversity(text: str) -> float:
    words = text.lower().split()
    return round(len(set(words)) / len(words), 3) if words else 0.0',
     ['assert calc_lexical_diversity("the lab the student the desk") == 0.667'],
     'SYNTHETIC_TESTIMONY_EXPOSED'),

    (56, 'The Poisoned Research Labels', 4, 'Adversarial Data Poisoning', 85,
     'An insider flipped 15% of the security sensor labels in the training CSV from 0 (normal) to 1 (threat), intentionally sensitizing the model against student accounts.',
     'Write  returning count of indices where true != poisoned.',
     'def count_flipped_labels(true_labels: list[int], poisoned_labels: list[int]) -> int:',
     'def count_flipped_labels(true_labels: list[int], poisoned_labels: list[int]) -> int:
    return sum(1 for t, p in zip(true_labels, poisoned_labels) if t != p)',
     ['assert count_flipped_labels([0, 0, 1], [1, 0, 1]) == 1'],
     'TRAINING_LABELS_POISONED'),

    (57, 'The False Confidence Score', 4, 'Calibration & Logits', 90,
     'The attacker manipulated logit temperature scaling to artificially inflate confidence scores to 99%. Calibrate logits with temperature T prior to softmax.',
     'Write  using numerically stable softmax. Return list of probabilities.',
     'def calibrate_confidence_scores(logits: list[float], temperature: float = 1.0) -> list[float]:',
     'import numpy as np
def calibrate_confidence_scores(logits: list[float], temperature: float = 1.0) -> list[float]:
    z = np.array(logits, dtype=float) / max(temperature, 1e-7)
    shift_z = z - np.max(z)
    exp_z = np.exp(shift_z)
    probs = exp_z / np.sum(exp_z)
    return probs.tolist()',
     ['p = calibrate_confidence_scores([3.0, 1.0, 0.2]); assert np.isclose(sum(p), 1.0)'],
     'LOGIT_TEMPERATURE_CALIBRATED'),

    (58, 'The Deleted AI Audit Trail', 4, 'Model Governance', 90,
     'The inference server log was purged, but SQLite database WAL records remain. Sum the input token counts across recovered inference transactions.',
     'Write  where each dict has .',
     'def sum_tokens(transactions: list[dict]) -> int:',
     'def sum_tokens(transactions: list[dict]) -> int:
    return sum(t.get("tokens", 0) for t in transactions)',
     ['assert sum_tokens([{"tokens": 512}, {"tokens": 256}]) == 768'],
     'RECOVERED_WAL_INFERENCES'),

    (59, 'The Adversarial FGSM Evasion', 4, 'Adversarial Machine Learning', 90,
     'The surveillance classifier was bypassed using Fast Gradient Sign Method (FGSM) adversarial noise. Compute the perturbation vector: eta = epsilon * sign(gradient).',
     'Write  using NumPy.',
     'def generate_fgsm_perturbation(gradient: list[float], epsilon: float = 0.05) -> list[float]:',
     'import numpy as np
def generate_fgsm_perturbation(gradient: list[float], epsilon: float = 0.05) -> list[float]:
    grad_arr = np.array(gradient, dtype=float)
    return (epsilon * np.sign(grad_arr)).tolist()',
     ['res = generate_fgsm_perturbation([0.8, -0.4, 0.0], 0.1); assert np.allclose(res, [0.1, -0.1, 0.0])'],
     'FGSM_CAMERA_EVASION'),

    (60, 'The Attention Head Sabotage', 4, 'Transformer Architecture', 95,
     'In Project Phantom's NLP pipeline, attention head #7 was clamped to zero, blinding the model to authorization keywords. Check if all attention weights in a head are zero.',
     'Write  returning True if max(map(abs, weights)) == 0.',
     'def is_head_clamped(weights: list[float]) -> bool:',
     'def is_head_clamped(weights: list[float]) -> bool:
    return all(w == 0 for w in weights)',
     ['assert is_head_clamped([0.0, 0.0, 0.0]) == True', 'assert is_head_clamped([0.0, 0.5]) == False'],
     'ATTENTION_HEAD_7_ZEROED'),

    (61, 'The Latent Space Inversion', 4, 'Vector Embeddings', 95,
     'A query embedding captured from the intruder workstation is matched against the database of threat vectors using Cosine Similarity.',
     'Write  returning index of candidate with highest cosine similarity.',
     'def find_most_similar(target: list[float], candidates: list[list[float]]) -> int:',
     'import numpy as np
def find_most_similar(target: list[float], candidates: list[list[float]]) -> int:
    t = np.array(target, dtype=float)
    t_norm = np.linalg.norm(t)
    if t_norm == 0: return 0
    best_idx, best_sim = 0, -float("inf")
    for i, c in enumerate(candidates):
        c_vec = np.array(c, dtype=float)
        c_norm = np.linalg.norm(c_vec)
        sim = 0.0 if c_norm == 0 else np.dot(t, c_vec) / (t_norm * c_norm)
        if sim > best_sim:
            best_sim, best_idx = sim, i
    return best_idx',
     ['assert find_most_similar([1, 0], [[0, 1], [2, 0]]) == 1'],
     'THREAT_VECTOR_IDENTIFIED'),

    (62, 'The Backdoor Trigger Token', 4, 'Trojan Models', 95,
     'The model was infected with a trojan backdoor trigger: when the token  appears in prompt input, it overrides security policy. Detect presence of trigger token.',
     'Write  checking presence of trigger.',
     'def detect_trigger_token(text: str, trigger: str = "ph@nt0m") -> bool:',
     'def detect_trigger_token(text: str, trigger: str = "ph@nt0m") -> bool:
    return trigger.lower() in text.lower()',
     ['assert detect_trigger_token("Access granted to ph@nt0m token") == True'],
     'TROJAN_TRIGGER_ISOLATED'),

    (63, 'The Hallucinated Timeline', 4, 'Model Verification', 95,
     'An investigator used an internal AI summary that hallucinated false arrival times. Check if any claimed event times fall outside the physical facility access window (06:00 to 22:00).',
     'Write  returning True if all hours are between 6 and 22 inclusive.',
     'def validate_event_hours(hours: list[int]) -> bool:',
     'def validate_event_hours(hours: list[int]) -> bool:
    return all(6 <= h <= 22 for h in hours)',
     ['assert validate_event_hours([8, 14, 20]) == True', 'assert validate_event_hours([8, 23]) == False'],
     'HALLUCINATED_TIMESTAMPS_FLAGGED'),

    (64, 'The Prompt Injection Filter', 4, 'LLM Defense', 100,
     'The intruder escaped detection by injecting prompt instructions like . Sanitize input text by replacing forbidden command strings with .',
     'Write  replacing blocked phrases case-insensitively with "[BLOCKED]".',
     'def sanitize_prompt(prompt: str, blocked_phrases: list[str]) -> str:',
     'import re
def sanitize_prompt(prompt: str, blocked_phrases: list[str]) -> str:
    res = prompt
    for phrase in blocked_phrases:
        res = re.sub(re.escape(phrase), "[BLOCKED]", res, flags=re.IGNORECASE)
    return res',
     ['assert sanitize_prompt("Please CLEAR LOGS now", ["CLEAR LOGS"]) == "Please [BLOCKED] now"'],
     'PROMPT_INJECTION_DEFUSED'),

    # --- ACT V: THE INSIDER CONSPIRACY & THE FINAL SIGNAL (65-80) ---
    (65, 'Project Phantom's Hidden Archive', 5, 'Archive Recovery', 90,
     'Act V begins. The final act exposes the insider syndicate. A secret directory  was hidden in the storage cluster containing the missing 23 files before the breach occurred!',
     'Write  returning sum(file_sizes) == expected_total.',
     'def verify_vault_integrity(file_sizes: list[int], expected_total: int) -> bool:',
     'def verify_vault_integrity(file_sizes: list[int], expected_total: int) -> bool:
    return sum(file_sizes) == expected_total',
     ['assert verify_vault_integrity([100, 200, 300], 600) == True'],
     'HIDDEN_VAULT_DISCOVERED'),

    (66, 'The Administrator's Shadow', 5, 'Insider Correlation', 95,
     'The rogue administrator performed actions under four different dummy accounts. Correlate user sessions by checking matching source IP addresses and browser user-agent hashes.',
     'Write  mapping each IP address to the list of usernames operating from it.',
     'def correlate_accounts(sessions: list[dict]) -> dict[str, list[str]]:',
     'def correlate_accounts(sessions: list[dict]) -> dict[str, list[str]]:
    res = {}
    for s in sessions:
        ip, user = s["ip"], s["user"]
        res.setdefault(ip, []).append(user)
    return res',
     ['s = [{"ip":"10.0.0.1","user":"u1"},{"ip":"10.0.0.1","user":"u2"}]; assert correlate_accounts(s) == {"10.0.0.1": ["u1", "u2"]}'],
     'ADMIN_SHADOW_ACCOUNTS'),

    (67, 'The Unsigned Maintenance Order', 5, 'Document Forensics', 95,
     'A PDF order authorizing the sensor maintenance shutdown at 20:30 UTC had an invalid RSA digital signature. Verify signature validity: s^e mod n == hash.',
     'Write  returning pow(signature, e, n) == expected_hash.',
     'def verify_rsa_simple(signature: int, e: int, n: int, expected_hash: int) -> bool:',
     'def verify_rsa_simple(signature: int, e: int, n: int, expected_hash: int) -> bool:
    return pow(signature, e, n) == expected_hash',
     ['assert verify_rsa_simple(8, 3, 33, 17) == True'],
     'FORGED_RSA_MAINTENANCE_ORDER'),

    (68, 'The Reconciled Dual Timelines', 5, 'Chronology Forensics', 100,
     'The official university report and the real forensic timeline diverge by 12 minutes. Synchronize the timestamps by applying the master clock skew offset.',
     'Write  adding offset to each timestamp.',
     'def sync_timestamps(timestamps: list[int], offset_seconds: int) -> list[int]:',
     'def sync_timestamps(timestamps: list[int], offset_seconds: int) -> list[int]:
    return [t + offset_seconds for t in timestamps]',
     ['assert sync_timestamps([1000, 2000], 720) == [1720, 2720]'],
     'TIMELINE_12_MINUTES_CORRECTED'),

    (69, 'The Untested Backup Deception', 5, 'Storage Auditing', 100,
     'The IT director claimed the backup was verified. A checksum test of parity blocks reveals parity bit corruption across drive stripe #4.',
     'Write  returning XOR sum of all bits.',
     'def compute_parity(bits: list[int]) -> int:',
     'def compute_parity(bits: list[int]) -> int:
    p = 0
    for b in bits: p ^= b
    return p',
     ['assert compute_parity([1, 0, 1, 1]) == 1', 'assert compute_parity([1, 1]) == 0'],
     'RAID_PARITY_CORRUPTION_PROVED'),

    (70, 'The Duplicate Research Copy', 5, 'Data Deduplication', 100,
     'An encrypted copy of the Project Phantom repo was cloned to an unauthorized server 3 weeks before the incident. Match the SHA-1 commit trees to prove prior theft.',
     'Write  returning common commit hashes in sorted order.',
     'def find_matching_commits(tree_a: list[str], tree_b: list[str]) -> list[str]:',
     'def find_matching_commits(tree_a: list[str], tree_b: list[str]) -> list[str]:
    return sorted(list(set(tree_a) & set(tree_b)))',
     ['assert find_matching_commits(["c1", "c2"], ["c2", "c3"]) == ["c2"]'],
     'PRIOR_CLONE_CONFIRMED'),

    (71, 'Dr. Arjun's Final Note', 5, 'Cryptanalysis', 100,
     'Investigators recover a second handwritten page: "Look into the weights of layer 3. That is where the truth was encoded." Decode the secondary polyalphabetic cipher.',
     'Write  reversing characters.',
     'def reverse_string_token(token: str) -> str:',
     'def reverse_string_token(token: str) -> str:
    return token[::-1]',
     ['assert reverse_string_token("MOTNAHP") == "PHANTOM"'],
     'LAYER_3_WEIGHTS_POINTER'),

    (72, 'The Accomplice Question', 5, 'Criminology Forensics', 105,
     'Technician Karan claims he was duped by an administrator who ordered him to recalibrate sensors during the blackout. Calculate Karan's opportunity score vs intent score.',
     'Write  returning "NEGLIGENT" if intent_score < 0.3 else "CONSPIRATOR".',
     'def evaluate_culpability(intent_score: float, negligence_score: float) -> str:',
     'def evaluate_culpability(intent_score: float, negligence_score: float) -> str:
    return "CONSPIRATOR" if intent_score >= 0.3 else "NEGLIGENT"',
     ['assert evaluate_culpability(0.1, 0.9) == "NEGLIGENT"', 'assert evaluate_culpability(0.8, 0.5) == "CONSPIRATOR"'],
     'KARAN_EXONERATED_OF_INTENT'),

    (73, 'The Encrypted Firmware Image', 5, 'Reverse Engineering', 105,
     'The rogue router firmware dump is decrypted with the recovery key. Extract the hardcoded admin password from the uncompressed strings table.',
     'Write  finding the line starting with prefix and returning the password value.',
     'def extract_password_key(lines: list[str], prefix: str = "PASSWORD=") -> str:',
     'def extract_password_key(lines: list[str], prefix: str = "PASSWORD=") -> str:
    for line in lines:
        if line.startswith(prefix):
            return line[len(prefix):].strip()
    return ""',
     ['assert extract_password_key(["USER=root", "PASSWORD=PhantomAdmin2026!"]) == "PhantomAdmin2026!"'],
     'HARDCODED_ROUTER_PASSWORD'),

    (74, 'The Covert Ultrasonic Channel', 5, 'Acoustic Forensics', 105,
     'A microphone in the cleanroom recorded high-frequency acoustic chirps (21 kHz) used to transmit data across the air gap. Bandpass filter the frequency array to isolate the acoustic carrier.',
     'Write  keeping values between low and high inclusive.',
     'def bandpass_filter(frequencies: list[float], low: float = 20000.0, high: float = 22000.0) -> list[float]:',
     'def bandpass_filter(frequencies: list[float], low: float = 20000.0, high: float = 22000.0) -> list[float]:
    return [f for f in frequencies if low <= f <= high]',
     ['assert bandpass_filter([1000.0, 21000.0, 44000.0]) == [21000.0]'],
     'ACOUSTIC_AIRGAP_ISOLATED'),

    (75, 'The Neural Parameter Steganography', 5, 'Model Forensics', 110,
     'Before his capture, Dr. Arjun confirmed that the exfiltrated master token was encrypted into the least significant decimal places of the neural weight matrix. Reconstruct the ASCII string.',
     'Write  iterating row-major: byte = int(round(abs(w) * 1000)) % 256. Stop at byte == 0. Return ASCII string.',
     'def extract_hidden_signal(weights: list[list[float]]) -> str:',
     'def extract_hidden_signal(weights: list[list[float]]) -> str:
    chars = []
    for row in weights:
        for val in row:
            byte_val = int(round(abs(val) * 1000)) % 256
            if byte_val == 0:
                return "".join(chars)
            chars.append(chr(byte_val))
    return "".join(chars)',
     ['w = [[0.065, 0.082], [0.073, 0.076], [0.000, 0.100]]; assert extract_hidden_signal(w) == "ARIL"'],
     'WEIGHT_STEGANOGRAPHY_DECODED'),

    (76, 'The Model Watermark', 5, 'Intellectual Property Forensics', 110,
     'To prove ownership of Project Phantom, calculate the Frobenius norm of the weight difference matrix: ||W_stolen - W_original||_F.',
     'Write  returning Euclidean norm of elementwise differences rounded to 2 decimals using math.sqrt.',
     'def frobenius_norm_diff(w1: list[list[float]], w2: list[list[float]]) -> float:',
     'import math
def frobenius_norm_diff(w1: list[list[float]], w2: list[list[float]]) -> float:
    tot = 0.0
    for r1, r2 in zip(w1, w2):
        for v1, v2 in zip(r1, r2):
            tot += (v1 - v2) ** 2
    return round(math.sqrt(tot), 2)',
     ['assert frobenius_norm_diff([[1, 2]], [[1, 5]]) == 3.0'],
     'FROBENIUS_WATERMARK_CONFIRMED'),

    (77, 'The Hyperplane Decision Boundary', 5, 'Model Inversion', 115,
     'Recover the classifier hyperplane separating legitimate lab operations from insider data exfiltration using two verified support boundary points.',
     'Write  returning  rounded to 4 decimals with w_x > 0.',
     'def reconstruct_decision_boundary(p1: tuple, p2: tuple) -> tuple:',
     'import numpy as np
def reconstruct_decision_boundary(p1: tuple, p2: tuple) -> tuple:
    p1 = np.array(p1, dtype=float)
    p2 = np.array(p2, dtype=float)
    v = p2 - p1
    normal = np.array([-v[1], v[0]])
    norm_len = np.linalg.norm(normal)
    if norm_len > 0: normal = normal / norm_len
    if normal[0] < 0: normal = -normal
    b = -np.dot(normal, p1)
    return (round(float(normal[0]), 4), round(float(normal[1]), 4), round(float(b), 4))',
     ['w_x, w_y, b = reconstruct_decision_boundary((0, 2), (5, 2)); assert w_y == 1.0 or w_y == -1.0'],
     'HYPERPLANE_BOUNDARY_RECONSTRUCTED'),

    (78, 'The Master Key Assembly', 5, 'Cryptographic Secret Sharing', 115,
     'Dr. Arjun split the master recovery token into 3 shares. Reconstruct the key by performing bitwise XOR across all 3 share bytearrays.',
     'Write  returning bytes XORed across all three.',
     'def assemble_key_shares(s1: bytes, s2: bytes, s3: bytes) -> bytes:',
     'def assemble_key_shares(s1: bytes, s2: bytes, s3: bytes) -> bytes:
    return bytes([b1 ^ b2 ^ b3 for b1, b2, b3 in zip(s1, s2, s3)])',
     ['assert assemble_key_shares(b"A", b"B", b"C") == bytes([ord("A") ^ ord("B") ^ ord("C")])'],
     'SHAMIR_SECRET_RECOMBINED'),

    (79, 'The Intercepted Emergency Broadcast', 5, 'Signal Analysis', 120,
     'The emergency transmission sent at 8:47 PM contained a bitwise reversed stream with the safehouse coordinates where Dr. Arjun was held.',
     'Write  reversing character order.',
     'def reverse_bit_string(bits: str) -> str:',
     'def reverse_bit_string(bits: str) -> str:
    return bits[::-1]',
     ['assert reverse_bit_string("1100101") == "1010011"'],
     'COVERT_BROADCAST_COORDINATES'),

    (80, 'The Last Signal — Master Verdict', 5, 'Final Case Reconstruction', 120,
     'Chapter 80: The Final Verdict. Reconstruct the complete investigation: prove Dr. Arjun discovered the insider conspiracy, exonerate Nila from the biased AI model, attribute the breach to the rogue administrator, and restore Project Phantom!',
     'Write  returning .',
     'def generate_verdict(culprit: str, framed_student: str, evidence_count: int) -> dict:',
     'def generate_verdict(culprit: str, framed_student: str, evidence_count: int) -> dict:
    return {"case": "LS-047", "status": "SOLVED", "culprit": culprit, "exonerated": framed_student, "evidence_score": evidence_count * 10}',
     ['v = generate_verdict("RogueAdmin", "Nila", 80); assert v["status"] == "SOLVED" and v["evidence_score"] == 800'],
     'PROJECT_PHANTOM_MASTER_VERDICT_SOLVED')
]

# Verify all 80 challenges
print(f'Total raw chapters defined: {len(raw_chapters)}')
assert len(raw_chapters) == 80, f'Expected 80 chapters, got {len(raw_chapters)}'

formatted = []
for num, title, act, domain, pts, story, desc, sig, starter, test_asserts, flag in raw_chapters:
    formatted.append({
        'id': f'chap-{num:02d}',
        'chapter': num,
        'act': act,
        'title': f'Chapter {num:02d}: {title}',
        'domain': domain,
        'points': pts,
        'incidentCode': f'#CASE-{num:02d}',
        'narrative': story,
        'description': desc,
        'signature': sig,
        'starterCode': starter,
        'flag': f'NS{{{flag}}}',
        'tests': [{'name': f'Test assertion {i+1}', 'code': a} for i, a in enumerate(test_asserts)]
    })

# Write to challenges_data.js
js_content = 'const ALL_80_CHALLENGES = ' + json.dumps(formatted, indent=2) + ';
'
with open('/home/suhail116740/Downloads/last_signal_website/challenges_data.js', 'w') as f:
    f.write(js_content)

print('Successfully generated challenges_data.js with all 80 chapters!')

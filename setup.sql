-- PROJECT ENIGMATRIX: Supabase Database Schema & Secure Scoring Engine
-- Case LS-047 — The Last Signal (80 Challenges Across Acts I - V)

create extension if not exists pgcrypto with schema extensions;

-- Teams Table
create table if not exists public.ns_teams (
  id uuid primary key default gen_random_uuid(),
  team_code text unique not null,
  team_name text not null,
  pin_hash text not null,
  created_at timestamptz not null default now()
);

-- Challenges Table (Acts 1 to 5)
create table if not exists public.ns_challenges (
  id text primary key,
  title text not null,
  act integer not null check(act between 1 and 5),
  domain text not null,
  points integer not null check(points > 0),
  active boolean not null default true
);

-- Challenge Secrets (Stores SHA-256 digests only; never plaintext flags)
create table if not exists public.ns_challenge_secrets (
  challenge_id text primary key references public.ns_challenges(id) on delete cascade,
  flag_sha256 text not null
);

-- Submissions Table
create table if not exists public.ns_submissions (
  id bigint generated always as identity primary key,
  team_id uuid not null references public.ns_teams(id),
  challenge_id text not null references public.ns_challenges(id),
  accepted_at timestamptz not null default clock_timestamp(),
  base_points integer not null,
  first_solve_bonus integer not null default 0,
  unique(team_id, challenge_id)
);

create index if not exists ns_submissions_time_idx on public.ns_submissions(challenge_id, accepted_at);

-- Row Level Security
alter table public.ns_teams enable row level security;
alter table public.ns_challenges enable row level security;
alter table public.ns_challenge_secrets enable row level security;
alter table public.ns_submissions enable row level security;

revoke all on public.ns_teams, public.ns_challenges, public.ns_challenge_secrets, public.ns_submissions from anon, authenticated;

-- Seed 30 Team Accounts
insert into public.ns_teams(team_code, team_name, pin_hash) values
('ENIGMA-01','Team Alpha', extensions.crypt('638174', extensions.gen_salt('bf'))),
('ENIGMA-02','Team Beta', extensions.crypt('294861', extensions.gen_salt('bf'))),
('ENIGMA-03','Team Gamma', extensions.crypt('751903', extensions.gen_salt('bf'))),
('ENIGMA-04','Team Delta', extensions.crypt('480276', extensions.gen_salt('bf'))),
('ENIGMA-05','Team Epsilon', extensions.crypt('916425', extensions.gen_salt('bf'))),
('ENIGMA-06','Team Zeta', extensions.crypt('357108', extensions.gen_salt('bf'))),
('ENIGMA-07','Team Eta', extensions.crypt('824639', extensions.gen_salt('bf'))),
('ENIGMA-08','Team Theta', extensions.crypt('165792', extensions.gen_salt('bf'))),
('ENIGMA-09','Team Iota', extensions.crypt('703581', extensions.gen_salt('bf'))),
('ENIGMA-10','Team Kappa', extensions.crypt('542967', extensions.gen_salt('bf'))),
('ENIGMA-11','Team Lambda', extensions.crypt('681340', extensions.gen_salt('bf'))),
('ENIGMA-12','Team Mu', extensions.crypt('239756', extensions.gen_salt('bf'))),
('ENIGMA-13','Team Nu', extensions.crypt('874125', extensions.gen_salt('bf'))),
('ENIGMA-14','Team Xi', extensions.crypt('406813', extensions.gen_salt('bf'))),
('ENIGMA-15','Team Omicron', extensions.crypt('193572', extensions.gen_salt('bf'))),
('ENIGMA-16','Team Pi', extensions.crypt('725904', extensions.gen_salt('bf'))),
('ENIGMA-17','Team Rho', extensions.crypt('358641', extensions.gen_salt('bf'))),
('ENIGMA-18','Team Sigma', extensions.crypt('962417', extensions.gen_salt('bf'))),
('ENIGMA-19','Team Tau', extensions.crypt('514803', extensions.gen_salt('bf'))),
('ENIGMA-20','Team Upsilon', extensions.crypt('847260', extensions.gen_salt('bf'))),
('ENIGMA-21','Team Phi', extensions.crypt('271694', extensions.gen_salt('bf'))),
('ENIGMA-22','Team Chi', extensions.crypt('639518', extensions.gen_salt('bf'))),
('ENIGMA-23','Team Psi', extensions.crypt('405729', extensions.gen_salt('bf'))),
('ENIGMA-24','Team Omega', extensions.crypt('782146', extensions.gen_salt('bf'))),
('ENIGMA-25','Team Cipher', extensions.crypt('156308', extensions.gen_salt('bf'))),
('ENIGMA-26','Team Synapse', extensions.crypt('920574', extensions.gen_salt('bf'))),
('ENIGMA-27','Team Matrix', extensions.crypt('347815', extensions.gen_salt('bf'))),
('ENIGMA-28','Team Nexus', extensions.crypt('608293', extensions.gen_salt('bf'))),
('ENIGMA-29','Team Quantum', extensions.crypt('435167', extensions.gen_salt('bf'))),
('ENIGMA-30','Team Sentinel', extensions.crypt('891652', extensions.gen_salt('bf')))
on conflict (team_code) do nothing;

-- Seed All 80 Project Enigmatrix Challenges
insert into public.ns_challenges(id, title, act, domain, points) values
('case-01', 'Case 01: The Dead Server', 1, 'Cybersecurity & Digital Forensics', 50),
('case-02', 'Case 02: Midnight Credential', 1, 'Cybersecurity & Digital Forensics', 50),
('case-03', 'Case 03: The Ransom Note', 1, 'Cybersecurity & Digital Forensics', 50),
('case-04', 'Case 04: The Silent Insider', 1, 'Cybersecurity & Digital Forensics', 50),
('case-05', 'Case 05: Packet 404', 1, 'Cybersecurity & Digital Forensics', 50),
('case-06', 'Case 06: The Deleted Evidence', 1, 'Cybersecurity & Digital Forensics', 50),
('case-07', 'Case 07: The False Admin', 1, 'Cybersecurity & Digital Forensics', 50),
('case-08', 'Case 08: The USB Exchange', 1, 'Cybersecurity & Digital Forensics', 50),
('case-09', 'Case 09: The Phantom DNS', 1, 'Cybersecurity & Digital Forensics', 50),
('case-10', 'Case 10: The Broken Backup', 1, 'Cybersecurity & Digital Forensics', 50),
('case-11', 'Case 11: The Insider Email', 1, 'Cybersecurity & Digital Forensics', 50),
('case-12', 'Case 12: The Hidden Archive', 1, 'Cybersecurity & Digital Forensics', 50),
('case-13', 'Case 13: The Forged Diagnosis', 1, 'AI / Machine Learning', 50),
('case-14', 'Case 14: The Poisoned Dataset', 1, 'AI / Machine Learning', 50),
('case-15', 'Case 15: The Biased Witness', 1, 'AI / Machine Learning', 50),
('case-16', 'Case 16: The Deepfake Alibi', 1, 'AI / Machine Learning', 50),
('case-17', 'Case 17: The Missing Model', 2, 'AI / Machine Learning', 50),
('case-18', 'Case 18: The Adversarial Portrait', 2, 'AI / Machine Learning', 50),
('case-19', 'Case 19: The Confidence Trap', 2, 'AI / Machine Learning', 50),
('case-20', 'Case 20: The Drifted Factory', 2, 'AI / Machine Learning', 50),
('case-21', 'Case 21: The Missing Features', 2, 'AI / Machine Learning', 75),
('case-22', 'Case 22: The Model Audit', 2, 'AI / Machine Learning', 75),
('case-23', 'Case 23: The Fraudulent Ledger', 2, 'Data Science', 75),
('case-24', 'Case 24: The Vanishing Shipment', 2, 'Data Science', 75),
('case-25', 'Case 25: The Missing Sensor Day', 2, 'Data Science', 75),
('case-26', 'Case 26: The Corrupt Survey', 2, 'Data Science', 75),
('case-27', 'Case 27: The Stockroom Pattern', 2, 'Data Science', 75),
('case-28', 'Case 28: The False Correlation', 2, 'Data Science', 75),
('case-29', 'Case 29: The Missing Cluster', 2, 'Data Science', 75),
('case-30', 'Case 30: The Last Five Minutes', 2, 'Data Science', 75),
('case-31', 'Case 31: The Burnt Controller', 2, 'ECE / Embedded Systems', 75),
('case-32', 'Case 32: The Oscillator Crime', 2, 'ECE / Embedded Systems', 75),
('case-33', 'Case 33: The Fake Sensor', 3, 'ECE / Embedded Systems', 75),
('case-34', 'Case 34: The PCB Switch', 3, 'ECE / Embedded Systems', 75),
('case-35', 'Case 35: The Voltage Drop', 3, 'ECE / Embedded Systems', 75),
('case-36', 'Case 36: The Hidden Interrupt', 3, 'ECE / Embedded Systems', 75),
('case-37', 'Case 37: The UART Secret', 3, 'ECE / Embedded Systems', 75),
('case-38', 'Case 38: The Failing Prototype', 3, 'ECE / Embedded Systems', 75),
('case-39', 'Case 39: The Smart Home Break-In', 3, 'IoT', 75),
('case-40', 'Case 40: The Water Plant Override', 3, 'IoT', 75),
('case-41', 'Case 41: The Cold-Chain Theft', 3, 'IoT', 75),
('case-42', 'Case 42: The Ghost Device', 3, 'IoT', 75),
('case-43', 'Case 43: The Factory Beacon', 3, 'IoT', 75),
('case-44', 'Case 44: The Smart Lock Replay', 3, 'IoT', 75),
('case-45', 'Case 45: The Drone Gateway', 3, 'IoT', 75),
('case-46', 'Case 46: The Sensor Swarm', 3, 'IoT', 75),
('case-47', 'Case 47: The Ghost Transfer', 3, 'Blockchain', 75),
('case-48', 'Case 48: The Double-Spend Window', 3, 'Blockchain', 75),
('case-49', 'Case 49: The Broken Smart Contract', 4, 'Blockchain', 75),
('case-50', 'Case 50: The Lost Private Key', 4, 'Blockchain', 75),
('case-51', 'Case 51: The Fake Block', 4, 'Blockchain', 100),
('case-52', 'Case 52: The DAO Vote', 4, 'Blockchain', 100),
('case-53', 'Case 53: The Token Laundering Trail', 4, 'Blockchain', 100),
('case-54', 'Case 54: The Merkle Witness', 4, 'Blockchain', 100),
('case-55', 'Case 55: Robot 17', 4, 'Robotics', 100),
('case-56', 'Case 56: The Surgical Arm', 4, 'Robotics', 100),
('case-57', 'Case 57: The Assembly Sabotage', 4, 'Robotics', 100),
('case-58', 'Case 58: The Swarm Collision', 4, 'Robotics', 100),
('case-59', 'Case 59: The Gripper Incident', 4, 'Robotics', 100),
('case-60', 'Case 60: The Navigation Loop', 4, 'Robotics', 100),
('case-61', 'Case 61: The Hidden Controller', 4, 'Robotics', 100),
('case-62', 'Case 62: The Satellite That Lied', 4, 'Aerospace', 100),
('case-63', 'Case 63: The Flight Recorder Gap', 4, 'Aerospace', 100),
('case-64', 'Case 64: The Rocket Valve', 4, 'Aerospace', 100),
('case-65', 'Case 65: The Navigation Drift', 5, 'Aerospace', 100),
('case-66', 'Case 66: The Radar Shadow', 5, 'Aerospace', 100),
('case-67', 'Case 67: The Docking Failure', 5, 'Aerospace', 100),
('case-68', 'Case 68: The Black Box Cipher', 5, 'Aerospace', 100),
('case-69', 'Case 69: Nanoparticle 47', 5, 'Nanotechnology', 100),
('case-70', 'Case 70: The Nano Sensor', 5, 'Nanotechnology', 100),
('case-71', 'Case 71: The Fabricated Experiment', 5, 'Nanotechnology', 100),
('case-72', 'Case 72: The Clean-Room Intrusion', 5, 'Nanotechnology', 100),
('case-73', 'Case 73: The Missing Sample', 5, 'Nanotechnology', 100),
('case-74', 'Case 74: The Autonomous Heist', 5, 'Cross-Domain Grand Crimes', 100),
('case-75', 'Case 75: The Blockchain Black Box', 5, 'Cross-Domain Grand Crimes', 100),
('case-76', 'Case 76: The Drone Data Theft', 5, 'Cross-Domain Grand Crimes', 100),
('case-77', 'Case 77: The Smart Factory Sabotage', 5, 'Cross-Domain Grand Crimes', 100),
('case-78', 'Case 78: The Satellite Supply Chain', 5, 'Cross-Domain Grand Crimes', 100),
('case-79', 'Case 79: The Nano Lab Ransomware', 5, 'Cross-Domain Grand Crimes', 100),
('case-80', 'Case 80: THE FINAL CONVERGENCE', 5, 'Cross-Domain Grand Crimes', 200)
on conflict (id) do update set title=excluded.title, act=excluded.act, domain=excluded.domain, points=excluded.points;

-- Seed All 80 Hashed Flag Secrets (SHA-256)
insert into public.ns_challenge_secrets(challenge_id, flag_sha256) values
('case-01', '9830a3d9ced440a988f29644c541ee2a870943f750a2c544b4b782576f9c90e8'),
('case-02', '4909713afc3008be61623d8896301ed94763a7c22d2639655e453b10c1e7c85e'),
('case-03', 'db5ca9b48afc6ca2b5f7f4d547e934873891dba167972b92f4103620ebc2d959'),
('case-04', '4ac05e6a0389b751542229124fea22415b962e93d62b468a96b41d8d04400660'),
('case-05', '9c8eb3bf1e40d87ed4520974302d1481587f4dc149d2753cd51dc73fc44c188f'),
('case-06', '28ba1834cb4db8a8e5c6c1420bfe136c811809b04fbafd94c305621ccdc1a326'),
('case-07', 'feb1f2c8d71638dd6b4570933056dbba0ae9b6d5ab7383931cbcfe406b42fe7a'),
('case-08', '882c9d96bc50a822cc47ffae5d775db85d47d6cabcc963eed736eda4b0e77f98'),
('case-09', '5d4ecc27bb7a41dff08505dd1d730d6364d69b7e4a0d30a05253fdebd2ae2bd3'),
('case-10', '0cc5b7da8525402a7ab702782c46bac37c5d1daac6918189913d546db11beda3'),
('case-11', '8b669ccfd5c462f04713630864e976f0f6c1157adabf53a231626524d6b72973'),
('case-12', '38aaf60ade77dec497a39c7ff993783263851a4f2a7d2bde7a2d06d1ccd3aae6'),
('case-13', '4e9d9388366c4473bd3ca1839ebb6f1eaf994a0d8f127ac3901f100b87592e92'),
('case-14', '7a7554ddea63c4d01a2378145cd6bb2332a3a3c9d92df97fcb8ccdfa744dee1c'),
('case-15', 'b2548a318148ee7a09bef4c406d0e2ca5c673a21cfa577379e4dd5550b080098'),
('case-16', '333eacd3cac066c2dbc43513df6bb5c4745e714d0d1470c94315c5f076686aa9'),
('case-17', '2598050761b571c4f9f83085ecdfa50f8fd9ad968e59fe3606fca8228448b428'),
('case-18', 'fcdeac40a51e5b0ab2ce86d4f56680a41cef6fd4c630c5799f52ae65c0ccf0bc'),
('case-19', 'acf3a9ec4812d6a6ae75a9a40035c044b7326ffe3dc61ba480b45f3f81e637ca'),
('case-20', '553c3f8a04cd7aafc3e628a5a9b5551738aa9409a8ba8d9c7304149175fe7edd'),
('case-21', 'ea67b3e718d0c8bd0af87aec5f3b2b629d4a51547b9eb74669385a95dc281413'),
('case-22', '25f61754545bc352b5c3666fa8a52b63c62ed235e418d0997be66f83c7693880'),
('case-23', '42a346b44a4c40a9df83b3c0a68c6c2dc8a3ac45936d95fdfe75bdf438ef5ac3'),
('case-24', 'a2331d7ab9f148f9029cffd27aa3ceba2bb3a6b7c21db5d8e884a052effb6238'),
('case-25', '38355ccae38325302c704fe0d597b17b57370d7ac22571e38eaaca1981eef5e1'),
('case-26', '557a17bd38235fe4110e37e55610a2d881b4df3c3bc43087a93a631e1be7a946'),
('case-27', 'a7c5ed97afb929487014632dd023a037a74dd556b2ef725dd0d21a60c9d5d126'),
('case-28', '56f7340d6683d081b826f323cf48fd42c49aa5f6b3aee584bde5195ae826927a'),
('case-29', 'f14dff471a41966ad568d39264fd71eb10ca962a90fb44aa4750b8e01ed04b22'),
('case-30', '0a57dc1ae227225a846efbf386546075dfb9cc8b510647dd5c1dac8d76fe9188'),
('case-31', 'fcea31dcf735f91c8a908163d996c83a82a1737f6a49efaa5b06eb544bd04ae7'),
('case-32', '8c191c8f8b36a6559ebf5e614db5195a2cf452b92e1e4118a9a1e36d890b95ed'),
('case-33', '5c0bbc9dfd6692cfc35988dd6b8778cf0fa26df26f4c466d54a87d499a037d79'),
('case-34', '9d8c27b7184e79f207499234b6e6bb0894391d9d34a7a791ab4aa1f3b9d45ffb'),
('case-35', 'e814fb3c7286688ebc13e1e9c8903f4e21155818bd39e63a9078b94d1f1f1449'),
('case-36', '204fbd400e106267576d3d686cfefb45867190c59b30837dfbee835ada1a8a50'),
('case-37', '4b038f49c834b2c617fce3195d515f80c8cebcc868d2f6d21a907e99deba3708'),
('case-38', '0dffbf971c5b302e1b5b4756d00568ea6c66d968c201cb90bd15dab15f22c354'),
('case-39', 'd58d603aaafd7ba9c3cb2c40d549eb611cd58fd9b04c235e3d45e81a3d763ee5'),
('case-40', '68523b669223aa2715064aeb446d1181613cf1f3063935aab1f953e124d1d47f'),
('case-41', '5f221af5f93d7ed6399e985ea26c7d40cdfcd2393c3a3b30503696c4ce7f5628'),
('case-42', 'e0acf2af437c6dbe8a51e6ef8b6b37de393f676e704b30c2311058812dfb5b39'),
('case-43', '0c7bc49f1aeb3f5bf4b374d538d62986bef6e095f571e84dfb18d492440a99db'),
('case-44', '027bf914014376dde22460e35bbf682c5c49671d6f2e5c1fff17fd3b91094540'),
('case-45', '895228e9212c30524c8c046797ea25f5ef1966da88e62b0f16ba2186745e7a0a'),
('case-46', 'c3a17bf0863f8ca6885e23aff23784df301a767b7128feec39039348d16cd3b5'),
('case-47', 'ce78946e5c0b7ac62d14486e9ef5af7ae71425b95e8d1ff95616163e06ba71cb'),
('case-48', '4b8829c4300717714a3dddca08362af0e266e0954a2bf375a02a4a6886e1928a'),
('case-49', 'b1ddf70fda902954cacb549f0e6d3d4ca1ff5c275ef20f764bff060c12c903d6'),
('case-50', '9a6bdfe8946961843e1146344ae27015a72c9175e74af2cddebb8f76d3bbebb3'),
('case-51', 'b829d3199b6103b717f8a33abe72a8ea625db936424e834c3b4d007db49bd785'),
('case-52', '6bcd4a3022706b1b3e9a51ed333f7c1d48c9083f55ea3f9fe9c4254e20a3f8d7'),
('case-53', 'ba9bb9b860b4fef128a32e0ee9851ee9dc0d93dc5913b86406c12ab71b93d81d'),
('case-54', 'ee9d58f42199ae930ee2a868a59acd7273e976565113bf350863e5a4171bb132'),
('case-55', '24057eb7e436873b02ebc963116b50d4a9521ed777d45a0940cea19a603d95ea'),
('case-56', '7ca1fce3b2d3c052163d1cf3498264df63e788c21a365efce38272ed73410a9d'),
('case-57', '85f784ed9571425849629d6b59212842033636e75a47b80800dd1b2052574579'),
('case-58', 'a055944ca3098301f70c4d6ce150e844c70f0520deb7416a18e4bd813fe7d674'),
('case-59', '196fec80c337be9534ed47ef18091e52c44bbb453fa2a03d42048c582596c9e2'),
('case-60', '3d2880332bd2021ce8c190e22a52f26dac5d4a8ca3db8b4fb0db7ea8fb98b083'),
('case-61', '2c2731654e93132080e75db91e21910c37f16f02e1b165f733f00026f471fbd9'),
('case-62', '5425ee7e753ba38feabcf165a91634b5cd1e5931f03ba1413e954211fe99e57b'),
('case-63', '05c61f765ff40357d11e47152325e1881f58fec0ed33881b8dd715b87fe15cba'),
('case-64', 'a0a013ef9ca3dd5d73d4977f445b6d499714d0474116223796ac2499a549d7f8'),
('case-65', '4207ff62fa0900b7fa95c17686f40cc18a54a78d288e74dae4c6ed4178e077f9'),
('case-66', '08109dec61223ce72b1bc35db225ee5b5f568293dc7a7947176bbc3a6e15f7dc'),
('case-67', '0177ce3436dee38d7d3f4afb44a2d60c8a7fa55cd3c193ffdc2a16a79e8cbe8a'),
('case-68', 'e6b324126639ae61360825d2a341b852b1539534323fb969674b320280506cc9'),
('case-69', '05162fc85028245788ce5dbe90945abe77ca33c3650e2df8e6c3cba46841b0ba'),
('case-70', 'c535ebc3131a69e1c5fb30756a0118b3c018c36a59b513fb01aba368bb812bbc'),
('case-71', '4eee3f1d0f4d7c6d2d468101656242374074727f29d535a59553347b87912d85'),
('case-72', '5989e55cc9db579356737666e6172bc94d14c018e1a135b299f9742c4e73883b'),
('case-73', '9d270d6dcdab087306e26f803cce985e22d0e4b39da4b3334e1159de9d3282a4'),
('case-74', '3dd43f83eb3e59118475993306dd15d4647190243d0d1667962ce5cd407f29c5'),
('case-75', '2ba36346904735847a00ee5d8d078880508a91e121b45f53257442754fb59b99'),
('case-76', 'ea94e580d04184233670c7a49299b39c1b911944582e4f0583d50e97085d1958'),
('case-77', '35d2e7a6374677c1da5ab9adc151522b24486230a21ca1ce3694c55fb254c723'),
('case-78', '0f1b9bd3bea08a3900205f58ae1a1c70ca6351c8841256be565397145ba9b299'),
('case-79', 'b265f420e03719961e4135745f85e5b21d4f06e7a0de9801a956f313bd84d0ce'),
('case-80', '5531ad7ddb8f38ada50458a1b37d2300fe0d1f393e946ecd7af5d047e375d6ef')
on conflict (challenge_id) do update set flag_sha256=excluded.flag_sha256;



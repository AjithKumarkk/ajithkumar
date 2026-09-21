export interface Project {
  title: string;
  category: 'industrial' | 'interactive' | 'personal';
  description: string;
  image: string;
  images?: {
    url: string;
    alt: string;
    source: 'local' | 'github' | 'imgur' | 'other';
  }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeVideoId?: string;
  youtubeUrl?: string;
  platform: string;
  features?: string[];
  longDescription?: string;
  modalTitle?: string;
  roleContributions?: string[];
  rating?: number;
  installs?: string;
  isProfessionalTeam?: boolean;
  cardTags?: string[];
  storeLinks?: {
    platform: string;
    url?: string;
    label?: string;
  }[];
  isComingSoon?: boolean;
  comingSoonDate?: string;
  isNextFestParticipant?: boolean;
  isOfficiallyCredited?: boolean;
  languagesCount?: number;
  wishlistUrl?: string;
  professionalTeamText?: string;
}

export const projects: Project[] = [
  {
    title: 'Mazeflower Music App',
    category: 'interactive',
    modalTitle: 'Mazeflower — Interactive Planetary Music Experience',
    description: 'A Unity-based interactive planet experience where users explore 3D planets and discover music & social content through interactive stickers. Features planetary navigation, spatial content placement, and persistent audio playback.',
    longDescription: 'A Unity-based interactive planet experience where users can explore 3D planets and discover music and social content through interactive stickers. Each user is represented as a globe. The project combines planetary navigation, spatial content placement, and a persistent music playback system to create an immersive way to explore songs, artists, mixtapes, and planet anthems.',
    image: `${process.env.PUBLIC_URL}/assets/mazeflower/cover.png`,
    technologies: [
      'Unity 3D',
      'C#',
      '3D/Spatial UI',
      'Audio Streaming (.m3u8/HLS)',
      'Mobile Touch Interaction',
      'UI/UX Design',
      'Performance & Debugging'
    ],
    cardTags: [
      'Unity 3D',
      'C#',
      'Audio Streaming (.m3u8/HLS)',
      '3D/Spatial UI'
    ],
    platform: 'Mobile (iOS & Android)',
    isProfessionalTeam: true,
    professionalTeamText: 'Contributed to this interactive music experience as a freelance Unity developer.',
    features: [
      'Interactive 3D planet navigation and pinch-to-zoom controls',
      'Interactive stickers for songs, artists, mixtapes, and planet anthems',
      'Mini music player with persistent playback across planet & globe navigation',
      'Integrated .m3u8/HLS audio streaming into the playback system',
      'Sticker projection, positioning, scaling, and visual differentiation with custom borders',
      'Optimized touch interactions, resolving gesture & navigation conflicts',
      'Balanced sticker distribution across planetary surface to prevent visual clustering'
    ],
    roleContributions: [
      'Developed interactive 3D planet navigation and pinch-to-zoom controls',
      'Implemented interactive stickers for songs, artists, mixtapes, and other content',
      'Built and refined a mini music player with persistent playback across planet and globe navigation',
      'Integrated .m3u8/HLS audio streaming into the playback system',
      'Implemented Planet Anthem playback and mini-player controls',
      'Improved sticker projection, positioning, scaling, resolution, and visual consistency across the planet surface',
      'Added visual differentiation between sticker types using custom borders and styling',
      'Fixed complex touch interaction, accidental playback, zoom, and navigation conflicts',
      'Improved sticker distribution across the planet to reduce clustering and visual clutter',
      'Performed extensive debugging, interaction testing, and stability improvements across the Planet experience'
    ]
  },
  {
    title: 'Rotted – A Brain Rot Simulator',
    category: 'industrial',
    modalTitle: 'Rotted – A Brain Rot Simulator',
    description: 'A dark-comedy survival roguelite where your attention is the only currency that matters. Swat roaches, dodge guilt trips from Mom, pay rent, and stack your Brain Rot meter to 100% — then do it again. Features a live global leaderboard and 33-language support. Coming soon on Steam.',
    longDescription: 'Rotted is a satirical survival roguelite developed by Sector4Interactive, coming soon to Steam — and selected to participate in Steam Next Fest. Players scroll a tiered content feed to reach peak Brain Rot while real-life chaos interrupts: roaches multiply, rent texts get aggressive, Mom keeps calling, and chores pile up. Every run rewards upgrade picks from 40+ boons and 7 persistent upgrades, feeding into a live global leaderboard tracking every player\'s ascent worldwide. The game supports 33 languages across interface, audio, and subtitles.',
    image: `${process.env.PUBLIC_URL}/assets/rotted/Header.png`,
    technologies: [
      'Unity',
      'C#',
      'Steam Achievements',
      'Steam Cloud',
      'Steam Leaderboards',
      'Steamworks SDK',
      'Localization',
      'Roguelite Systems',
      'Procedural Generation'
    ],
    cardTags: [
      'Unity',
      'C#',
      'Steam Achievements',
      'Steam Cloud',
      'Steam Leaderboards',
      'Localization',
      'Roguelite'
    ],
    platform: 'PC (Steam)',
    liveUrl: 'https://store.steampowered.com/app/4474330/Rotted__A_Brain_Rot_Simulator/',
    isComingSoon: true,
    isNextFestParticipant: true,
    isOfficiallyCredited: true,
    languagesCount: 33,
    wishlistUrl: 'https://store.steampowered.com/app/4474330/Rotted__A_Brain_Rot_Simulator/',
    storeLinks: [
      {
        platform: 'Steam',
        url: 'https://store.steampowered.com/app/4474330/Rotted__A_Brain_Rot_Simulator/',
        label: 'Steam (Wishlist Now)'
      }
    ],
    features: [
      'Survival roguelite with dark-comedy theme and satirical real-life interruptions',
      '40+ boons and upgrades per run, with 7 persistent cross-run upgrades',
      'Live global leaderboard — real-time Brain Rot tracker across all players worldwide',
      'Steam Achievements, Steam Cloud Save, and Steam Leaderboards fully integrated',
      '33 languages supported — one of the widest localization scopes for an indie title',
      'Procedurally structured runs with meaningful upgrade choices each loop',
      'Dark humor narrative with escalating difficulty and chain-loop replayability'
    ],
    roleContributions: [
      'Designed and implemented the Task/Chores system — the core real-life interruption mechanics that challenge players to balance responsibilities against their Brain Rot meter progression',
      'Built and maintained the Boon/Upgrade system — implementing all 40+ upgrade cards and ensuring they apply correctly to game state, stack with persistent upgrades, and integrate cleanly with roguelite run logic',
      'Integrated the complete Steam platform layer — Steam Achievements, Steam Cloud Save, and Steam Leaderboards, including the live global leaderboard that tracks all players\' Brain Rot scores in real time',
      'Led language localization for all 33 supported languages — managing interface, subtitle, and audio localization pipelines across English, Japanese, Korean, Arabic, Hindi, Malayalam, Tamil, and 25+ more languages',
      'Officially credited in the game\'s release'
    ],
    isProfessionalTeam: true,
    professionalTeamText: 'Developed as part of the Sector4Interactive team.'
  },
  {
    title: 'The Curse 404',
    category: 'industrial',
    modalTitle: 'The Curse 404 — A Descent into Digital Madness',
    description: 'A first-person psychological horror game built in Unity that focuses on atmosphere, tension, and player-driven fear. The game dynamically reacts to player behavior, increasing anxiety through environmental changes and unsettling narrative feedback.',
    longDescription: 'The Curse 404 is a first-person psychological horror game released on Steam, Epic Games, Xbox, and PlayStation. Rather than relying on traditional jump scares, the game builds dread by dynamically reacting to how you play — increasing anxiety through environmental shifts, interactive elements, and sarcastic, unsettling narrative feedback. Both a free demo and the full version are available across all platforms.',
    image: `${process.env.PUBLIC_URL}/assets/the-curse-404/cover.jpg`,
    images: [
      {
        url: `${process.env.PUBLIC_URL}/assets/the-curse-404/1.jpg`,
        alt: 'The Curse 404 Gameplay 1',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/the-curse-404/2.jpg`,
        alt: 'The Curse 404 Gameplay 2',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/the-curse-404/3.jpg`,
        alt: 'The Curse 404 Gameplay 3',
        source: 'local'
      }
    ],
    technologies: ['Unity', 'C#', 'Unity Input System', 'TextMeshPro', 'Scriptable Architecture', 'Raycasting', 'Persistent Data'],
    cardTags: ['Unity', 'C#', 'Unity Input System', 'Raycasting'],
    platform: 'PC / Windows · Console',
    liveUrl: 'https://store.steampowered.com/app/4320820/The_Curse_404/',
    isProfessionalTeam: true,
    storeLinks: [
      { platform: 'Steam', url: 'https://store.steampowered.com/app/4320820/The_Curse_404/', label: 'Steam (Demo + Full Version)' },
      { platform: 'Epic Games Store', url: 'https://store.epicgames.com/p/the-curse-404-41b724', label: 'Epic Games Store (Demo + Full Version)' },
      { platform: 'Xbox', url: 'https://www.xbox.com/en-in/games/store/the-curse-404/9pm6r3trlz11' },
      { platform: 'PlayStation', url: 'https://store.playstation.com/en-in/product/EP8934-CUSA57814_00-0382593811541787' }
    ],
    features: [
      'Raycast-based modular interaction system with dynamic contextual prompts',
      'Real-time anxiety tracking that adapts gameplay to player behavior',
      'Dynamic sarcastic narrative feedback system driven by player actions',
      'Atmospheric environmental changes that evolve with player choices',
      'Smooth UI/HUD transitions with TextMeshPro-driven captions',
      'Robust scene management, timed events, and scripted sequences',
      'Persistent save system for progress, state, and game settings'
    ],
    roleContributions: [
      'Built the core gameplay mechanics — player movement, environmental interaction, and raycast-based object interaction with dynamic contextual prompts',
      'Developed the puzzle interaction system, handling logic triggers, player-driven puzzle states, and fail/retry/win flow management',
      'Implemented the anxiety tracking system — a real-time system that monitors player behavior and adjusts gameplay intensity and narrative feedback dynamically',
      'Created the persistent save system managing scene state, player progress, and game data across sessions',
      'Managed end-to-end store submission and deployment on Steam and Epic Games Store — including build pipelines, metadata, and release management'
    ]
  },
  {
    title: 'Escape Room',
    category: 'interactive',
    description: 'An immersive educational puzzle game that combines digital interactions with physical hardware control. Players solve interconnected puzzles about hydroponics and plant science while experiencing real-world feedback through automated door controls.',
    longDescription: `Educational Escape Room Experience

Project Overview
An immersive educational puzzle game that combines digital interactions with physical hardware control. Players solve interconnected puzzles about hydroponics and plant science while experiencing real-world feedback through automated door controls.

Technical Implementation
Core Systems
• Puzzle Management
  - Custom word-ordering system with sprite-based UI
  - Dynamic puzzle state management
  - Multi-attempt system with graceful failure handling
  - Real-time feedback and animations

• Hardware Integration
  - Serial port communication for physical door control
  - Thread-safe message queuing system
  - Room-specific configuration management
  - Error handling and port recovery

• UI/UX Design
  - Animated feedback systems
  - Progressive difficulty scaling
  - Intuitive drag-and-drop interfaces
  - Dynamic text updates and color coding

Key Features
• Multi-Room Configuration
  - Room-specific settings persistence
  - Configurable communication parameters
  - Easy room switching and setup

• Educational Content
  - Interactive learning about hydroponics
  - Plant science educational elements
  - Progressive hint system

• Real-World Integration
  - Physical door control through Arduino
  - Hardware feedback system
  - Fail-safe error handling

Technical Stack
• Unity (Game Engine)
• C# (Programming)
• SerialPort Communication
• Arduino Integration
• JSON Data Management
• Threading & Concurrency
• PlayerPrefs (Data Persistence)
• TextMeshPro (UI)
• Animation System
• Version Control`,
    image: `${process.env.PUBLIC_URL}/assets/escape-room/escaperoom.png`,
    images: [
      {
        url: `${process.env.PUBLIC_URL}/assets/escape-room/escaperoom.png`,
        alt: 'Escape Room Gameplay',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/escape-room/escaperoom1.png`,
        alt: 'Escape Room Hardware Integration',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/escape-room/escaperoom2.png`,
        alt: 'Escape Room UI Design',
        source: 'local'
      }
    ],
    technologies: [
      'Unity',
      'C#',
      'SerialPort Communication',
      'Arduino Integration',
      'JSON Data Management',
      'Threading & Concurrency',
      'PlayerPrefs',
      'TextMeshPro',
      'Animation System'
    ],
    platform: 'Windows',
    features: [
      'Multi-Room Configuration with persistent settings',
      'Interactive hydroponics and plant science education',
      'Physical door control through Arduino integration',
      'Custom word-ordering puzzle system',
      'Thread-safe hardware communication',
      'Progressive difficulty scaling',
      'Real-time feedback and animations',
      'Fail-safe error handling system'
    ]
  },
  {
    title: 'Facilig SafetyWhat Showcase',
    category: 'interactive',
    modalTitle: 'Facilig SafetyWhat — Interactive Safety System Showcase',
    description: 'An interactive 3D demonstration application designed to showcase how the Facilig safety system works. Allows users to explore facility safety zones, trigger alert demonstrations, and switch between dynamic camera perspectives.',
    longDescription: `Facilig SafetyWhat is an interactive 3D demonstration and simulation application built in Unity for Windows desktop. The project was created to showcase how the Facilig safety and security system operates, providing an intuitive, hands-on way for clients and stakeholders to understand its monitoring workflows, camera perspectives, and alert capabilities.

Rather than being a live operational surveillance tool, this application serves as an interactive product demonstration. Users can navigate an interactive facility environment, switch between multiple camera angles—including wide perimeter views, elevated vantage points, and localized CCTV cameras—and observe how the system visualizes active safety zones.

To demonstrate incident handling, the application allows users to simulate safety alerts in real time. When a safety trigger occurs in a designated zone, the interface displays visual warning indicators on the operator HUD, enabling users to switch directly to the affected camera view and see how the Facilig safety system alerts personnel.`,
    image: `${process.env.PUBLIC_URL}/assets/facilig-safety/Thumbnail.png`,
    images: [
      {
        url: `${process.env.PUBLIC_URL}/assets/facilig-safety/Thumbnail.png`,
        alt: 'Facilig SafetyWhat Interactive Showcase Thumbnail',
        source: 'local'
      }
    ],
    youtubeVideoId: 'DTXcwd1cXgc',
    youtubeUrl: 'https://youtu.be/DTXcwd1cXgc',
    technologies: [
      'Unity 3D',
      'C#',
      'Interactive 3D Demo',
      'Multi-Camera Systems',
      'Interactive UI/UX',
      'System Simulation',
      'Windows Desktop'
    ],
    cardTags: [
      'Unity 3D',
      'C#',
      'Interactive Demo',
      'Simulation'
    ],
    platform: 'PC (Windows)',
    features: [
      'Interactive 3D demonstration illustrating how the Facilig safety system functions',
      'Multi-camera perspective switching showcasing facility coverage and camera angles',
      'Interactive safety alert demonstration visualizing simulated hazard triggers and incident states',
      'Intuitive presentation-ready operator HUD designed for client walkthroughs and demonstrations',
      'Zone-based status indicators displaying active, safe, and alert states in real time',
      'Standalone Windows desktop application optimized for smooth presentation and responsive user interaction'
    ],
    roleContributions: [
      'Sole programmer for the entire project, developing the interactive showcase application from scratch in Unity and C#',
      'Designed and implemented the interactive user interface (UI) and demonstration workflow',
      'Engineered the multi-camera viewport switching system to provide dynamic perspective transitions',
      'Built the interactive safety alert demonstration mechanics and zone status visual indicators',
      'Optimized runtime performance and rendering for a smooth 60 FPS presentation on Windows desktop'
    ],
    storeLinks: [
      {
        platform: 'youtube',
        url: 'https://youtu.be/DTXcwd1cXgc',
        label: 'Watch Video Demo'
      }
    ]
  },
  {
    title: 'Fast Gear',
    category: 'industrial',
    modalTitle: 'Fast Gear — Ultimate Racing Experience',
    description: 'Fast Gear is a high-intensity 3D car racing game offering both thrilling single-player career modes and competitive real-time online multiplayer. Master realistic driving physics and race through dynamic tracks across cities, deserts, and forests. Released on Steam, Epic Games, Xbox, and PlayStation.',
    longDescription: 'Fast Gear is a multi-platform 3D racing game built in Unity, available on Steam, Epic Games, Xbox, and PlayStation. Players choose from a wide garage of high-performance vehicles and compete across diverse environments — urban streets, deserts, forests, and mountain highways. The game supports both an offline single-player career and real-time online PvP multiplayer, delivering a complete racing experience across skill levels.',
    image: `${process.env.PUBLIC_URL}/assets/fast-gear/FastGear.jpg`,
    images: [
      {
        url: `${process.env.PUBLIC_URL}/assets/fast-gear/FastGear.jpg`,
        alt: 'Fast Gear Main Gameplay',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/fast-gear/FastGear1.jpg`,
        alt: 'Fast Gear Racing Action',
        source: 'local'
      },
      {
        url: `${process.env.PUBLIC_URL}/assets/fast-gear/FastGear2.jpg`,
        alt: 'Fast Gear Multiplayer',
        source: 'local'
      }
    ],
    technologies: ['Unity 3D', 'C#', 'Multiplayer Networking', 'Physics Simulation', 'AI Programming', '3D Modeling', 'UI/UX Design'],
    cardTags: ['Unity 3D', 'C#', 'Multiplayer Networking', 'Physics Simulation'],
    platform: 'PC · Console',
    liveUrl: 'https://store.steampowered.com/app/1282390/Fast_Gear/',
    isProfessionalTeam: true,
    storeLinks: [
      { platform: 'Steam', url: 'https://store.steampowered.com/app/1282390/Fast_Gear/' },
      { platform: 'Epic Games Store', url: 'https://store.epicgames.com/p/fast-gear-454cd7' },
      { platform: 'Xbox', url: 'https://www.xbox.com/en-IN/games/store/fast-gear/9PB6LNR98202/0010' },
      { platform: 'PlayStation', url: 'https://store.playstation.com/en-in/product/EP8934-CUSA53640_00-0253818994512950' }
    ],
    features: [
      'Single-player career and knockout modes',
      'Real-time online multiplayer PvP racing',
      'Wide variety of high-performance vehicles to unlock and drive',
      'Diverse racing environments — cities, deserts, forests, mountains',
      'Realistic driving physics and responsive controls',
      'Smart and adaptive AI opponents for offline play',
      'Dynamic track designs across multiple global locations',
      'Competitive online leaderboards and worldwide matchmaking'
    ],
    roleContributions: [
      'Designed and implemented the complete UI system — including all menus, HUD, race flow screens, lap counters, and end-of-race result panels',
      'Built and iterated on UI/UX flows to ensure smooth player navigation across career mode, multiplayer lobby, garage, and settings screens',
      'Managed end-to-end store submission and deployment on Steam and Epic Games Store — including build pipelines, platform certification, metadata management, and release coordination'
    ]
  },
  {
    title: 'Superdash - No Wifi Games',
    category: 'industrial',
    modalTitle: 'Superdash – Play Anywhere, No Internet Needed',
    description: 'Superdash is an offline-first hyper-casual mobile game featuring vibrant merge-and-match gameplay with intuitive swipe controls. Designed for play anywhere without an internet connection, the game rewards performance with a star rating system that keeps players coming back.',
    longDescription: 'Superdash is a hyper-casual mobile game built for offline play — no internet required. Players merge objects of the same color to advance through progressively harder time-based puzzles, with smooth swipe controls and a star rating system that motivates replay. Designed around simplicity and rapid engagement, Superdash is optimized for mobile performance and broad accessibility.',
    image: 'https://i.imgur.com/7P2uipQ.png',
    images: [
      {
        url: 'https://i.imgur.com/AHlP3I8.png',
        alt: 'Superdash Gameplay Screenshot 1',
        source: 'imgur'
      },
      {
        url: 'https://i.imgur.com/JuA6Pd4.png',
        alt: 'Superdash Gameplay Screenshot 2',
        source: 'imgur'
      }
    ],
    technologies: ['Unity', 'C#', 'SQLite', '2D Animation', 'Addressables', 'Collider2D'],
    cardTags: ['Unity', 'C#', 'SQLite', 'Collider2D'],
    platform: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.SuperdashOffline&hl=en',
    rating: 4.8,
    isProfessionalTeam: true,
    storeLinks: [
      { platform: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.SuperdashOffline&hl=en', label: 'Google Play Store ⭐ 4.8 stars' }
    ],
    features: [
      'Merge-and-match gameplay with addictive color-matching progression',
      'Precise collision detection using Collider2D for smooth object interactions',
      'Time-based puzzles with increasing difficulty and urgency',
      'Fully offline — no internet connection required',
      'Star rating system that rewards performance and encourages replayability',
      'Intuitive swipe and gesture controls for fluid mobile gameplay',
      'Hyper-casual design for instant pick-up-and-play engagement'
    ],
    roleContributions: [
      'Designed and implemented the complete level system — structuring progression, managing difficulty scaling, and ensuring each stage introduces new challenge without frustrating players',
      'Built the in-game review prompt system using Unity\'s native review API to drive user ratings at the right moment in the player journey',
      'Managed Google Play Console deployment — including APK uploads, store listing management, and release coordination'
    ]
  },
  {
    title: 'Puzzle Odyssey',
    category: 'industrial',
    modalTitle: 'Puzzle Odyssey — Words Meet Wonder',
    description: 'Puzzle Odyssey is an immersive cross-platform word puzzle game that blends challenging vocabulary gameplay with beautiful landscapes and calming soundtracks. Players swipe through letter grids to discover hidden words across stunning environments — available on iOS and Android.',
    longDescription: 'Puzzle Odyssey challenges players to discover hidden words by connecting letters across a grid, set against immersive landscapes and relaxing soundtracks. Launched on both iOS and Android, the game blends vocabulary training with visually stunning environments — designed for puzzle enthusiasts who want both mental stimulation and a calming experience. Monetized through Unity IAP with a smooth, fair purchase flow.',
    image: 'https://i.imgur.com/gFmttwW.png',
    images: [
      {
        url: 'https://i.imgur.com/gFmttwW.png',
        alt: 'Puzzle Odyssey Main Gameplay',
        source: 'imgur'
      },
      {
        url: 'https://i.imgur.com/PnVI2Qr.png',
        alt: 'Puzzle Odyssey Game Interface',
        source: 'imgur'
      },
      {
        url: 'https://i.imgur.com/Rmey2RW.png',
        alt: 'Puzzle Odyssey Level Design',
        source: 'imgur'
      }
    ],
    technologies: ['Unity', 'C#', 'Shader Graph', 'Cinemachine', 'Post Processing', 'Unity IAP', 'Line Renderer', 'Collider2D', 'PlayerPrefs', 'PlayFab'],
    cardTags: ['Unity', 'C#', 'Shader Graph', 'Unity IAP', 'PlayFab'],
    platform: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.PuzzleOdyssey&hl=en_IN',
    rating: 4.4,
    installs: '100+ installs',
    isProfessionalTeam: true,
    storeLinks: [
      { platform: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.PuzzleOdyssey&hl=en_IN', label: 'Google Play Store ⭐ 4.4 stars · 100+ installs' },
      { platform: 'App Store' }
    ],
    features: [
      'Challenging word puzzles with increasing difficulty across all levels',
      'Cross-platform — iOS and Android with seamless experience across devices',
      'In-App Purchases (IAP) for hints, level unlocks, and ad-free experience',
      'In-App Review integration to prompt user feedback at the right moment',
      'Word formation mechanic using Line Renderer + Collider2D for accurate swipe detection',
      'PlayFab backend for persistent player progress and high score tracking',
      'Immersive landscapes and calming soundtracks powered by Shader Graph and Post Processing'
    ],
    roleContributions: [
      'Architected the level progression system — designing the difficulty curve and managing stage flow across all game levels',
      'Integrated Unity IAP for both iOS and Android, handling consumable purchases (hints, level unlocks) and non-consumable ad-free options with a smooth and secure transaction process',
      'Built backend infrastructure via PlayFab — managing player save data, progress sync, high score tracking, and persistent game settings',
      'Implemented the in-game review prompt system (Google Play + App Store) to surface feedback requests at optimal player moments',
      'Configured and managed the Google Play Console — handling APK/AAB uploads, store listings, screenshots, and release management'
    ]
  },
  {
    title: 'Rogue Runner',
    category: 'personal',
    description: `The Rogue Runner is a side-scrolling\nadventure where players navigate\nthrough challenging levels by\nrunning, jumping, and avoiding\nobstacles. The game typically\ninvolves controlling a character that\nmoves across various terrains,\novercoming enemies, and collecting\nrewards.`,
    image: 'https://i.imgur.com/iPHAKwy.png',
    technologies: ['Grid', 'Coin Collection', 'StateMachine'],
    platform: 'Web',
    liveUrl: 'https://ajithkumarkk.itch.io/rogue-runner'
  },
  {
    title: 'Joy Runner',
    category: 'personal',
    description: `The Joy Runner Game is a fast-\npaced, action-packed game where\nplayers control a character that\ncontinuously moves forward, avoiding\nobstacles and collecting rewards. The\ngoal is to survive as long as possible\nwhile navigating through dynamically\ngenerated environments. As the\ngame progresses, the speed and\ndifficulty increase, challenging\nplayers to react quickly and stay\nfocused.`,
    image: 'https://i.imgur.com/qhLziIb.png',
    technologies: ['Endless Runner'],
    platform: 'Web',
    liveUrl: 'https://ajithkumarkk.itch.io/endless-runner'
  },
  {
    title: 'Tetris 2D',
    category: 'personal',
    description: `This is a Tetris-inspired game created\nin Unity where players control falling\nblocks. The goal is to complete\nhorizontal lines by placing blocks in a\n10x20 grid. When a line is filled, it\nclears, and the player earns points.\nThe game ends when the blocks\nstack up to the top. Scores are saved,\nand the player can view their high\nscores.`,
    image: 'https://i.imgur.com/X1LJy18.png',
    images: [
      {
        url: 'https://i.imgur.com/X1LJy18.png',
        alt: 'Tetris 2D Main Gameplay',
        source: 'imgur'
      },
      {
        url: 'https://i.imgur.com/IndsapE.png',
        alt: 'Tetris 2D Game Over UI',
        source: 'imgur'
      }
    ],
    technologies: ['Input Handling', 'PlayerPref', 'Grid Based'],
    platform: 'Web',
    liveUrl: 'https://ajithkumarkk.itch.io/tetris-2d',
    longDescription: `Overview of the Project:\nThis is my first game project where I created a Tetris-like game in Unity. Key features I implemented include:\n\nBlock Movement & Rotation: Blocks move left, right, and rotate with arrow keys. They fall automatically with adjustable speed.\nGrid Management: A 10x20 grid stores blocks, and I check if new block positions are valid.\nLine Clearing: Filled lines are cleared, and score points are added when lines are removed.\nGame Over: When blocks reach the top, the game ends, and the score is displayed.\nScore & High Scores: Player's score is saved, and high scores are managed using PlayerPrefs.\nUI: Created a Game Over UI to display the player's score.\n\nWhat I Learned:\nC# scripting in Unity: Gained experience working with Unity's scripting system to create game mechanics, logic, and interactions.\nGrid-based game design: Understood how to manage a grid of cells for something like Tetris, where each cell can either be empty or occupied by part of a block.\nGame Design Fundamentals: Learned how to handle user input, update game states, and create meaningful interactions (such as clearing lines, adding scores, and handling game-over scenarios).`
  }
];



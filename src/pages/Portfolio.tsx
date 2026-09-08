import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box, IconButton, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemIcon, ListItemText, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, SportsEsports, Code, Devices, Star, StarHalf, StarBorder, CheckCircle, PlayArrow, Apple, ShoppingCart, YouTube } from '@mui/icons-material';

interface Project {
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

const projects: Project[] = [
  {
    title: 'Mazeflower Music App',
    category: 'industrial',
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
    professionalTeamText: 'Industrial Interactive Music Experience.',
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

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Ajith Kumar | Unity Game Developer';
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'industrial' | 'interactive' | 'personal'>('all');
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const getCategoryInfo = (cat: string) => {
    switch (cat) {
      case 'industrial':
        return {
          label: '🏢 Industrial & Studio',
          shortLabel: '🏢 Industrial Project',
          color: '#4ecca3',
          bg: 'rgba(78, 204, 163, 0.15)',
          border: '1px solid rgba(78, 204, 163, 0.4)'
        };
      case 'interactive':
        return {
          label: '⚡ Interactive & Simulation',
          shortLabel: '⚡ Interactive App',
          color: '#00f2fe',
          bg: 'rgba(0, 242, 254, 0.15)',
          border: '1px solid rgba(0, 242, 254, 0.4)'
        };
      case 'personal':
        return {
          label: '🕹️ Personal & Indie',
          shortLabel: '🕹️ Personal Project',
          color: '#a855f7',
          bg: 'rgba(168, 85, 247, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.4)'
        };
      default:
        return {
          label: 'All Projects',
          shortLabel: 'Project',
          color: '#4ecca3',
          bg: 'rgba(78, 204, 163, 0.15)',
          border: '1px solid rgba(78, 204, 163, 0.4)'
        };
    }
  };

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const handleImageError = (imageUrl: string) => {
    console.error(`Failed to load image: ${imageUrl}`);
    setImageError(prev => ({ ...prev, [imageUrl]: true }));
  };

  const handleImageLoad = (imageUrl: string) => {
    console.log(`Successfully loaded image: ${imageUrl}`);
  };

  const getPlatformStyles = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'steam':
        return {
          bg: 'linear-gradient(135deg, #171a21 0%, #2a475e 100%)',
          hoverBg: 'linear-gradient(135deg, #2a475e 0%, #171a21 100%)',
          color: '#66c0f4',
          border: '1px solid rgba(102, 192, 244, 0.4)',
          icon: <SportsEsports sx={{ fontSize: 20 }} />,
          name: 'Steam'
        };
      case 'epic games':
      case 'epic games store':
        return {
          bg: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
          hoverBg: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          icon: <ShoppingCart sx={{ fontSize: 20 }} />,
          name: 'Epic Games'
        };
      case 'xbox':
        return {
          bg: 'linear-gradient(135deg, #107c10 0%, #1f9e1f 100%)',
          hoverBg: 'linear-gradient(135deg, #1f9e1f 0%, #107c10 100%)',
          color: '#ffffff',
          border: '1px solid rgba(16, 124, 16, 0.5)',
          icon: <SportsEsports sx={{ fontSize: 20 }} />,
          name: 'Xbox'
        };
      case 'playstation':
        return {
          bg: 'linear-gradient(135deg, #003087 0%, #00439c 100%)',
          hoverBg: 'linear-gradient(135deg, #00439c 0%, #003087 100%)',
          color: '#ffffff',
          border: '1px solid rgba(0, 48, 135, 0.5)',
          icon: <SportsEsports sx={{ fontSize: 20 }} />,
          name: 'PlayStation'
        };
      case 'google play store':
      case 'google play':
        return {
          bg: 'linear-gradient(135deg, #0F0F0F 0%, #1F1F1F 100%)',
          hoverBg: 'linear-gradient(135deg, #1F1F1F 0%, #0F0F0F 100%)',
          color: '#4ecca3',
          border: '1px solid rgba(78, 204, 163, 0.4)',
          icon: <PlayArrow sx={{ fontSize: 20 }} />,
          name: 'Google Play'
        };
      case 'app store':
      case 'ios':
      case 'app store (ios)':
        return {
          bg: 'linear-gradient(135deg, #000000 0%, #1c1c1e 100%)',
          hoverBg: 'linear-gradient(135deg, #1c1c1e 0%, #000000 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          icon: <Apple sx={{ fontSize: 20 }} />,
          name: 'App Store'
        };
      case 'youtube':
      case 'video':
        return {
          bg: 'linear-gradient(135deg, #280000 0%, #cc0000 100%)',
          hoverBg: 'linear-gradient(135deg, #cc0000 0%, #ff0000 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255, 0, 0, 0.5)',
          icon: <YouTube sx={{ fontSize: 20, color: '#ffffff' }} />,
          name: 'YouTube'
        };
      default:
        return {
          bg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          hoverBg: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
          color: '#4ecca3',
          border: '1px solid rgba(78, 204, 163, 0.3)',
          icon: <Launch sx={{ fontSize: 20 }} />,
          name: platform
        };
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} sx={{ color: '#ffb400', fontSize: '1rem' }} />);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<StarHalf key={i} sx={{ color: '#ffb400', fontSize: '1rem' }} />);
      } else {
        stars.push(<StarBorder key={i} sx={{ color: 'rgba(255, 180, 0, 0.3)', fontSize: '1rem' }} />);
      }
    }
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
        {stars}
        <Typography variant="caption" sx={{ color: '#eeeeee', ml: 0.5, fontWeight: 'bold' }}>
          {rating}
        </Typography>
      </Box>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{
      py: 8,
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
      borderRadius: 0,
    }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <SportsEsports sx={{
              fontSize: 60,
              color: '#4ecca3',
              mb: 2,
              filter: 'drop-shadow(0 0 10px #4ecca3)'
            }} />
          </motion.div>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(78, 204, 163, 0.3)',
            }}
          >
            Game Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#eeeeee',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Crafting immersive digital experiences through code and creativity
          </Typography>
        </Box>

        {/* Category Filter Pills Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 6, px: 2 }}>
          {[
            { key: 'all', label: 'All Projects', count: projects.length },
            { key: 'industrial', label: '🏢 Industrial & Studio', count: projects.filter(p => p.category === 'industrial').length },
            { key: 'interactive', label: '⚡ Interactive & Simulation', count: projects.filter(p => p.category === 'interactive').length },
            { key: 'personal', label: '🕹️ Personal & Indie', count: projects.filter(p => p.category === 'personal').length },
          ].map(tab => {
            const isActive = activeCategory === tab.key;
            return (
              <Button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as any)}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: '24px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.88rem',
                  color: isActive ? '#1a1a2e' : '#eeeeee',
                  background: isActive
                    ? 'linear-gradient(135deg, #00f2fe 0%, #4ecca3 100%)'
                    : 'rgba(30, 41, 59, 0.7)',
                  border: isActive
                    ? '1px solid #4ecca3'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: isActive ? '0 0 15px rgba(78, 204, 163, 0.5)' : 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: isActive
                      ? 'linear-gradient(135deg, #00f2fe 0%, #4ecca3 100%)'
                      : 'rgba(78, 204, 163, 0.2)',
                  }
                }}
              >
                {tab.label}
                <Chip
                  label={tab.count}
                  size="small"
                  sx={{
                    ml: 1,
                    height: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 'bold',
                    backgroundColor: isActive ? 'rgba(26, 26, 46, 0.3)' : 'rgba(255, 255, 255, 0.15)',
                    color: isActive ? '#1a1a2e' : '#eeeeee',
                  }}
                />
              </Button>
            );
          })}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)'
            },
            gap: 6,
            px: { xs: 2, md: 4 }
          }}
        >
          {(activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory)).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card
                onClick={() => handleOpenDialog(project)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(78, 204, 163, 0.2)',
                  transition: 'all 0.4s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 0 25px rgba(78, 204, 163, 0.3)',
                    '& .project-overlay': {
                      opacity: 1,
                    },
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    }
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={() => handleImageError(project.image)}
                    onLoad={() => handleImageLoad(project.image)}
                    sx={{
                      transition: 'transform 0.4s ease-in-out',
                      objectFit: 'cover',
                      width: '100%',
                      height: '250px'
                    }}
                  />
                  {project.isComingSoon && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                        background: 'linear-gradient(135deg, #00f2fe 0%, #4ecca3 100%)',
                        color: '#1a1a2e',
                        fontWeight: 'bold',
                        fontSize: '0.72rem',
                        px: 1.25,
                        py: 0.5,
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      🟢 Coming Soon{project.comingSoonDate ? ` — ${project.comingSoonDate}` : ''}
                    </Box>
                  )}
                  {project.isNextFestParticipant && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 2,
                        background: 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
                        color: '#66c0f4',
                        fontWeight: 'bold',
                        fontSize: '0.72rem',
                        px: 1.25,
                        py: 0.5,
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        border: '1px solid rgba(102, 192, 244, 0.4)',
                      }}
                    >
                      🎮 Steam Next Fest Participant
                    </Box>
                  )}
                  {imageError[project.image] && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(30, 41, 59, 0.9)',
                        color: '#4ecca3'
                      }}
                    >
                      <Typography>Image not available</Typography>
                    </Box>
                  )}
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      background: 'linear-gradient(to top, rgba(30, 41, 59, 0.9), transparent)',
                    }}
                  >
                    {project.githubUrl && (
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#4ecca3',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(360deg)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.liveUrl && (
                      <IconButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#4ecca3',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(360deg)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                    {project.youtubeVideoId && (
                      <IconButton
                        href={project.youtubeUrl || `https://youtu.be/${project.youtubeVideoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Watch Video Demonstration"
                        sx={{
                          color: '#ff4b4b',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            color: '#ff0000'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <YouTube />
                      </IconButton>
                    )}
                  </Box>
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#4ecca3',
                      textShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    <Chip
                      label={getCategoryInfo(project.category).shortLabel}
                      size="small"
                      sx={{
                        backgroundColor: getCategoryInfo(project.category).bg,
                        color: getCategoryInfo(project.category).color,
                        border: getCategoryInfo(project.category).border,
                        fontSize: '0.72rem',
                        fontWeight: 'bold',
                        height: '22px'
                      }}
                    />
                    {project.isOfficiallyCredited && (
                      <Chip
                        icon={<Star sx={{ color: '#ffd700 !important', fontSize: '0.9rem !important' }} />}
                        label="Officially Credited in Release"
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 215, 0, 0.12)',
                          color: '#ffd700',
                          border: '1px solid rgba(255, 215, 0, 0.25)',
                          fontSize: '0.72rem',
                          fontWeight: 'bold',
                          height: '22px',
                          '& .MuiChip-icon': {
                            color: '#ffd700',
                          }
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#eeeeee',
                      opacity: 0.8,
                      mb: 2
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 'auto', mb: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Chip
                        label={project.platform}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(78, 204, 163, 0.2)',
                          color: '#4ecca3',
                          border: '1px solid #4ecca3',
                          borderRadius: '16px',
                        }}
                      />
                      {project.languagesCount && (
                        <Chip
                          label={`🌐 ${project.languagesCount} Languages Supported`}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(102, 192, 244, 0.15)',
                            color: '#66c0f4',
                            border: '1px solid rgba(102, 192, 244, 0.3)',
                            borderRadius: '16px',
                            fontWeight: 'bold',
                            fontSize: '0.72rem'
                          }}
                        />
                      )}
                      {project.rating && renderStars(project.rating)}
                    </Box>

                    {/* Small Store Icons on Card */}
                    {project.storeLinks && project.storeLinks.length > 0 && (
                      <Box sx={{ display: 'flex', gap: 0.75, mb: 0.5, alignItems: 'center' }}>
                        {project.storeLinks.map((link, idx) => {
                          const styles = getPlatformStyles(link.platform);
                          return (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background: styles.bg,
                                color: styles.color,
                                border: styles.border,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                              }}
                              title={link.label || styles.name}
                            >
                              <Box sx={{ display: 'flex', '& svg': { fontSize: '0.9rem' } }}>
                                {styles.icon}
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {(project.cardTags || project.technologies.slice(0, 4)).map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            color: '#eeeeee',
                            border: '1px solid rgba(78, 204, 163, 0.3)',
                            borderRadius: '16px',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                              backgroundColor: 'rgba(78, 204, 163, 0.1)',
                            },
                            transition: 'all 0.2s ease-in-out',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  {project.isComingSoon && project.wishlistUrl && (
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.wishlistUrl, '_blank', 'noopener,noreferrer');
                      }}
                      sx={{
                        mt: 2.5,
                        width: '100%',
                        background: 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
                        color: '#c7d5e0',
                        border: '1px solid rgba(102, 192, 244, 0.4)',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #2a475e 0%, #171a21 100%)',
                          color: '#ffffff',
                          borderColor: '#66c0f4',
                          boxShadow: '0 0 15px rgba(102, 192, 244, 0.5)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      ☆ Wishlist on Steam
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(78, 204, 163, 0.2)',
            color: '#eeeeee',
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{
              color: '#4ecca3',
              borderBottom: '1px solid rgba(78, 204, 163, 0.2)',
              pb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <span>{selectedProject.modalTitle || selectedProject.title}</span>
              <Chip
                label={getCategoryInfo(selectedProject.category).label}
                size="small"
                sx={{
                  backgroundColor: getCategoryInfo(selectedProject.category).bg,
                  color: getCategoryInfo(selectedProject.category).color,
                  border: getCategoryInfo(selectedProject.category).border,
                  fontSize: '0.78rem',
                  fontWeight: 'bold',
                }}
              />
            </DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 3 }}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </Box>

                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                        Project Gallery
                      </Typography>
                      <ImageList
                        sx={{
                          width: '100%',
                          height: 'auto',
                          backgroundColor: 'rgba(78, 204, 163, 0.05)',
                          borderRadius: 2,
                          p: 2,
                          mb: 3,
                          border: '1px solid rgba(78, 204, 163, 0.1)'
                        }}
                        cols={2}
                        gap={8}
                      >
                        {selectedProject.images.map((img, index) => (
                          <ImageListItem
                            key={index}
                            sx={{
                              borderRadius: 2,
                              overflow: 'hidden',
                              border: '1px solid rgba(78, 204, 163, 0.2)',
                              '&:hover': {
                                transform: 'scale(1.02)',
                                transition: 'transform 0.3s ease-in-out',
                                boxShadow: '0 0 15px rgba(78, 204, 163, 0.3)'
                              }
                            }}
                          >
                            <img
                              src={img.url}
                              alt={img.alt}
                              loading="lazy"
                              style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover'
                              }}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </>
                  )}

                  {selectedProject.youtubeVideoId && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PlayArrow sx={{ color: '#ff4b4b', fontSize: '1.4rem' }} /> Video Demonstration
                      </Typography>
                      <Box
                        sx={{
                          position: 'relative',
                          paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                          height: 0,
                          overflow: 'hidden',
                          borderRadius: 2,
                          border: '1px solid rgba(78, 204, 163, 0.3)',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                          backgroundColor: '#000'
                        }}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedProject.youtubeVideoId}?rel=0`}
                          title={`${selectedProject.title} Video Demonstration`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0
                          }}
                        />
                      </Box>
                    </Box>
                  )}

                  <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                    About the Project
                  </Typography>
                  <Box sx={{
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    borderRadius: 2,
                    p: 2,
                    mb: 3,
                    border: '1px solid rgba(78, 204, 163, 0.1)'
                  }}>
                    <Typography variant="body1" sx={{
                      whiteSpace: 'pre-line',
                      fontFamily: 'monospace',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: '#eeeeee'
                    }}>
                      {selectedProject.longDescription || selectedProject.description}
                    </Typography>
                  </Box>

                  {selectedProject.roleContributions && selectedProject.roleContributions.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                        My Role & Contributions
                      </Typography>
                      <List sx={{
                        backgroundColor: 'rgba(78, 204, 163, 0.05)',
                        borderRadius: 2,
                        p: 1,
                        mb: 3,
                        border: '1px solid rgba(78, 204, 163, 0.1)'
                      }}>
                        {selectedProject.roleContributions.map((role, idx) => (
                          <ListItem key={idx} sx={{
                            py: 0.75,
                            alignItems: 'flex-start',
                            '&:not(:last-child)': {
                              borderBottom: '1px solid rgba(78, 204, 163, 0.1)'
                            }
                          }}>
                            <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                              <Star sx={{ color: '#ffb400', fontSize: '1.1rem' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={role}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.9rem',
                                  color: '#eeeeee',
                                  lineHeight: 1.5
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                        Key Features
                      </Typography>
                      <List sx={{
                        backgroundColor: 'rgba(78, 204, 163, 0.05)',
                        borderRadius: 2,
                        p: 1,
                        mb: 3,
                        border: '1px solid rgba(78, 204, 163, 0.1)'
                      }}>
                        {selectedProject.features.map((feature, index) => (
                          <ListItem key={index} sx={{
                            py: 0.5,
                            '&:not(:last-child)': {
                              borderBottom: '1px solid rgba(78, 204, 163, 0.1)'
                            }
                          }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircle sx={{ color: '#4ecca3', fontSize: '1.1rem' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.9rem',
                                  color: '#eeeeee'
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}

                  <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 3,
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    borderRadius: 2,
                    p: 2,
                    border: '1px solid rgba(78, 204, 163, 0.1)'
                  }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        icon={<Code />}
                        label={tech}
                        sx={{
                          backgroundColor: 'rgba(78, 204, 163, 0.1)',
                          color: '#4ecca3',
                          border: '1px solid rgba(78, 204, 163, 0.3)',
                          borderRadius: '16px',
                          '&:hover': {
                            backgroundColor: 'rgba(78, 204, 163, 0.2)',
                          }
                        }}
                      />
                    ))}
                  </Box>

                  {selectedProject.storeLinks && selectedProject.storeLinks.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                        Available Platforms & Stores
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {selectedProject.storeLinks.map((link, idx) => {
                          const styles = getPlatformStyles(link.platform);
                          const hasUrl = Boolean(link.url);
                          return (
                            <Box
                              key={idx}
                              component={hasUrl ? 'a' : 'div'}
                              {...(hasUrl && {
                                href: link.url,
                                target: '_blank',
                                rel: 'noopener noreferrer'
                              })}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                px: 2.5,
                                py: 1.25,
                                borderRadius: '10px',
                                background: styles.bg,
                                color: styles.color,
                                border: styles.border,
                                textDecoration: 'none',
                                cursor: hasUrl ? 'pointer' : 'default',
                                opacity: hasUrl ? 1 : 0.85,
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
                                ...(hasUrl && {
                                  '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                                    background: styles.hoverBg,
                                  }
                                })
                              }}
                            >
                              <Box sx={{ display: 'flex', '& svg': { fontSize: '1.4rem' } }}>
                                {styles.icon}
                              </Box>
                              <Box>
                                <Typography variant="caption" sx={{ display: 'block', opacity: 0.6, fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: 1.1 }}>
                                  {hasUrl ? 'GET IT ON' : 'AVAILABLE ON'}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.9rem', lineHeight: 1.2 }}>
                                  {link.label || styles.name}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  )}

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mt: 3,
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    borderRadius: 2,
                    p: 2,
                    border: '1px solid rgba(78, 204, 163, 0.1)'
                  }}>
                    <Devices sx={{ color: '#4ecca3' }} />
                    <Typography variant="body2" sx={{ color: '#4ecca3', fontWeight: 'bold' }}>
                      Platform: {selectedProject.platform}
                    </Typography>
                  </Box>

                  {selectedProject.isProfessionalTeam && (
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#eeeeee', opacity: 0.6, mt: 3, textAlign: 'right' }}>
                      {selectedProject.professionalTeamText || "Developed as part of a professional team."}
                    </Typography>
                  )}
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{
              borderTop: '1px solid rgba(78, 204, 163, 0.2)',
              px: 3,
              py: 2,
              flexWrap: 'wrap',
              gap: 1.5
            }}>
              {selectedProject.githubUrl && (
                <Button
                  startIcon={<GitHub />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#4ecca3',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(78, 204, 163, 0.1)',
                      borderColor: '#4ecca3',
                    }
                  }}
                >
                  View Code
                </Button>
              )}

              {selectedProject.storeLinks && selectedProject.storeLinks.map((link, idx) => {
                const styles = getPlatformStyles(link.platform);
                if (!link.url) return null;
                
                const buttonLabel = 
                  selectedProject.isComingSoon && link.platform.toLowerCase().includes('steam') ? 'Wishlist on Steam' :
                  link.platform.toLowerCase().includes('steam') ? 'View on Steam' :
                  link.platform.toLowerCase().includes('play') ? 'View on Play Store' :
                  link.platform.toLowerCase().includes('epic') ? 'View on Epic Games' :
                  link.platform.toLowerCase().includes('apple') || link.platform.toLowerCase().includes('app store') ? 'View on App Store' :
                  `View on ${styles.name}`;

                return (
                  <Button
                    key={idx}
                    startIcon={styles.icon}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: styles.bg,
                      color: styles.color,
                      border: styles.border,
                      borderRadius: '8px',
                      px: 2.5,
                      py: 0.75,
                      textTransform: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: styles.hoverBg,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                      }
                    }}
                  >
                    {buttonLabel}
                  </Button>
                );
              })}

              {selectedProject.liveUrl && (!selectedProject.storeLinks || !selectedProject.storeLinks.some(l => l.url === selectedProject.liveUrl)) && (
                <Button
                  startIcon={<Launch />}
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#4ecca3',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(78, 204, 163, 0.1)',
                      borderColor: '#4ecca3',
                    }
                  }}
                >
                  Live Demo
                </Button>
              )}

              <Button
                onClick={handleCloseDialog}
                sx={{
                  color: '#4ecca3',
                  ml: 'auto',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(78, 204, 163, 0.1)',
                  }
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Portfolio;
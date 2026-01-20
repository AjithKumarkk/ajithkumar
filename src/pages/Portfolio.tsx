import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box, IconButton, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, SportsEsports, Code, Devices, Star, CheckCircle } from '@mui/icons-material';

interface Project {
  title: string;
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
  platform: string;
  features?: string[];
  longDescription?: string;
}

const projects: Project[] = [
  {
    title: 'Bowling Game VR',
    description: 'An immersive virtual reality bowling experience that brings the classic sport into VR. Players can enjoy realistic bowling mechanics with intuitive VR controls and physics-based gameplay.',
    image: 'https://i.imgur.com/placeholder.png',
    technologies: ['Unity', 'C#', 'VR SDK', 'Physics Simulation', 'XR Interaction'],
    platform: 'VR',
    features: [
      'Immersive VR bowling experience',
      'Realistic physics-based ball mechanics',
      'Intuitive VR controller support',
      'Interactive bowling alley environment'
    ]
  },
  {
    title: 'Escape Room',
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
    title: 'Fast Gear',
    description: 'Fast Gear is a high-intensity 3D car racing game built for PC, offering both thrilling single-player challenges and competitive online multiplayer PvP action. Master realistic driving physics and race through dynamic tracks across cities, deserts, and forests. Race the World. Rule the Road.',
    longDescription: `Fast Gear - Ultimate Racing Experience

Project Overview:
Fast Gear is a high-intensity 3D car racing game built for PC, offering both thrilling single-player challenges and competitive online multiplayer PvP action. Jump into a garage full of high-performance vehicles, master realistic driving physics, and race through a variety of dynamic tracks across cities, mountains, and highways. Whether you're climbing the career ladder offline or battling real players online, Fast Gear delivers the ultimate racing experience.

Key Features:
Single Player & Online PvP Multiplayer – Play solo in career, knockout modes or compete live against racers worldwide in real-time PvP.

Wide Range of Cars – Unlock and drive variety of cars.

Diverse Racing Environments – Tackle tracks set in urban streets, Desert, Forest and Many more.

Challenging AI Opponents – Face smart, adaptive AI racers in offline modes.

"Race the World. Rule the Road."`,
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
    platform: 'Steam, Xbox, Playstation',
    features: [
      'Single-player career and knockout modes',
      'Real-time online multiplayer PvP racing',
      'Wide variety of high-performance vehicles',
      'Diverse racing environments (cities, deserts, forests)',
      'Realistic driving physics and controls',
      'Smart and adaptive AI opponents',
      'Dynamic track designs across multiple locations',
      'Competitive online racing with players worldwide'
    ]
  },
  {
    title: 'Superdash - No Wifi Games',
    description: 'Superdash Offline, a hyper-casual mobile game featuring vibrant visuals and intuitive swipe mechanics. The game incorporates engaging merge-and-match gameplay, utilizing Collider2D for smooth and seamless interactions. To keep players challenged, I created time-based puzzles with increasing difficulty, ensuring long-lasting engagement. I also optimized the game for offline play, allowing users to enjoy it without needing an internet connection. To enhance replayability and player retention, I implemented a star rating system that rewards performance, encouraging users to revisit and improve their scores.',
    longDescription: `Overview of the Project:\nDesigned with offline functionality in mind, Superdash No Wifi Game allows players to enjoy the game anytime, anywhere, without requiring an internet connection. Additionally, the introduction of a star rating system enhances replayability by rewarding performance and motivating players to improve their scores.\n\nMerge-and-Match Gameplay: Players merge objects of the same color to progress through levels, creating an addictive and satisfying experience.\nCollider2D Implementation: Utilized for precise collision detection, ensuring smooth object interactions and accurate gameplay responses.\nTime-Based Puzzles: Increasingly difficult levels with time constraints challenge players, adding excitement and urgency to the gameplay.\nStar Rating System: Encourages replayability by assigning performance-based star ratings, motivating players to achieve higher scores and unlock new challenges.\n\nWhat I Learned:\nCollider2D and Physics System: Mastered the use of Collider2D to detect and manage object collisions accurately.\nIntuitive Swipe Input & Gesture Control: Implemented smooth swipe detection and input handling, ensuring fluid and responsive gameplay.\nTime-Based Puzzle Design: Developed time-based challenges with progressively increasing difficulty to maintain user engagement.\nHyper-Casual Game Design Principles: Deepened knowledge of hyper-casual game design, emphasizing simplicity, accessibility, and rapid engagement.`,
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
    platform: 'Mobile',
    features: [
      'Merge-and-match gameplay with addictive progression',
      'Precise collision detection using Collider2D',
      'Time-based puzzles with increasing difficulty',
      'Offline play – no internet required',
      'Star rating system for replayability and challenge',
      'Intuitive swipe and gesture controls',
      'Hyper-casual design for rapid engagement'
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.SuperdashOffline&hl=en'
  },
  {
    title: 'Puzzle Odyssey',
    description: 'Puzzle Odyssey is an immersive word puzzle game that combines challenging gameplay with stunning visuals and relaxing soundscapes. Players can test their vocabulary, sharpen their minds, and unwind as they swipe through hidden words across beautiful landscapes. Designed for puzzle lovers seeking both fun and education, the game offers an engaging experience. I implemented Unity in-app purchases for both iOS and Android, used Line Renderer to form words from letters using colliders, and integrated in-app reviews to enhance user feedback on both platforms.',
    longDescription: `Overview of the Project:
Puzzle Odyssey is a captivating word puzzle game that challenges players to discover hidden words by connecting letters across a grid. The game blends immersive gameplay with visually appealing landscapes and calming soundtracks, creating a relaxing yet mentally stimulating experience. It caters to puzzle enthusiasts who seek entertainment while enhancing their vocabulary and cognitive skills.

Challenging Word Puzzles: Players swipe through letters to form meaningful words, progressing through levels of increasing difficulty.
Cross-Platform Availability: Launched on both iOS and Android, ensuring a seamless experience across devices.
In-App Purchases (IAP): Monetization enabled through purchasable hints, level unlocks, and ad-free options using Unity IAP.
In-App Reviews Integration: Incorporated user feedback mechanism to prompt in-game reviews, boosting app visibility and credibility.
Word Formation Mechanics: Implemented Line Renderer with Collider2D to detect swipes and accurately form words from letter grids.

What I Learned:
Advanced Unity Game Development Techniques: Implemented game logic efficiently to manage level progression and word validation.
In-App Purchases (IAP) Integration: Gained expertise in managing consumable and non-consumable purchases, ensuring a smooth and secure transaction process.
In-App Reviews Implementation: Integrated Google Play and App Store in-app review prompts to encourage user feedback.
Persistent Data Management: Utilized PlayerPrefs to save user progress, game settings, and high scores across sessions.`,
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
    technologies: ['Unity', 'C#', 'Shader Graph', 'Cinemachine', 'Post Processing', 'Unity IAP', 'Line Renderer', 'Collider2D', 'PlayerPrefs'],
    platform: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Sector4Interactive.PuzzleOdyssey&hl=en_IN',
    features: [
      'Challenging word puzzles with increasing difficulty levels',
      'Cross-platform availability on iOS and Android',
      'In-App Purchases (IAP) for hints and ad-free experience',
      'In-App Reviews integration for user feedback',
      'Word formation mechanics using Line Renderer and Collider2D',
      'Persistent data management with PlayerPrefs',
      'Immersive landscapes and calming soundtracks',
      'Vocabulary and cognitive skills enhancement'
    ]
  },
  {
    title: 'Rogue Runner',
    description: `The Rogue Runner is a side-scrolling\nadventure where players navigate\nthrough challenging levels by\nrunning, jumping, and avoiding\nobstacles. The game typically\ninvolves controlling a character that\nmoves across various terrains,\novercoming enemies, and collecting\nrewards.`,
    image: 'https://i.imgur.com/iPHAKwy.png',
    technologies: ['Grid', 'Coin Collection', 'StateMachine'],
    platform: 'Web',
    liveUrl: 'https://ajithkumarkk.itch.io/rogue-runner'
  },
  {
    title: 'Joy Runner',
    description: `The Joy Runner Game is a fast-\npaced, action-packed game where\nplayers control a character that\ncontinuously moves forward, avoiding\nobstacles and collecting rewards. The\ngoal is to survive as long as possible\nwhile navigating through dynamically\ngenerated environments. As the\ngame progresses, the speed and\ndifficulty increase, challenging\nplayers to react quickly and stay\nfocused.`,
    image: 'https://i.imgur.com/qhLziIb.png',
    technologies: ['Endless Runner'],
    platform: 'Web',
    liveUrl: 'https://ajithkumarkk.itch.io/endless-runner'
  },
  {
    title: 'Tetris 2D',
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
    document.title = 'Ajith Kumar';
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const handleImageError = (imageUrl: string) => {
    console.error(`Failed to load image: ${imageUrl}`);
    setImageError(prev => ({...prev, [imageUrl]: true}));
  };

  const handleImageLoad = (imageUrl: string) => {
    console.log(`Successfully loaded image: ${imageUrl}`);
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
          {projects.map((project, index) => (
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
                  <Box sx={{ mt: 'auto' }}>
                    <Chip
                      label={project.platform}
                      size="small"
                      sx={{
                        mb: 2,
                        backgroundColor: 'rgba(78, 204, 163, 0.2)',
                        color: '#4ecca3',
                        border: '1px solid #4ecca3',
                        borderRadius: '16px', // More rounded corners
                      }}
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            color: '#eeeeee',
                            border: '1px solid rgba(78, 204, 163, 0.3)',
                            borderRadius: '16px', // More rounded corners
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
              pb: 2
            }}>
              {selectedProject.title}
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
                    {selectedProject.features?.map((feature, index) => (
                      <ListItem key={index} sx={{ 
                        py: 0.5,
                        '&:not(:last-child)': {
                          borderBottom: '1px solid rgba(78, 204, 163, 0.1)'
                        }
                      }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle sx={{ color: '#4ecca3' }} />
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

                  <Typography variant="h6" sx={{ color: '#4ecca3', mb: 2 }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1, 
                    mb: 2,
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
                          borderRadius: '16px', // More rounded corners
                          '&:hover': {
                            backgroundColor: 'rgba(78, 204, 163, 0.2)',
                          }
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    mt: 2,
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    borderRadius: 2,
                    p: 2,
                    border: '1px solid rgba(78, 204, 163, 0.1)'
                  }}>
                    <Devices sx={{ color: '#4ecca3' }} />
                    <Typography variant="body2" sx={{ color: '#4ecca3' }}>
                      Platform: {selectedProject.platform}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ 
              borderTop: '1px solid rgba(78, 204, 163, 0.2)',
              px: 3,
              py: 2
            }}>
              {selectedProject.githubUrl && (
                <Button
                  startIcon={<GitHub />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#4ecca3',
                    '&:hover': {
                      backgroundColor: 'rgba(78, 204, 163, 0.1)',
                    }
                  }}
                >
                  View Code
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button
                  startIcon={<Launch />}
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#4ecca3',
                    '&:hover': {
                      backgroundColor: 'rgba(78, 204, 163, 0.1)',
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
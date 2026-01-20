import React from 'react';
import { Typography, Box, Container, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage } from '@mui/icons-material';
import { pageVariants, containerVariants, itemVariants, glowVariants, scanlineEffect } from '../animations/pageTransitions';
import profileImage from '../assets/images/profile.jpg';

// Import icons
import pythonIcon from '../assets/icons/python.png';
import csharpIcon from '../assets/icons/csharp.png';
import cppIcon from '../assets/icons/cpp.png';
import javascriptIcon from '../assets/icons/javascript.png';
import unityIcon from '../assets/icons/unity.png';
import asepriteIcon from '../assets/icons/aseprite.png';
import unrealEngineIcon from '../assets/icons/UnrealEngine.png';

// Import your custom icons
// Add your icon imports here, for example:
// import pythonIcon from '../assets/icons/python.png';
// import csharpIcon from '../assets/icons/csharp.png';
// etc...

const Prologue = () => {
  const skills = [
    {
      name: 'Programming Languages & Tools',
      icon: <Code />,
      items: [
        { 
          name: 'Python',
          iconPath: pythonIcon
        },
        { 
          name: 'C#',
          iconPath: csharpIcon
        },
        { 
          name: 'C++',
          iconPath: cppIcon
        },
        { 
          name: 'JavaScript',
          iconPath: javascriptIcon
        },
      ],
    },
    {
      name: 'Game Engines & IDEs',
      icon: <Storage />,
      items: [
        { 
          name: 'Unity',
          iconPath: unityIcon
        },
        { 
          name: 'Unreal Engine',
          iconPath: unrealEngineIcon
        },
        { 
          name: 'Aseprite',
          iconPath: asepriteIcon
        },
      ],
    },
  ];

  const description = "🎮 Hi, I'm Ajith Kumar — a Game Developer turning ideas into interactive adventures. With Unity, C#, and a love for immersive play, I build games that entertain, engage, and leave a lasting impression.";

  // Split description into words for animation
  const words = description.split(' ');

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Container sx={{ ...scanlineEffect }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
            <motion.div variants={glowVariants} initial="initial" animate="animate">
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  mb: 2,
                  background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Game Developer
              </Typography>
            </motion.div>
            
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '200px', md: '250px' },
                  height: { xs: '200px', md: '250px' },
                  margin: '0 auto',
                  mb: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background: 'linear-gradient(45deg, #4ecca3, #ff6b6b, #4e54ff)',
                    borderRadius: '50%',
                    animation: 'spin 4s linear infinite',
                    zIndex: 0,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, #4ecca3, #ff6b6b, #4e54ff)',
                    borderRadius: '50%',
                    animation: 'spin 4s linear infinite',
                    filter: 'blur(15px)',
                    opacity: 0.3,
                    zIndex: 0,
                  },
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0deg)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  },
                }}
              >
                <Avatar
                  src={profileImage}
                  alt="Ajith Kumar"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid #0a192f',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 20px rgba(78, 204, 163, 0.3)',
                    bgcolor: 'rgba(78, 204, 163, 0.2)',
                  }}
                />
              </Box>
            </motion.div>
            
            {/* Animated Description */}
            <Box sx={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              mb: 6,
              background: 'linear-gradient(135deg, rgba(78, 204, 163, 0.1) 0%, rgba(78, 84, 255, 0.1) 100%)',
              padding: { xs: 2, md: 4 },
              borderRadius: '8px',
              border: '1px solid rgba(78, 204, 163, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #4ecca3, #ff6b6b, #4e54ff, transparent)',
              },
            }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
                {words.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        color: (word === 'Ajith' || word === 'Kumar') ? '#4ecca3' : 'text.primary',
                        fontWeight: (word === 'Ajith' || word === 'Kumar') ? 'bold' : 'normal',
                        display: 'inline-block',
                        mr: '4px',
                      }}
                    >
                      {word}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>

          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {skills.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Paper 
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                      animation: 'glow 2s linear infinite',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box 
                      sx={{ 
                        color: 'primary.main',
                        fontSize: '2rem',
                        mr: 2,
                        filter: 'drop-shadow(0 0 10px rgba(78, 204, 163, 0.5))',
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'primary.main',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                      gap: 2,
                    }}
                  >
                    {category.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Paper
                          sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            background: 'linear-gradient(135deg, rgba(78, 204, 163, 0.1) 0%, rgba(78, 84, 255, 0.1) 100%)',
                            border: '1px solid rgba(78, 204, 163, 0.2)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 0 15px rgba(78, 204, 163, 0.3)',
                              border: '1px solid rgba(78, 204, 163, 0.4)',
                              '& .icon': {
                                transform: 'scale(1.2)',
                              },
                            },
                          }}
                        >
                          <Box 
                            className="icon"
                            sx={{ 
                              width: '40px',
                              height: '40px',
                              transition: 'all 0.3s ease',
                              '& img': {
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: 'brightness(0.9)',
                              },
                              '&:hover img': {
                                filter: 'brightness(1.1)',
                              },
                            }}
                          >
                            <img 
                              src={item.iconPath} 
                              alt={item.name}
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 'medium',
                              textAlign: 'center',
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Prologue; 
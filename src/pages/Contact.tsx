import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Link,
  IconButton,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitHub,
  LinkedIn,
  Email,
  SportsEsports,
  Send,
  ContentCopy,
  CheckCircle,
  LocationOn,
  AccessTime,
  Work,
  Download,
  Public,
} from '@mui/icons-material';
import {
  pageVariants,
  containerVariants,
  itemVariants,
  glowVariants,
  scanlineEffect,
} from '../animations/pageTransitions';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const socialLinks = [
    {
      icon: <GitHub sx={{ fontSize: '2rem' }} />,
      url: 'https://github.com/AjithKumarkk',
      label: 'GitHub',
      description: 'Review my source code repositories',
    },
    {
      icon: <LinkedIn sx={{ fontSize: '2rem' }} />,
      url: 'https://linkedin.com/in/ajithkumarkk',
      label: 'LinkedIn',
      description: 'Connect professionally',
    },
    {
      icon: <SportsEsports sx={{ fontSize: '2rem' }} />,
      url: 'https://ajithkumarkk.itch.io/',
      label: 'itch.io',
      description: 'Play my indie game projects',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ajithkumaran000@gmail.com');
    setSnackbarMessage('Email address copied to clipboard!');
    setSnackbarOpen(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/docs/AJITH_KUMAR_K_K_RESUME.pdf`;
    link.download = 'AJITH_KUMAR_K_K_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarOpen(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate transmission over the network
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setSnackbarMessage('Quest submitted! I will get back to you shortly.');
      setSnackbarOpen(true);
    }, 2000);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Container maxWidth="lg" sx={{ ...scanlineEffect, py: 4 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <SportsEsports
                sx={{
                  fontSize: 60,
                  color: '#4ecca3',
                  mb: 2,
                  filter: 'drop-shadow(0 0 10px #4ecca3)',
                }}
              />
            </motion.div>
            <motion.div variants={glowVariants}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 1,
                  background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Comms Center
              </Typography>
            </motion.div>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', mt: 1 }}>
              Initialize contact protocol. Send a direct transmission or connect via networks.
            </Typography>
          </Box>

          {/* Grid Layout Container using Standard CSS Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
              gap: 4,
            }}
          >
            
            {/* Left Column: Interactive Form */}
            <motion.div variants={itemVariants}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  minHeight: '480px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
                  border: '1px solid rgba(78, 204, 163, 0.2)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                  },
                }}
              >
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="contact-form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          color: 'primary.main',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                      >
                        Submit a Quest
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                        Fill out the parameters below to log a new inquiry. Required fields are marked.
                      </Typography>

                      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        
                        {/* Row for Name and Email */}
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            gap: 2,
                          }}
                        >
                          <TextField
                            required
                            fullWidth
                            label="Name / Class"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(10, 25, 47, 0.3)',
                                '& fieldset': { borderColor: 'rgba(78, 204, 163, 0.2)' },
                                '&:hover fieldset': { borderColor: '#4ecca3' },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#7efff5',
                                  boxShadow: '0 0 10px rgba(126, 255, 245, 0.2)',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.6)',
                                '&.Mui-focused': { color: '#7efff5' },
                              },
                              '& .MuiOutlinedInput-input': { color: '#ffffff' },
                            }}
                          />
                          <TextField
                            required
                            fullWidth
                            label="Comms Address (Email)"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(10, 25, 47, 0.3)',
                                '& fieldset': { borderColor: 'rgba(78, 204, 163, 0.2)' },
                                '&:hover fieldset': { borderColor: '#4ecca3' },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#7efff5',
                                  boxShadow: '0 0 10px rgba(126, 255, 245, 0.2)',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.6)',
                                '&.Mui-focused': { color: '#7efff5' },
                              },
                              '& .MuiOutlinedInput-input': { color: '#ffffff' },
                            }}
                          />
                        </Box>

                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(10, 25, 47, 0.3)',
                              '& fieldset': { borderColor: 'rgba(78, 204, 163, 0.2)' },
                              '&:hover fieldset': { borderColor: '#4ecca3' },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7efff5',
                                boxShadow: '0 0 10px rgba(126, 255, 245, 0.2)',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.6)',
                              '&.Mui-focused': { color: '#7efff5' },
                            },
                            '& .MuiOutlinedInput-input': { color: '#ffffff' },
                          }}
                        />

                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={6}
                          label="Transmission Contents (Message)"
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: 'rgba(10, 25, 47, 0.3)',
                              '& fieldset': { borderColor: 'rgba(78, 204, 163, 0.2)' },
                              '&:hover fieldset': { borderColor: '#4ecca3' },
                              '&.Mui-focused fieldset': {
                                borderColor: '#7efff5',
                                boxShadow: '0 0 10px rgba(126, 255, 245, 0.2)',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.6)',
                              '&.Mui-focused': { color: '#7efff5' },
                            },
                            '& .MuiOutlinedInput-input': { color: '#ffffff' },
                          }}
                        />

                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            endIcon={isSubmitting ? null : <Send />}
                            sx={{
                              minWidth: '160px',
                              height: '48px',
                              background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
                              color: '#0a192f',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #7efff5 30%, #4ecca3 90%)',
                                boxShadow: '0 0 15px rgba(78, 204, 163, 0.6)',
                              },
                            }}
                          >
                            {isSubmitting ? (
                              <CircularProgress size={24} sx={{ color: '#0a192f' }} />
                            ) : (
                              'Transmit'
                            )}
                          </Button>
                        </Box>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      style={{ textAlign: 'center' }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: 80,
                          color: 'primary.main',
                          mb: 3,
                          filter: 'drop-shadow(0 0 15px rgba(78, 204, 163, 0.6))',
                        }}
                      />
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          color: 'primary.main',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 'bold',
                        }}
                      >
                        Transmission Sent!
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', maxWidth: '400px', mx: 'auto', mb: 4 }}
                      >
                        Your message has successfully bypassed the firewall and logged onto my communication queue. I
                        will reply as soon as possible.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => setIsSuccess(false)}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          px: 4,
                          '&:hover': {
                            borderColor: 'primary.light',
                            backgroundColor: 'rgba(78, 204, 163, 0.1)',
                            boxShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                          },
                        }}
                      >
                        New Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>

            {/* Right Column: Status & Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              
              {/* System Status Panel */}
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #4e54ff, transparent)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#787dff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 'bold',
                      }}
                    >
                      System Status
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: '#4ecca3',
                          boxShadow: '0 0 8px #4ecca3',
                          animation: 'pulse 1.5s infinite alternate',
                          '@keyframes pulse': {
                            '0%': { transform: 'scale(0.8)', opacity: 0.5 },
                            '100%': { transform: 'scale(1.2)', opacity: 1 },
                          },
                        }}
                      />
                      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        ONLINE
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Work sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Availability
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                          Open for Contracts & Full-time Roles
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <LocationOn sx={{ color: 'secondary.main', fontSize: '1.2rem' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Current Coordinates
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                          Kerala, India (IST / UTC+5:30)
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Public sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Relocation
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                          Open to opportunities in India and internationally
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <AccessTime sx={{ color: 'warning.main', fontSize: '1.2rem' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Response Speed
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                          Within 24 Hours
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>

              {/* Resume Spec Panel */}
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #ffd93d, transparent)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'warning.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    Quest Specs (Resume)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                    Download the complete profile spec sheet (PDF) for detailed information on experience, skills, and projects.
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Download />}
                    onClick={handleDownloadResume}
                    sx={{
                      background: 'linear-gradient(45deg, #ffd93d 30%, #ffe584 90%)',
                      color: '#0a192f',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ffe584 30%, #ffd93d 90%)',
                        boxShadow: '0 0 15px rgba(255, 217, 61, 0.6)',
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </Paper>
              </motion.div>

              {/* Direct Mail Panel */}
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #ff6b6b, transparent)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'secondary.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    Direct E-Mail
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: 'rgba(10, 25, 47, 0.5)',
                      border: '1px solid rgba(255, 107, 107, 0.2)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email sx={{ color: 'secondary.main' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          fontWeight: 'bold',
                          color: 'text.primary',
                        }}
                      >
                        ajithkumaran000@gmail.com
                      </Typography>
                    </Box>
                    <Tooltip title="Copy Email">
                      <IconButton
                        onClick={handleCopyEmail}
                        sx={{
                          color: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 107, 107, 0.1)',
                            color: 'secondary.light',
                          },
                        }}
                      >
                        <ContentCopy sx={{ fontSize: '1.1rem' }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Paper>
              </motion.div>

              {/* Social Networks Panel */}
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
                    border: '1px solid rgba(78, 204, 163, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'primary.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    Active Nodes
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {socialLinks.map((link, index) => (
                      <Paper
                        key={index}
                        component={Link}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          p: 2,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          backgroundColor: 'rgba(10, 25, 47, 0.3)',
                          border: '1px solid rgba(78, 204, 163, 0.1)',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: 'rgba(78, 204, 163, 0.1)',
                            border: '1px solid rgba(78, 204, 163, 0.4)',
                            boxShadow: '0 0 15px rgba(78, 204, 163, 0.2)',
                            transform: 'translateX(5px)',
                            '& .social-icon': {
                              color: '#7efff5',
                              filter: 'drop-shadow(0 0 5px #7efff5)',
                            },
                          },
                        }}
                      >
                        <Box
                          className="social-icon"
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {link.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.primary', fontWeight: 'bold', textTransform: 'uppercase' }}
                          >
                            {link.label}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {link.description}
                          </Typography>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </motion.div>

            </Box>

          </Box>
        </motion.div>
      </Container>

      {/* Snackbar feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{
            backgroundColor: '#10203d',
            color: '#7efff5',
            border: '1px solid #4ecca3',
            boxShadow: '0 0 20px rgba(78, 204, 163, 0.3)',
            '& .MuiAlert-icon': { color: '#4ecca3' },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default Contact;
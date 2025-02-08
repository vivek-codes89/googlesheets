import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Button, 
  TextField,
  Divider,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import BusinessIcon from '@mui/icons-material/Business';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    'Cloud Solutions',
    'Cybersecurity',
    'Digital Transformation',
    'IT Consulting',
    'Software Development',
    'Data Analytics'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Case Studies',
    'Client Testimonials'
  ];

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      text: '123 Business Avenue, Tech City, TC 12345'
    },
    {
      icon: <EmailIcon />,
      text: 'contact@itconsultingpro.com'
    },
    {
      icon: <PhoneIcon />,
      text: '+1 (555) 123-4567'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2a5298, #1e3c72, #2a5298)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessIcon sx={{ fontSize: 40, mr: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    IT CONSULTING PRO
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Empowering businesses through innovative IT solutions. Your trusted partner in digital transformation and technological excellence.
                </Typography>
              </motion.div>
              
              {/* Social Media Icons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                        }
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: 'pointer',
                      opacity: 0.8,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    {service}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {company.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: 'pointer',
                      opacity: 0.8,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Stay Updated
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                Subscribe to our newsletter for the latest tech insights and updates.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                    },
                    '& input::placeholder': {
                      color: 'rgba(255,255,255,0.7)',
                    },
                  }}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: 'white',
                      color: '#1e3c72',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)',
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </Box>
            </Box>

            {/* Contact Info */}
            <Box>
              {contactInfo.map((info, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton size="small" sx={{ color: 'white', mr: 1 }}>
                    {info.icon}
                  </IconButton>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} IT Consulting Pro. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  opacity: 0.8,
                  cursor: 'pointer',
                  '&:hover': { opacity: 1 },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

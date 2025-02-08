import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Here you would typically make an API call to your backend
        // await axios.post('/api/contact', formData);
        
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSnackbar({
          open: true,
          message: 'Thank you for your message! We will contact you soon.',
          severity: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });

        // Close dialog after successful submission
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'There was an error sending your message. Please try again.',
          severity: 'error'
        });
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email Us',
      content: 'contact@itconsultingpro.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      content: '+1 (555) 123-4567'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Visit Us',
      content: '123 Business Avenue, Tech City, TC 12345'
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 700, 
              color: '#1e3c72',
              mb: 3 
            }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ color: '#495057', mb: 4 }}>
              Have a question or need assistance? We're here to help! Reach out to us through any of these channels.
            </Typography>
          </Box>
          
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(30, 60, 114, 0.03)',
                  borderRadius: 2
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: '#1e3c72',
                    color: '#fff',
                    mr: 2,
                    '&:hover': { backgroundColor: '#2a5298' }
                  }}
                >
                  {info.icon}
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e3c72' }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#495057' }}>
                    {info.content}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 4 },
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone (optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company (optional)"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;

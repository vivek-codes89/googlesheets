import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  useTheme, 
  useMediaQuery, 
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import ContactUs from './ContactUs';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openContact, setOpenContact] = useState(false);

  const handleContactClick = () => {
    setOpenContact(true);
  };

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <AppBar 
          position="static" 
          sx={{ 
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
              >
                <BusinessIcon sx={{ mr: 2, fontSize: 35, color: '#fff' }} />
              </motion.div>
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                sx={{ 
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                IT CONSULTING PRO
              </Typography>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                onClick={handleContactClick}
                sx={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                  }
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </Toolbar>
        </AppBar>
      </motion.div>

      <Dialog
        fullScreen={isMobile}
        maxWidth="lg"
        open={openContact}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : '16px',
            width: isMobile ? '100%' : '90%',
            maxWidth: '1200px',
            margin: isMobile ? 0 : '32px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end',
          p: 2,
          position: 'absolute',
          right: 0,
          zIndex: 1
        }}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              color: '#1e3c72',
              '&:hover': {
                background: 'rgba(30, 60, 114, 0.08)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0 }}>
          <ContactUs onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;

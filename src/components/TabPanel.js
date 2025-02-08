import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TabPanel = ({ section, data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        background: '#f8f9fa',
        borderRadius: '0 0 16px 16px',
      }}
    >
      <Box 
        sx={{ 
          p: { xs: 2, sm: 3 }, 
          display: "grid",
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fit, minmax(280px, 1fr))',
          },
          gap: { xs: 2, sm: 3 },
        }}
      >
        {data?.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              sx={{ 
                height: '100%',
                background: '#ffffff',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
                },
                '&:hover': {
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: '#1e3c72',
                      mb: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    {item.Key}
                  </Typography>
                  <IconButton 
                    size="small"
                    sx={{ 
                      color: '#1e3c72',
                      opacity: 0.7,
                      '&:hover': { opacity: 1, transform: 'translateX(2px)' }
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#495057',
                    lineHeight: 1.7,
                    fontSize: '0.95rem'
                  }}
                >
                  {item.Value}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default TabPanel; 
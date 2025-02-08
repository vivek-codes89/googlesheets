import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, Tab, Box } from '@mui/material';

const TabNavigation = ({ sections, tabIndex, setTabIndex }) => {
  return (
    <Box sx={{ 
      borderBottom: '2px solid rgba(30, 60, 114, 0.1)',
      mb: 3,
      background: '#ffffff',
      borderRadius: '16px 16px 0 0',
      padding: '0.75rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          variant="scrollable"
          scrollButtons={true}
          allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-indicator': { 
              backgroundColor: '#1e3c72',
              height: 3,
              borderRadius: '3px 3px 0 0'
            },
            '& .MuiTabs-scrollButtons': {
              '&.Mui-disabled': { opacity: 0.3 },
              '&:hover': { backgroundColor: 'rgba(30, 60, 114, 0.08)' },
              width: { xs: '35px', sm: '40px' },
              '& .MuiSvgIcon-root': {
                fontSize: { xs: '1.2rem', sm: '1.5rem' }
              }
            },
            '& .MuiTab-root': { 
              textTransform: 'none',
              fontWeight: 600,
              color: '#495057',
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              minHeight: { xs: 40, sm: 48 },
              padding: { xs: '8px 16px', sm: '12px 24px' },
              borderRadius: '8px',
              marginRight: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#1e3c72',
                backgroundColor: 'rgba(30, 60, 114, 0.04)'
              }
            },
            '& .Mui-selected': { 
              color: '#1e3c72 !important',
              fontWeight: 700,
              backgroundColor: 'rgba(30, 60, 114, 0.08) !important'
            },
          }}
        >
          {sections.map((section, index) => (
            <Tab 
              key={index} 
              label={
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.div>
              }
            />
          ))}
        </Tabs>
      </motion.div>
    </Box>
  );
};

export default TabNavigation; 
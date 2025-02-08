import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { motion } from "framer-motion";
import { fetchGoogleSheetsData } from "./api/fetchData";
import Header from "./components/Header";
import TabNavigation from "./components/TabNavigation";
import TabPanel from "./components/TabPanel";
import Footer from './components/Footer';

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);

  const groupExcelData = (data) => {
    return data.reduce((acc, item) => {
      if (!acc[item.Section]) acc[item.Section] = [];
      acc[item.Section].push(item);
      return acc;
    }, {});
  };

  const getExcelData = async () => {
    try {
      const response = await fetchGoogleSheetsData();
      if (response) {
        setGroupedData(groupExcelData(response));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExcelData();
  }, []);

  const sections = Object.keys(groupedData);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
        <TabNavigation 
          sections={sections} 
          tabIndex={tabIndex} 
          setTabIndex={setTabIndex} 
        />
        <TabPanel 
          section={sections[tabIndex]} 
          data={groupedData[sections[tabIndex]]} 
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;

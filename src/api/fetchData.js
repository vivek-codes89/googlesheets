export const fetchGoogleSheetsData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxasYmGnOLGeci81PH4QLuNEr3cxC1-OwHDp9zBiKV2nSAxcmnISe_pEBGzoQ6LW8Jq/exec"
      );
      const result = await response.json()
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return {};
    }
  };
  
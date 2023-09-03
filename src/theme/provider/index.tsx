import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const theme = {
    colors: {
      purple: "#6c19de",
      white: "#FFFFFF",
      gray: "#95aac9",
      black: "#2F2C5D",
    },

    fontSizes: {
      sm: "12px",
      md: "16px",
      lg: "18px",
      xl: "22px",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;

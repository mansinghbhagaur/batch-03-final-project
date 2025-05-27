import { createTheme } from "@mui/material";
import { useState } from "react";
import { store } from './context';
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

export const ThemeProvider = ({ children }) => {
      const [mode, setMode] = useState('light');

      const toggleTheme = () => {
            setMode(mode === 'light' ? "dark" : "light");
      }

      const themeLight = createTheme({
            palette: {
                  mode: "light",
                  primary: {
                        main: "#1976d2",
                  },
                  secondary: {
                        main: "#f44336",
                  },
            }
      });

      const themeDark = createTheme({
            palette: {
                  mode: "dark",
                  primary: {
                        main: "#1976d2",
                  },
                  secondary: {
                        main: "#f44336",
                  },
            }
      });

      const theme = mode === 'light' ? themeLight : themeDark;

      return <store.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                  {children}
            </MuiThemeProvider>
      </store.Provider>;
}
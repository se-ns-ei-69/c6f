import { createTheme } from '@mui/material';

export const materialTheme = createTheme({
  palette: {
    mode: 'light',
    secondary: {
      main: '#BB2649',
      contrastText: '#fff'
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#BB2649',
            backgroundColor: 'rgb(255,255,255)'
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgb(255,255,255)'
          },
          '&:hover': {
            backgroundColor: 'rgba(129,129,129,0.53)'
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&': {
            borderRadius: '0',
            color: '#fff',
            backgroundColor: '#BB2649'
          },
          '&:hover': {
            backgroundColor: 'rgba(129,129,129,0.53)'
          },
          '&.Mui-selected': {
            color: '#BB2649',
            backgroundColor: 'rgb(255,255,255)'
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgb(255,255,255)'
          }
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '&': {
            borderRadius: '0',
            backgroundColor: '#fff'
          }
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&': {
            borderRadius: '0'
          }
        }
      }
    }
  }
});

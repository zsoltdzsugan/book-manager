// import { createTheme } from "@mui/material/styles";

// export default createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#e97451",
//     },
//     secondary: {
//       main: "#ffd27f",
//     },
//     background: {
//       default: "#fdf1da",
//       paper: "#fff7e6",
//     },
//     warning: {
//       main: "#ed6c02",
//     },
//     success: {
//       main: "#2e7d32",
//     },
//     error: {
//       main: "#d32f2f",
//     },
//     other: {
//       sepia: "#f9f6c8",
//       sepiaHue: "#fdfacb",
//       paper: "#fefdea",
//       gray: "#454545",
//       green: "#698c6a",
//       greenAlt: "#5b795c",
//       pink: "#e0607eff",
//       orange: "#f7bd87",
//       orangeAlt: "#ED9328",
//     },
//   },
//   components: {
//     // MuiButton: {
//     //   styleOverrides: {
//     //     root: {
//     //       backgroundColor: "#565264ff", // Default button background color
//     //       color: "#fefae0ff", // Default button text color
//     //       "&:hover": {
//     //         backgroundColor: "#565264ff", // Button color on hover
//     //       },
//     //     },
//     //   },
//     // },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           color: "#56638aff",
//           underlineColor: "e0607eff", // Default button text color
//           "&:hover": {
//             color: "#e0607eff", // Button color on hover
//           },
//         },
//       },
//     },
//     MuiSwitch: {
//       styleOverrides: {
//         root: {
//           width: 46,
//           height: 27,
//           padding: 0,
//           margin: 8,
//         },
//         switchBase: {
//           padding: 1,
//           "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
//             transform: "translateX(16px)",
//             color: "#fff",
//             "& + $track": {
//               opacity: 1,
//               border: "none",
//             },
//           },
//         },
//         thumb: {
//           width: 24,
//           height: 24,
//         },
//         track: {
//           borderRadius: 13,
//           border: "1px solid #bdbdbd",
//           backgroundColor: "#fafafa",
//           opacity: 1,
//           transition:
//             "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//           border: 0,
//           borderRadius: 3,
//           boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//           color: "white",
//           height: 48,
//           padding: "0 30px",
//         },
//       },
//     },
//   },
// });

export const themeOptionLight = {
  palette: {
    mode: "light",
    text: {
      main: "#333",
    },
    background: {
      main: "#fdf1da",
      paper: "#fff7e6",
    },
    primary: {
      main: "#e97451",
      light: "#ED8F73",
      dark: "#A35138",
      contrastText: "##000000DD",
    },
    secondary: {
      main: "#56638a",
      light: "#7782A1",
      dark: "#3C4560",
      contrastText: "#fff",
    },
    link: {
      main: "#ffd27f",
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#2e7d32",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'", // Set your desired font family
    allVariants: {
      color: "#000", // Default text color for all typography variants
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#e97451", // Default button background color
          "&:hover": {
            backgroundColor: "#56638a", // Button color on hover
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#e97451",
          underlineColor: "#e97451", // Default button text color
          "&:hover": {
            color: "#ffd27f", // Button color on hover
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + $track": {
              opacity: 1,
              border: "none",
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: "1px solid #bdbdbd",
          backgroundColor: "#fafafa",
          opacity: 1,
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const themeOptionDark = {
  palette: {
    mode: "dark",
    text: {
      main: "#fff",
    },
    background: {
      main: "#121212",
    },
    primary: {
      main: "#e97451",
    },
    secondary: {
      main: "#ffd27f",
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#2e7d32",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'", // Set your desired font family
    allVariants: {
      color: "#000", // Default text color for all typography variants
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + $track": {
              opacity: 1,
              border: "none",
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: "1px solid #bdbdbd",
          backgroundColor: "#fafafa",
          opacity: 1,
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

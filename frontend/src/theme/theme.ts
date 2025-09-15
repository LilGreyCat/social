import { createTheme } from '@mui/material/styles';
import { Audiowide, Montserrat, Source_Code_Pro } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const EMOJI_FALLBACKS =
  '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';

const BODY_STACK = `${sourceCodePro.style.fontFamily}, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, ${EMOJI_FALLBACKS}`;
const HEADING_STACK = `${montserrat.style.fontFamily}, ${BODY_STACK}`;
const LOGO_STACK = `${audiowide.style.fontFamily}, ${HEADING_STACK}`;

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: "#EB5E28" },
    secondary: { main: "#252422" },
    background: { default: "#212121", paper: "#303030" },
    text: {
      primary: "#fffcf2",
      secondary: "#fffcf2d0",
      disabled: "#fffcf23d",

      muted: "#ffffff25",
      highlight: "#EB5E28",
      inverse: "#212121",
    },
  },

  shape: { borderRadius: 8 },
  typography: {
    fontFamily: BODY_STACK,

    // Headings use Montserrat
    h1: { fontFamily: HEADING_STACK, fontWeight: 800, letterSpacing: "-0.02em", fontSize: "3rem" },
    h2: { fontFamily: HEADING_STACK, fontWeight: 700, letterSpacing: "-0.01em", fontSize: "2.25rem" },
    h3: { fontFamily: HEADING_STACK, fontWeight: 700, fontSize: "1.875rem" },
    h4: { fontFamily: HEADING_STACK, fontWeight: 700, fontSize: "1.5rem" },
    h5: { fontFamily: HEADING_STACK, fontWeight: 600, fontSize: "1.25rem" },
    h6: { fontFamily: HEADING_STACK, fontWeight: 600, fontSize: "1.125rem" },

    button: { textTransform: 'none', fontWeight: 600 },

    logo: {
      fontFamily: LOGO_STACK,
      fontWeight: 400,
      letterSpacing: "0.04em",
      fontSize: "1.5rem",
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": { colorScheme: "dark" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
  },
});

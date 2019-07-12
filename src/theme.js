export default {
  fonts: {
    body: 'Georgia, Cambria, "Times New Roman", Times, serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  fontWeights: {
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  initialColorMode: "light",
  colors: {
    text: "#392a25",
    muted: "#aaaaaa",
    background: "#f8f8f8",
    foreground: "#ffffff",
    primary: "#92b955",
    secondary: "#9f8a6d",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#111111",
        foreground: "#333333",
        primary: "#1da1f2",
      }
    }
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ["40em", "64em", "80em"],
  // add this to the bottom of the theme object
  styles: {
    Layout: {
      color: "text",
      backgroundColor: "background",
      fontFamily: "body",
      lineHeight: "body"
    },
    Container: {
      maxWidth: 1160,
      padding: 3
    }
  }
}

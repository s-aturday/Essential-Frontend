import { createTheme } from "../types";

const tokens = {
  semantic: {
    red: {
      c100: "#F46E6E",
      c200: "#E44F4F",
      c300: "#D74747",
      c400: "#B43434",
    },
    green: {
      c100: "#60D26A",
      c200: "#40B44B",
      c300: "#31A33C",
      c400: "#237A2B",
    },
    dark: {
      c100: "#121212",
      c200: "#0D0D0D",
      c300: "#080808",
      c400: "#050505",
    },
    gray: {
      c100: "#7F8D9B",
      c200: "#5B6B7B",
      c300: "#445464",
      c400: "#2B3D4E",
    },
    silver: {
      c100: "#DEDEDE",
      c200: "#B6CAD7",
      c300: "#8EA3B0",
      c400: "#617A8A",
    },
    yellow: {
      c100: "#FFF599",
      c200: "#FCEC61",
      c300: "#D8C947",
      c400: "#AFA349",
    },
    rose: {
      c100: "#DB3D61",
      c200: "#8A293B",
      c300: "#812435",
      c400: "#701B2B",
    },
  },
  pink: {
    c50: "#ffe0f0",
    c100: "#ffb3d1",
    c200: "#ff85b3",
    c300: "#ff578c",
    c400: "#ff2a66",
    c500: "#ff0040",
    c600: "#d20033",
    c700: "#a60026",
    c800: "#7a001a",
    c900: "#4d000d"
  },
  purple: {
    c50: "#aaafff",
    c100: "#8288fe",
    c200: "#5a62eb",
    c300: "#454cd4",
    c400: "#333abe",
    c500: "#292d86",
    c600: "#1f2363",
    c700: "#191b4a",
    c800: "#111334",
    c900: "#0b0d22"
  },
  shade: {
    c25: "#9c9c9c",
    c50: "#7c7c7c",
    c100: "#666666",
    c200: "#4f4f4f",
    c300: "#404040",
    c400: "#343434",
    c500: "#282828",
    c600: "#202020",
    c700: "#1a1a1a",
    c800: "#151515",
    c900: "#0e0e0e"
  },
  ash: {
    c50: "#8d8d8d",
    c100: "#6b6b6b",
    c200: "#545454",
    c300: "#3c3c3c",
    c400: "#313131",
    c500: "#2c2c2c",
    c600: "#252525",
    c700: "#1e1e1e",
    c800: "#181818",
    c900: "#111111"
  },
  blue: {
    c50: "#ADADF5",
    c100: "#7979CC",
    c200: "#5D5DAE",
    c300: "#3B3B8C",
    c400: "#2A2A71",
    c500: "#1F1F50",
    c600: "#1B1B41",
    c700: "#171736",
    c800: "#101020",
    c900: "#0B0B13",
  }
};

export default createTheme({
  name: "pink",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.pink.c200,
        secondary: tokens.shade.c50
      },

      pill: {
        background: tokens.shade.c200,
        backgroundHover: tokens.shade.c200,
        highlight: tokens.pink.c200,

        activeBackground: tokens.shade.c200,
      },

      global: {
        accentA: tokens.pink.c200,
        accentB: tokens.pink.c300
      },

      lightBar: {
        light: tokens.pink.c200
      },

      buttons: {
        toggle: tokens.pink.c300,
        toggleDisabled: tokens.ash.c500,

        secondary: tokens.ash.c700,
        secondaryHover: tokens.ash.c700,
        purple: tokens.pink.c500,
        purpleHover: tokens.pink.c400,
        cancel: tokens.ash.c500,
        cancelHover: tokens.ash.c300
      },

      background: {
        main: tokens.semantic.dark.c400,
        secondary: tokens.semantic.dark.c300,
        secondaryHover: tokens.semantic.dark.c200,
        accentA: tokens.pink.c200,
        accentB: tokens.blue.c500,
      },

      modal: {
        background: tokens.shade.c800,
      },

      type: {
        logo: tokens.pink.c100,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c50,
        divider: tokens.ash.c500,
        secondary: tokens.ash.c100,
        link: tokens.pink.c100,
        linkHover: tokens.pink.c50
      },

      search: {
        background: tokens.shade.c500,
        hoverBackground: tokens.shade.c600,
        focused: tokens.shade.c400,
        placeholder: tokens.shade.c100,
        icon: tokens.shade.c100
      },

      mediaCard: {
        hoverBackground: tokens.shade.c600,
        hoverAccent: tokens.shade.c25,
        hoverShadow: tokens.shade.c900,
        shadow: tokens.shade.c700,
        barColor: tokens.ash.c200,
        barFillColor: tokens.pink.c100,
        badge: tokens.shade.c700,
        badgeText: tokens.ash.c100
      },

      largeCard: {
        background: tokens.shade.c600,
        icon: tokens.pink.c400
      },

      dropdown: {
        background: tokens.shade.c600,
        altBackground: tokens.shade.c700,
        hoverBackground: tokens.shade.c500,
        text: tokens.shade.c50,
        secondary: tokens.shade.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.shade.c500
      },

      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.shade.c600,
        inputBgHover: tokens.shade.c500,
        wordBackground: tokens.shade.c500,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.ash.c50
      },

      settings: {
        sidebar: {
          activeLink: tokens.shade.c600,
          badge: tokens.shade.c900,

          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c50,
            icon: tokens.shade.c50,
            iconActivated: tokens.pink.c200,
            activated: tokens.pink.c50
          }
        },

        card: {
          border: tokens.shade.c400,
          background: tokens.shade.c400,
          altBackground: tokens.shade.c400
        },

        saveBar: {
          background: tokens.shade.c800
        }
      },

      utils: {
        divider: tokens.ash.c300
      },

      errors: {
        card: tokens.shade.c800,
        border: tokens.ash.c500,

        type: {
          secondary: tokens.ash.c100
        }
      },

      about: {
        circle: tokens.ash.c500,
        circleText: tokens.ash.c50
      },

      editBadge: {
        bg: tokens.ash.c500,
        bgHover: tokens.ash.c400,
        text: tokens.ash.c50
      },

      progress: {
        background: tokens.ash.c50,
        preloaded: tokens.ash.c50,
        filled: tokens.pink.c200
      },

      video: {
        buttonBackground: tokens.ash.c200,

        autoPlay: {
          background: tokens.ash.c700,
          hover: tokens.ash.c500
        },

        scraping: {
          card: tokens.shade.c700,
          loading: tokens.pink.c200,
          noresult: tokens.ash.c100
        },

        audio: {
          set: tokens.pink.c200
        },

        context: {
          background: tokens.ash.c900,
          light: tokens.shade.c50,
          border: tokens.ash.c600,
          hoverColor: tokens.ash.c600,
          buttonFocus: tokens.ash.c200,
          flagBg: tokens.ash.c500,
          inputBg: tokens.ash.c600,
          buttonOverInputHover: tokens.ash.c500,
          inputPlaceholder: tokens.ash.c200,
          cardBorder: tokens.ash.c700,
          slider: tokens.ash.c50,
          sliderFilled: tokens.pink.c200,

          buttons: {
            list: tokens.ash.c700,
            active: tokens.ash.c900
          },

          closeHover: tokens.ash.c800,

          type: {
            secondary: tokens.ash.c200,
            accent: tokens.pink.c200
          }
        }
      }
    }
  }
});

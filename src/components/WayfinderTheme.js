import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const tagHelpers = createMultiStyleConfigHelpers(["container", "label"]);
const inputHelpers = createMultiStyleConfigHelpers(["field"]);
const selectHelpers = createMultiStyleConfigHelpers(["field"]);
const statHelpers = createMultiStyleConfigHelpers(["label", "number"]);
const cardHelpers = createMultiStyleConfigHelpers([
  "container",
  "header",
  "body",
  "footer",
]);
const menuHelpers = createMultiStyleConfigHelpers(["list", "icon", "item"]);

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    fontFamily: "mono",
    textTransform: "uppercase",
    borderRadius: "0.5rem",
    transitionTimingFunction: "ease-in",
    transitionDuration: "0.1s",
    _hover: {
      transform: "translateY(-2px)",
      shadow: "md",
    },
    _active: {
      transform: "translateY(0px)",
      shadow: "xs",
    },
  },
  sizes: {
    sm: {
      fontSize: "sm",
      p: "0.75rem 1.5rem 0.25rem 0.5rem",
    },
    md: {
      fontSize: "sm",
      p: "0.75rem 1.5rem 0.25rem 0.5rem",
    },
  },
  variants: {
    primary: {
      bg: "amethyst",
      color: "white",
      _hover: { bg: "midnight" },
    },
    secondary: {
      border: "1px solid",
      borderColor: "midnight",
      color: "midnight",
      bg: "transparent",
      _hover: {
        bg: "naplesYellow",
      },
    },
    tertiary: {
      bg: "midnight",
      color: "white",
      _hover: { bg: "amethyst" },
    },
    flushed: {
      borderRadius: "0",
      color: "darkGray",
      p: "0.75rem 0 0.25rem 0",
      _hover: {
        color: "amethyst",
        shadow: "none",
        borderBottom: "2px solid",
      },
      _active: { shadow: "none" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});

const Tag = tagHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      fontFamily: "mono",
      fontSize: "sm",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "0.5rem",
      p: "0.1875rem 1rem",
      color: "darkGray",
    },
  },
  variants: {
    outline: {
      container: {
        bg: "transparent",
        border: "1px solid",
        borderColor: "darkGray",
      },
    },
    neutral: {
      container: {
        bg: "mediumGray",
      },
    },
    warning: {
      container: {
        bg: "naplesYellow",
      },
    },
    error: {
      container: {
        bg: "apricot",
        color: "white",
      },
    },
    info: {
      container: {
        bg: "amethyst",
        color: "white",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

const Input = inputHelpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      p: "0.75rem 1.5rem 0.25rem 0",
      fontFamily: "mono",
      fontSize: "md",
    },
  },
  variants: {
    flushed: {
      field: {
        borderColor: "darkGray",
        _placeholder: {
          color: "darkGray",
          opacity: "0.6",
        },
        _focusVisible: {
          borderColor: "amethyst",
        },
      },
    },
  },
  defaultProps: {
    variant: "flushed",
  },
});

const Select = selectHelpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      fontFamily: "mono",
      fontSize: "md",
      p: "0.75rem 1.5rem 0.25rem 0",
    },
  },
  variants: {
    flushed: {
      field: {
        borderColor: "darkGray",
        _focusVisible: {
          borderColor: "amethyst",
        },
      },
    },
  },
  defaultProps: {
    variant: "flushed",
  },
});

const FormLabel = {
  baseStyle: {
    fontFamily: "mono",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "sm",
    color: "darkGray",
  },
};

const Stat = statHelpers.defineMultiStyleConfig({
  baseStyle: {
    label: {
      fontFamily: "mono",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "darkGray",
    },
    number: {
      fontFamily: "mono",
      fontWeight: "regular",
      color: "darkGray",
      p: "0.75rem 1.5rem 0.25rem 0",
    },
  },
  sizes: {
    md: {
      label: {
        fontSize: "sm",
      },
      number: {
        height: "2.5rem",
        fontSize: "md",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

const Card = cardHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      borderRadius: "0.5rem",
      boxShadow: "md",
      overflow: "hidden",
      transitionTimingFunction: "ease-in",
      transitionDuration: "0.1s",
    },
    body: {
      p: "1.5rem",
    },
  },
  variants: {
    outline: {
      container: {
        border: "1px solid",
        bgColor: "transparent",
        borderColor: "mediumGray !important",
      },
    },
    solid: {
      container: {
        color: "transparent",
      },
    },
    button: {
      container: {
        userSelect: "none",
        cursor: "pointer",
        border: "1px solid",
        bgColor: "transparent",
        borderColor: "mediumGray !important",
        transitionTimingFunction: "ease-in",
        transitionDuration: "0.1s",
        _hover: {
          transform: "translateY(-2px)",
          borderColor: "amethyst !important",
          shadow: "lg",
        },
        _active: {
          bgColor: "#8A46AC11",
          transform: "translateY(0px)",
          shadow: "xs",
        },
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
});

const Menu = menuHelpers.defineMultiStyleConfig({
  baseStyle: {
    list: {
      minW: "16rem",
      borderRadius: "0.5rem",
      p: "0.5rem",
      bgColor: "rgba( 255, 255, 255, 0.75 )",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(0.5rem)",
      WebkitBackdropFilter: "blur(0.5rem)",
      border: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    item: {
      fontSize: "lg",
      textTransform: "uppercase",
      fontFamily: "mono",
      fontWeight: "bold",
      p: "0.75rem 1.5rem 0.25rem 1rem",
      borderRadius: "0.5rem",
      bgColor: "transparent",

      _hover: {
        bgColor: "rgba(255, 255, 255, 0.6)",
      },
      _focus: {
        bgColor: "rgba(255, 255, 255, 0.6)",
      },
    },
    divider: {
      opacity: "1",
      borderBottom: "2px solid",
      borderColor: "mediumGray",
    },
  },
});

const colors = {
  colors: {
    white: "#FFFFFF",
    mediumGray: "#D8D8D8",
    darkGray: "#323232",
    black: "#000000",
    midnight: "#011542",
    amethyst: "#8A46AC",
    marina: "#AEFFF7",
    apricot: "#F28B74",
    naplesYellow: "#F0CF65",
  },
};

const fonts = {
  fonts: {
    serif: "'IBM Plex Serif', serif",
    mono: "'IBM Plex Mono', monospace",
    body: "'IBM Plex Serif', serif",
    heading: "'IBM Plex Mono', monospace",
  },
};

const config = {
  styles: {
    global: (props) => ({
      body: {
        bg: mode(
          "linear-gradient(to bottom, #F0CF6522 0%, white 50%)",
          "midnight"
        )(props),
      },
    }),
  },
};

const components = {
  components: {
    Button,
    Tag,
    Input,
    Select,
    FormLabel,
    Stat,
    Card,
    Menu,
  },
};

const theme = extendTheme(colors, fonts, components, config);
export default theme;

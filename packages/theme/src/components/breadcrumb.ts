import { mode } from "@chakra-ui/theme-tools"
const parts = ["link", "separator", "activeLink"]
type Dict = Record<string, any>

const baseStyleLink = (props: Dict) => {
  return {
    transition: "all 0.15s ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    fontWeight: "medium",
    color: mode("gray.500", "gray.400")(props),
    _hover: {
      color: mode("gray.700", "gray.200")(props),
    },
    _focus: {
      boxShadow: "outline",
    },
  }
}

const baseStyleActiveLink = (props: Dict) => {
  return {
    transition: "all 0.15s ease-out",
    textDecoration: "none",
    outline: "none",
    fontWeight: "medium",
    color: mode("gray.700", "gray.200")(props),
    _hover: {
      color: mode("gray.700", "gray.200")(props),
    },
  }
}

const baseStyleSeparator = (props: Dict) => {
  return {
    color: mode("gray.400", "gray.500")(props),
  }
}

const baseStyle = (props: Dict) => ({
  link: baseStyleLink(props),
  activeLink: baseStyleActiveLink(props),
  separator: baseStyleSeparator(props),
})

export default {
  parts,
  baseStyle,
}

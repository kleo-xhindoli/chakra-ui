import { mode, transparentize } from "@chakra-ui/theme-tools"

type Dict = Record<string, any>

const baseStyle = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
}

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme)
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme)

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  }
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props
  const borderColor = mode(`gray.300`, `whiteAlpha.300`)(props)
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    boxShadow: "sm",
    ...variantGhost(props),
  }
}

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props

  if (c === "gray")
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      _hover: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    }
  else if (c === "white")
    return {
      bg: mode(`white`, `whiteAlpha.50`)(props),
      border: "1px solid",
      borderColor: mode(`gray.300`, `whiteAlpha.400`)(props),
      boxShadow: "sm",
      color: mode(`gray.700`, `whiteAlpha.800`)(props),
      _hover: { color: mode(`gray.500`, `whiteAlpha.600`)(props) },
      _active: { bg: mode(`gray.50`, `whiteAlpha.100`)(props) },
    }

  const {
    bg = `${c}.600`,
    color = "white",
    hoverBg = `${c}.500`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] || {}
  return {
    bg: mode(bg, `${c}.200`)(props),
    color: mode(color, `gray.800`)(props),
    boxShadow: "sm",
    _hover: { bg: mode(hoverBg, `${c}.300`)(props) },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: { textDecoration: "underline" },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  }
}

const variantUnstyled = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
}

const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "sm",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2.5,
  },
}

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "gray",
}

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
}

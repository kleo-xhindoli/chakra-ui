import { mode } from "@chakra-ui/theme-tools"

const parts = ["overlay", "content", "header", "body", "footer"]

type Dict = Record<string, any>

function baseStyleOverlay(props: Dict) {
  const { isCentered, scrollBehavior } = props

  return {
    bg: "blackAlpha.600",
    display: "flex",
    zIndex: "overlay",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
  }
}

function baseStyleContent(props: Dict) {
  const { scrollBehavior } = props

  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100vh - 7.5rem)" : undefined,
    boxShadow: mode("lg", "dark-lg")(props),
  }
}

const baseStyleHeader = (props: Dict) => ({
  px: 6,
  pt: 4,
  mb: 2,
  fontSize: "lg",
  fontWeight: "medium",
  color: mode("gray.900", "gray.100")(props),
})

function baseStyleBody(props: Dict) {
  const { scrollBehavior } = props
  return {
    px: 6,
    py: 2,
    flex: 1,
    color: mode("gray.500", "gray.400")(props),
    fontSize: "sm",
    lineHeight: 5,
    overflow: scrollBehavior === "inside" ? "auto" : undefined,
  }
}

const baseStyleFooter = {
  px: 6,
  py: 4,
}

const baseStyle = (props: Dict) => ({
  overlay: baseStyleOverlay(props),
  content: baseStyleContent(props),
  header: baseStyleHeader(props),
  body: baseStyleBody(props),
  footer: baseStyleFooter,
})

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === "full") {
    return { content: { maxW: "100vw", h: "100vh" } }
  }

  return {
    content: { maxW: value },
  }
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full"),
}

const defaultProps = {
  size: "md",
}

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
}

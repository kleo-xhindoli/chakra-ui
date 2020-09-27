import { mode } from "@chakra-ui/theme-tools"

const parts = ["item", "command", "list", "button", "groupTitle"]

function baseStyleList(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    boxShadow: mode(`lg`, `dark-lg`)(props),
    color: "inherit",
    minW: "3xs",
    py: "1",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
  }
}

function baseStyleItem(props: Record<string, any>) {
  return {
    py: "2",
    px: "4",
    fontSize: "sm",
    transition: "background 50ms ease-in 0s",
    color: mode(`gray.700`, `gray.300`)(props),
    _focus: {
      bg: mode(`gray.100`, `whiteAlpha.100`)(props),
      color: mode(`gray.900`, `gray.100`)(props),
    },
    _active: {
      bg: mode(`gray.200`, `whiteAlpha.200`)(props),
      color: mode(`gray.900`, `gray.100`)(props),
    },
    _expanded: {
      bg: mode(`gray.100`, `whiteAlpha.100`)(props),
      color: mode(`gray.900`, `gray.100`)(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  }
}

const baseStyleGroupTitle = (props: Record<string, any>) => ({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
  color: mode(`gray.500`, `gray.400`)(props),
})

const baseStyleCommand = {
  opacity: 0.6,
}

const baseStyle = function (props: Record<string, any>) {
  return {
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle(props),
    command: baseStyleCommand,
  }
}

export default {
  parts,
  baseStyle,
}

import { rgba } from "@chakra-ui/theme-tools"
import colors from "./colors"

const shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
  solid: "0 0 0 2px currentColor",
  outline: `0 0 0 3px ${rgba(colors.blue[400], 0.45)}`,
  "outline-gray": `0 0 0 3px ${rgba(colors.gray[400], 0.45)}`,
  "outline-blue": `0 0 0 3px ${rgba(colors.blue[300], 0.45)}`,
  "outline-teal": `0 0 0 3px ${rgba(colors.teal[300], 0.45)}`,
  "outline-green": `0 0 0 3px ${rgba(colors.green[300], 0.45)}`,
  "outline-yellow": `0 0 0 3px ${rgba(colors.yellow[300], 0.45)}`,
  "outline-orange": `0 0 0 3px ${rgba(colors.orange[300], 0.45)}`,
  "outline-red": `0 0 0 3px ${rgba(colors.red[300], 0.45)}`,
  "outline-pink": `0 0 0 3px ${rgba(colors.pink[300], 0.45)}`,
  "outline-purple": `0 0 0 3px ${rgba(colors.purple[300], 0.45)}`,
  "outline-indigo": `0 0 0 3px ${rgba(colors.indigo[300], 0.45)}`,
  "dark-lg":
    "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
}

export type Shadows = typeof shadows

export default shadows

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ThrreDotHorizontalIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={4}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16.5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)
export default ThrreDotHorizontalIcon

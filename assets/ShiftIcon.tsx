import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ShiftIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 .899c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm1-8v4H9v-4H6l4-4 4 4h-3Z"
    />
  </Svg>
)
export default ShiftIcon

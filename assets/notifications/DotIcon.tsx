import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const DotIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5.5} cy={5} r={4} fill="currentColor" />
  </Svg>
)
export default DotIcon

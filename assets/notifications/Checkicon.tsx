import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const CheckIcon = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#1A1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="m16.672 5.559-9.167 9.166-4.167-4.166"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M.385.984h19.18v19.18H.385z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CheckIcon

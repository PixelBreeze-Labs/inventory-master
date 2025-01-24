import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ProfileIcon = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G fill="#1A1A1A" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M16.136 10.273a3.636 3.636 0 1 1-7.272 0 3.636 3.636 0 0 1 7.272 0Zm-1.818 0a1.818 1.818 0 1 1-3.637 0 1.818 1.818 0 0 1 3.637 0Z" />
      <Path d="M12.5 3c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10ZM4.318 13c0 1.9.648 3.65 1.735 5.038a8.173 8.173 0 0 1 6.506-3.22 8.163 8.163 0 0 1 6.447 3.144A8.182 8.182 0 1 0 4.318 13Zm8.182 8.182a8.145 8.145 0 0 1-5.156-1.83 6.354 6.354 0 0 1 5.215-2.716 6.354 6.354 0 0 1 5.172 2.655 8.145 8.145 0 0 1-5.231 1.89Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M.5.814h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ProfileIcon
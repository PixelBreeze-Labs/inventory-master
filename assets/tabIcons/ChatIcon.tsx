import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChatIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.5-.001c-5.5 0-10 3.58-10 8a7.22 7.22 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5 2.37-.11 4.64-1 6.47-2.5 1.14.33 2.34.5 3.53.5 5.5 0 10-3.58 10-8s-4.5-8-10-8Zm0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6Z"
    />
  </Svg>
)
export default ChatIcon

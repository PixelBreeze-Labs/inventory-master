import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const DeleteIcon = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth={0.833}
        d="M16.065 5.828h-.4l-.016.399-.002.053-.777 10.886a1.25 1.25 0 0 1-1.247 1.162H6.84a1.25 1.25 0 0 1-1.247-1.162L4.817 6.284l-.002-.051-.011-.405H3.565a.417.417 0 1 1 0-.834H16.9a.417.417 0 1 1 0 .834h-.834Zm-1.253.446.032-.446H5.62l.032.446.773 10.833.028.387h7.558l.027-.387.774-10.833Zm-2.913-3.78a.417.417 0 1 1 0 .834H8.565a.417.417 0 1 1 0-.834H11.9Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M.615.836h19.18v19.18H.615z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default DeleteIcon

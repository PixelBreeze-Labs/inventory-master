import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const CustomerIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M0 17.999a6.857 6.857 0 0 1 13.714 0H12a5.143 5.143 0 0 0-10.286 0H0Zm6.857-7.714a5.141 5.141 0 0 1-5.143-5.143A5.141 5.141 0 0 1 6.857-.001 5.141 5.141 0 0 1 12 5.142a5.141 5.141 0 0 1-5.143 5.143Zm0-1.715a3.428 3.428 0 0 0 3.429-3.428 3.428 3.428 0 0 0-3.429-3.429A3.428 3.428 0 0 0 3.43 5.142 3.428 3.428 0 0 0 6.857 8.57Zm7.1 3.174A6.858 6.858 0 0 1 18 18h-1.714a5.144 5.144 0 0 0-3.032-4.691l.704-1.564Zm-.589-9.677a4.714 4.714 0 0 1 2.918 4.36A4.713 4.713 0 0 1 12 11.124V9.397a3 3 0 0 0 .892-5.664l.476-1.666Z"
    />
    <Circle cx={6.826} cy={5.271} r={3.998} fill="currentColor" />
    <Path
      fill="currentColor"
      d="M1.094 15.741a3.16 3.16 0 0 1 3.16-3.16h4.62a3.161 3.161 0 0 1 3.162 3.16V18H1.094v-2.258Z"
    />
  </Svg>
)
export default CustomerIcon

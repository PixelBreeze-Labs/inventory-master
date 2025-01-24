import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TrainingIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18.605.25h-16.5a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5H3.36a.75.75 0 0 0 .678-.428 4.5 4.5 0 0 1 8.134 0 .75.75 0 0 0 .678.428h5.755a1.5 1.5 0 0 0 1.5-1.5V1.75a1.5 1.5 0 0 0-1.5-1.5ZM5.855 10a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm12.75 5.25h-5.303a6.037 6.037 0 0 0-2.703-2.453 3.75 3.75 0 1 0-4.988 0 6.037 6.037 0 0 0-2.703 2.453h-.803V1.75h16.5v13.5Zm-15-9.75V4a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-1.5a.75.75 0 1 1 0-1.5h.75v-7.5h-10.5v.75a.75.75 0 0 1-1.5 0Z"
    />
  </Svg>
)
export default TrainingIcon

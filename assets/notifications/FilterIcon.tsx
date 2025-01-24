import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FilterIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M5 10.5h10m-12.5-5h15m-10 10h5"
    />
  </Svg>
)
export default FilterIcon

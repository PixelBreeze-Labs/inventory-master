import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ToolsIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="m2.215-.001-.386.364-.965.965-.364.386.278.45 1.437 2.4.192.343h2.016L7.167 7.63c-2.452 2.463-5.57 5.591-5.68 5.702-1.075 1.074-1.077 2.834.02 3.858 1.073 1.057 2.82 1.085 3.838 0l.02-.022 4.223-4.244 4.244 4.265.064.043c1.076 1.015 2.789 1.03 3.794-.043v-.02h.02c1.051-1.075 1.062-2.822-.02-3.838l-.022-.02-3.579-3.559c2.408-.225 4.294-2.258 4.33-4.715h.02c.003-.014 0-.03 0-.043v-.021a3.548 3.548 0 0 0-.514-2.208l-.47-.728-3.194 3.193-.965-1.007L16.554.964l-.943-.385A4.801 4.801 0 0 0 13.703.17c-2.637 0-4.801 2.165-4.801 4.802 0 .286.062.535.107.792-.3.3-.525.547-.879.9L5.408 3.944V1.906l-.343-.192-2.4-1.437L2.215 0Zm11.488 1.543c.096 0 .163.056.257.065L11.367 4.2l.471.493 1.93 1.993.47.493 2.723-2.722c.014.158.126.273.107.45v.065c0 1.888-1.54 3.429-3.43 3.429-.251 0-.556-.06-.9-.13l-.364-.063-.258.257-7.736 7.759h-.022v.022c-.487.533-1.34.546-1.907-.022v-.021h-.022c-.533-.487-.546-1.34.022-1.908.26-.26 5.293-5.337 7.758-7.802l.28-.278-.108-.386a4.113 4.113 0 0 1-.107-.857c0-1.89 1.54-3.43 3.429-3.43Zm-11.274.172 1.607.986v.686l-.15.15h-.685l-.986-1.608.214-.214Zm10.03 8.337 4.267 4.244v.021h.02c.534.487.547 1.34-.02 1.908h-.023v.022c-.486.533-1.339.546-1.907-.022l-4.244-4.265 1.907-1.908Z"
    />
  </Svg>
)
export default ToolsIcon
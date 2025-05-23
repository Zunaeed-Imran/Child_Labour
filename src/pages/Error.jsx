import { NavLink } from "react-router-dom"

function Error() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-red-600">
        You Got Error Boy..
      </h1>
      
      <NavLink className={'btn'} to={'/'}>
        Back to Home
      </NavLink>
    </div>
  )
}

export default Error

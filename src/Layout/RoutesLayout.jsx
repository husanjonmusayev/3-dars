import { NavLink, Outlet } from "react-router-dom"


function RoutesLayout() {
  return (
   <div className="container">
    <main><Outlet></Outlet></main>
   </div>
  )
}

export default RoutesLayout
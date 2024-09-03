import { Outlet } from "react-router-dom"

const Layout = () => {
    //codigo
  return (
    //html
    <>
        <nav>Mi nav</nav>
        <Outlet />
        <footer>Mi footer</footer>
    </>
  )
}

export default Layout
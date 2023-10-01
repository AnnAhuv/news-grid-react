import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"


const SharedLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer />
  </>
  )
}

export default SharedLayout
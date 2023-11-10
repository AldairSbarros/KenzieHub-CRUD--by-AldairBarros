
import { ToastContainer } from "react-toastify"
import "./styles/index.scss"
import { RoutesMain } from "./routes"
import { UserProvider } from "./providers/UserContext"

function App() {
 
  return (
    <>
    <UserProvider>
    <RoutesMain/>
    <ToastContainer position="top-right" autoClose={2 * 1000} theme="dark"/>

    </UserProvider>
    </>
  )
}

export default App

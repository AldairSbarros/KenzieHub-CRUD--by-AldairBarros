import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import { RoutesMain } from "./routes";
import { UserProvider } from "./providers/UserContext";
import { TechProvider } from "./providers/TechContext";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <RoutesMain />
          <ToastContainer
            position="top-right"
            autoClose={2 * 1000}
            theme="dark"
          />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;

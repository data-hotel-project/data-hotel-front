import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import RoutesMain from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import { GuestProvider } from "./contexts/GuestContext";

function App() {
  return (
    <>
      <AuthProvider>
        <EmployeeProvider>
          <GuestProvider>
            <RoutesMain />
          </GuestProvider>
        </EmployeeProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

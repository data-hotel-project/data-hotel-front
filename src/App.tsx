import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import RoutesMain from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import { GuestProvider } from "./contexts/GuestContext";
import { HotelProvider } from "./contexts/HotelContext";

function App() {
  return (
    <>
      <AuthProvider>
        <HotelProvider>
          <EmployeeProvider>
            <GuestProvider>
              <RoutesMain />
            </GuestProvider>
          </EmployeeProvider>
        </HotelProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

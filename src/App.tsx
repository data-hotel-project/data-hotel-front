import { AuthProvider } from "./contexts/webContext";
import RoutesMain from "./routes";

function App() {
  return (
    <AuthProvider>
      <RoutesMain />
    </AuthProvider>
  );
}

export default App;

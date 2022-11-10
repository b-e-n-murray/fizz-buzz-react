import AppContent from "./components/AppContent";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet}</h1>
      <AppContent />
    </>
  );
}

export default App;

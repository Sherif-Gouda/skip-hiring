import { SkipProvider } from "./contex/SkipContext";
import SkipScreen from "./screens/SkipScreen";

function App() {
  return (
    <SkipProvider>
      <SkipScreen />
    </SkipProvider>
  );
}

export default App;

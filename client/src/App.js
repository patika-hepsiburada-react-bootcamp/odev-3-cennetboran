import "./App.css";
import Container from "./components/Container";
import { VoteProvider } from "./context/VoteContext";
function App() {
  return (
    <VoteProvider>
      <Container />
    </VoteProvider>
  );
}

export default App;

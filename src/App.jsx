import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import ChatBox from "./components/ChatBox";
import Home from "./pages/Home";
 
function App() { 
  return (
    <div className="min-h-screen flex flex-col bg-appBlack">
      <Navbar />
      {/* <main className="flex-1 grid md:grid-cols-[3fr_1fr] gap-4 p-4">
        <GameGrid />
        <ChatBox />
      </main> */}
      <Home />
    </div>
  );
}

export default App;

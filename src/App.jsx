import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import ChatBox from './components/ChatBox'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <main className="flex-1 grid md:grid-cols-[3fr_1fr] gap-4 p-4">
        <GameGrid />
        <ChatBox />
      </main> */}
    </div>
  )
}

export default App
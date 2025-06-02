const ChatBox = () => {
  return (
    <aside className="bg-[#1f1f2e] rounded-xl p-4 flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
      <div className="flex-1 bg-[#141420] rounded p-2 overflow-y-auto text-sm space-y-2">
        <p><strong>User1:</strong> Just won 0.5 BTC!</p>
        <p><strong>User2:</strong> Let’s gooooo!</p>
        <p><strong>User3:</strong> Who's playing Crash?</p>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="mt-2 p-2 rounded bg-[#0f0f1a] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </aside>
  )
}

export default ChatBox
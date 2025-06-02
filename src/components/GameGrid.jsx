const games = [
  { name: "Dice", img: "/dice.png" },
  { name: "Crash", img: "/crash.png" },
  { name: "Plinko", img: "/plinko.png" },
  { name: "Roulette", img: "/roulette.png" },
]

const GameGrid = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Popular Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2f] p-4 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <img src={game.img} alt={game.name} className="w-full h-24 object-cover rounded-md mb-2" />
            <div className="text-center font-semibold">{game.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GameGrid
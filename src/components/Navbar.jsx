const Navbar = () => {
  return (
    <nav className="bg-[#1a1a2f] px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-green-400">StakeClone</div>
      <div className="space-x-4">
        <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-500">Sign In</button>
        <button className="border border-green-600 px-4 py-2 rounded hover:bg-green-600">Register</button>
      </div>
    </nav>
  )
}

export default Navbar
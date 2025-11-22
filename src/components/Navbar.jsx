import { useState } from 'react'

export default function Navbar({ onSignIn, user }) {
  const [query, setQuery] = useState('')
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#4285F4]"></div>
          <span className="text-[#202124] font-medium">Wallet</span>
        </div>
        <div className="flex-1 max-w-xl mx-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search passes and cards"
            className="w-full bg-[#F8F9FA] border border-[#DADCE0] rounded-full px-4 h-10 text-sm outline-none focus:ring-2 focus:ring-[#4285F4]"
          />
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <img src={user.picture || 'https://i.pravatar.cc/40'} className="w-9 h-9 rounded-full" />
          ) : (
            <button onClick={onSignIn} className="h-10 px-4 rounded-full bg-[#4285F4] text-white text-sm font-medium">
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WalletGrid from './components/WalletGrid'
import AuthBanner from './components/AuthBanner'

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [items, setItems] = useState([])
  const [warning, setWarning] = useState('')

  useEffect(() => {
    // Detect private/guest browsing heuristics (very light)
    const isStorage = (() => {
      try { localStorage.setItem('_t','1'); localStorage.removeItem('_t'); return true } catch { return false }
    })()
    if (!isStorage) setWarning('Private browsing detected. Some features may not work as expected.')
  }, [])

  const signIn = async () => {
    // Simulate Google Sign-In: in production use Google APIs.
    const fakeIdToken = crypto.getRandomValues(new Uint32Array(4)).join('')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${baseUrl}/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_token: String(fakeIdToken), private_browsing_detected: !!warning, guest_mode: false })
    })
    const data = await res.json()
    if (res.ok) {
      setToken(data.access_token)
      setUser({ name: 'Demo User', picture: 'https://i.pravatar.cc/80' })
      await loadItems(data.access_token)
    } else {
      alert(data.detail || 'Sign-in failed')
    }
  }

  const loadItems = async (bearer) => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${baseUrl}/wallet`, { headers: { Authorization: `Bearer ${bearer || token}` } })
    if (res.ok) {
      const list = await res.json()
      setItems(list)
    }
  }

  useEffect(() => {
    if (token) loadItems(token)
  }, [token])

  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <Navbar onSignIn={signIn} user={user} />
      <AuthBanner warning={warning} onDismiss={() => setWarning('')} />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Your Wallet</h2>
          <button className="h-10 px-4 rounded-full bg-black text-white text-sm">Add to Google Wallet</button>
        </div>
      </div>
      <WalletGrid items={items} />
    </div>
  )
}

export default App

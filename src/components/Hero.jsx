import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 pointer-events-none">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#202124] leading-tight">
            Your all‑in‑one digital wallet
          </h1>
          <p className="mt-4 text-[#5f6368] text-lg">
            Store cards, tickets, IDs and more with a clean Google‑style experience.
          </p>
        </div>
      </div>
    </section>
  )
}

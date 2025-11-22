export default function AuthBanner({ warning, onDismiss }) {
  if (!warning) return null
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-800">
      <div className="max-w-6xl mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <p>{warning}</p>
        <button onClick={onDismiss} className="underline">Dismiss</button>
      </div>
    </div>
  )
}

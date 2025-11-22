export default function WalletGrid({ items }) {
  const categories = [
    { key: 'payment', label: 'Payment Cards' },
    { key: 'loyalty', label: 'Loyalty Cards' },
    { key: 'ticket', label: 'Tickets' },
    { key: 'transit', label: 'Transit Passes' },
    { key: 'health', label: 'Health Cards' },
    { key: 'id', label: 'Digital IDs' },
    { key: 'generic', label: 'Generic Passes' },
  ]

  const grouped = categories.map(c => ({ ...c, items: items.filter(i => i.type === c.key) }))

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {grouped.map(group => (
        <section key={group.key} className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#202124] text-lg font-medium">{group.label}</h2>
            <button className="text-sm text-[#4285F4]">Add</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {group.items.length === 0 ? (
              <div className="col-span-full text-[#5f6368] text-sm">No items yet.</div>
            ) : (
              group.items.map((item, idx) => (
                <article key={idx} className="bg-[#F8F9FA] rounded-xl p-4 border border-[#DADCE0] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-white border border-[#DADCE0] overflow-hidden">
                      {item.logo_url ? (
                        <img src={item.logo_url} alt="" className="w-full h-full object-cover" />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-[#202124] font-medium">{item.name}</h3>
                      <p className="text-[#5f6368] text-xs">{item.brand || item.type}</p>
                    </div>
                  </div>
                  {item.meta && item.meta.last4 && (
                    <p className="mt-3 text-sm text-[#202124]">•••• {item.meta.last4}</p>
                  )}
                  {item.last_used && (
                    <p className="mt-1 text-xs text-[#5f6368]">Last used {new Date(item.last_used).toLocaleDateString()}</p>
                  )}
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs h-8 px-3 rounded border border-[#DADCE0] bg-white">Details</button>
                    <button className="text-xs h-8 px-3 rounded bg-black text-white">Add to Google Wallet</button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      ))}
    </main>
  )
}

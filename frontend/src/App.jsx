import { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState('')
  const [result, setResult] = useState(null)

  async function analyze() {
    const response = await fetch('http://localhost:3000/api/numbers/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number })
    })

    setResult(await response.json())
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>♻️ Recycle Intel</h1>

      <input
        placeholder="Número com DDI"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <button onClick={analyze}>Analisar</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}

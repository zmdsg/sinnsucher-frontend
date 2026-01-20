// app/page.tsx oder app/page.jsx
'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health/`)
      .then(res => res.json())
      .then(data => console.log('API OK:', data))
      .catch(err => console.error('API ERROR:', err))
  }, [])

  return <h1>Frontend läuft</h1>
}


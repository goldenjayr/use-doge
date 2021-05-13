import { useState, useEffect } from 'react';

interface Props {
  type: string
  symbol: string
}

type UseDoge = (props: Props) => [any, boolean, any]

const useDoge:UseDoge  = ({ type, symbol }) => {
  const [doge, setDoge] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function request() {
      try {
        const res = await fetch(`https://api.lunarcrush.com/v2?data=${type}&key=n12y5u73u1fzi58wnp1p0r&symbol=${symbol}`)
        const result = await res.json()
        setDoge(result.data[0])
        setLoading(false)
      } catch(err) {
        setError(err)
      }
    }
    request()
  })

  return [doge, loading, error]
}

export default useDoge
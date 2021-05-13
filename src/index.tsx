import * as React from 'react';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

type UseDoge = (symbol: string) => any

const useDoge:UseDoge  = (symbol) => {
  const [doge, setDoge] = React.useState()

  React.useEffect(() => {
    async function request() {
      // const res = await fetch(`https://api.lunarcrush.com/v2?data=assets&key=ua0wdtzfq68y8xvtd5tivr&symbol=${symbol}`)
      // console.log("🚀 ~ file: index.tsx ~ line 14 ~ request ~ res", res)
      // @ts-ignore
      setDoge(symbol)
    }
    request()
  })

  return [doge]
}

export default useDoge
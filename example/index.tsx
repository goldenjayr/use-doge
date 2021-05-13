import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useDoge from '../src'

const App = () => {
  const [doge] = useDoge('DOGE')
  console.log("🚀 ~ file: index.tsx ~ line 8 ~ App ~ doge", doge)
  return (
    <div>
      HelloDoge
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

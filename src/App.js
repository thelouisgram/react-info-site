import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  const [isOn, setIsOn] = React.useState(true);

  function handleMode() {
    setIsOn((prevMode) => !prevMode);
  }

  return (
    <div className={`root ${isOn ? 'light' : 'dark'}`}>
        {console.log(isOn)}
      <Header handleMode={handleMode} />
      <Main />
    </div>
  );
}
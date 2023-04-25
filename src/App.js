import { useEffect, useState } from 'react';
import './App.css';
import { WelcomeScreen } from './screens/Welcome';

function App() {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(false);

  function onCloseWelcome() {
    setIsWelcomeScreen(false);
  }

  useEffect(() => {
    const isWelcome = localStorage.getItem("welcome");
    if (isWelcome !== "true") {
      setIsWelcomeScreen(true);
    }
  }, [])


  return (
    <div className="App">
      {isWelcomeScreen ? (
        <WelcomeScreen onCloseWelcome={onCloseWelcome} />
      ) : (<p>
        Hello World.
      </p>)}
    </div>
  );
}

export default App;

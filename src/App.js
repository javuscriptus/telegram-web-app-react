import { useEffect } from 'react';
import { Header } from './components/Header/Header';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => tg.ready(), [tg]);

  return (
    <div className="App">
      <Header />
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;

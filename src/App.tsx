import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// почему мне нужно было написать BrowserRouter as Router?
import Header from './components/Header';
import ChooseWord from './pages/ChooseWord';
import Home from './pages/Home';

function App() {
  const [myWord, setMyWord] = useState<string>('удача');
  const onSelectMyWord = (selectedWord: string) => {
    setMyWord(selectedWord);
    console.log(myWord);
  };
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home selectedWord={myWord} />} />
            <Route
              path="/ChooseWord"
              element={<ChooseWord onSelect={onSelectMyWord} selectedWord={myWord} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

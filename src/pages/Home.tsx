import React, { useEffect, useState } from 'react';
import FullWord from '../components/FullWord';
import checkWord from '../components/types/checkWord';

type Props = { selectedWord: string };
const Home = ({ selectedWord }: Props) => {
  const [word, setWord] = useState<string>('');
  const [onWord, setOnWord] = useState<Array<string>>(['', '', '', '', '']);
  const [arrWord, setArrWord] = useState<Array<string>>([]);

  useEffect(() => {
    setWord(selectedWord);
    const myAwesomeArray: Array<string> = [];
    myAwesomeArray.length = selectedWord.length;
    myAwesomeArray.fill('');
    setOnWord(myAwesomeArray);
  }, [selectedWord]);

  const currentWord = () => {
    let wordfromArr: string = onWord.toString().replace(/[,]/g, '').toLowerCase();
    if (checkWord(wordfromArr)) {
      let myArr: string[] = [...arrWord];
      myArr.push(wordfromArr);
      setArrWord(myArr);
      reset();
    } else {
      alert(`слова ${wordfromArr} не существует`);
      reset();
    }
  };
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let myOnWord = [...onWord];
    myOnWord[index] = e.target.value;
    setOnWord(myOnWord);
    //reset();
  };

  const reset = () => {
    const myAwesomeArray: Array<string> = [];
    myAwesomeArray.length = selectedWord.length;
    myAwesomeArray.fill('');
    setOnWord(myAwesomeArray);
  };

  return (
    <div className="container">
      {arrWord.map((element) => (
        <FullWord currentWord={element} myWord={word} key={element} />
      ))}
      <div className="row">
        {onWord.map((element, index) => (
          <div className="col-1" key={`${element}_${index}`}>
            <input
              type="text"
              value={onWord[index]}
              onChange={(e) => handlechange(e, index)}
              disabled={onWord[index].length > 0}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-1">
          <button type="button" className="btn btn-outline-success" onClick={() => currentWord()}>
            Отправить
          </button>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-outline-danger" onClick={reset}>
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

//e: React.ChangeEvent<HTMLSelectElement>

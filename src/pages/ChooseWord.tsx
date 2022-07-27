import React, { useEffect, useState } from 'react';
import checkWord from '../components/types/checkWord';

const ChooseWord = ({ onSelect, selectedWord }: any) => {
  const [myWord, setMyWOrd] = useState<string>();
  const [myWordInGame, setMyWordInGame] = useState<string>();

  useEffect(() => {
    setMyWOrd(selectedWord);
  }, [selectedWord]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyWOrd(e.target.value);
  };
  const onMyWord = () => {
    if (checkWord(myWord)) {
      onSelect(myWord);
    } else {
      alert(`слова ${myWord} не существует`);
      let resetWord: string = '';
      setMyWOrd(resetWord);
    }
  };

  return (
    <div>
      <input type="text" value={myWord} onChange={(e) => handleChange(e)} />
      <button type="button" className="btn btn-success" onClick={() => onMyWord()}>
        Отправить
      </button>

      <h6>
        Ваше слово <span className="badge bg-success">{myWord}</span>
      </h6>
    </div>
  );
};

export default ChooseWord;

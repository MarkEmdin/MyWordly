import Letter from './Letter';
import colorForLetter from './types/colorForLetter';
import { CurrencyWordColor } from './types/CurrencyWordColor';

type Props = { currentWord: string; myWord: string };
const FullWord = ({ currentWord, myWord }: Props) => {
  const arrWordColor: Array<CurrencyWordColor> = colorForLetter(currentWord, myWord);
  return (
    <div>
      <div className="row">
        {arrWordColor.map((element) => (
          <div className="col-1" key={`${element}`}>
            <Letter letter={element.letter} color={element.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullWord;

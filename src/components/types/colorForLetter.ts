import {CurrencyWordColor} from './CurrencyWordColor'

const colorForLetter = (currentWord: string,myWord: string)=>{
    const currentWordSplit = currentWord.split('');
    const myWordSplit = myWord.split('');
    const arrWordColor: Array<CurrencyWordColor> = [];
  
  
    currentWordSplit.forEach((element, index) => {
      if (myWordSplit.some((el) => el === element)) {
        if (element === myWordSplit[index]) {
          let CurrLettColor = {
            letter: element,
            color: 'btn btn-success',
          };
          arrWordColor.push(CurrLettColor);
        } else {
          let CurrLettColor = {
            letter: element,
            color: 'btn btn-warning',
          };
          arrWordColor.push(CurrLettColor);
        }
      } else {
        let CurrLettColor = {
          letter: element,
          color: 'btn btn-light',
        };
        arrWordColor.push(CurrLettColor);
      }
    });
    return arrWordColor;
}
export default colorForLetter;
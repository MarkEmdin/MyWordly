
const checkWord = (currentWord:any) => {
    const data = require("../DataBase/russian_nouns_with_definition.json")
    const arrAllWord=Object.keys(data);
    const check = arrAllWord.some(element => element  === currentWord.toLowerCase())
    //console.log(check);
  return (
    check
  )
}

export default checkWord
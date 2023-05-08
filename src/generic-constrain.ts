type MandatoryType = { name: string; age: number; salary: number }; //type

interface MandatoryInterface {
  //interface
  name: string;
  age: number;
  salary: number;
}
const addMeMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
  const crush = "kate";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  isMarried: boolean;
};

const myInfo: MyInfoType = {
  name: "Abir",
  age: 50,
  salary: 900,
  isMarried: true,
};

const result = addMeMyCrushMind(myInfo);
console.log(result);

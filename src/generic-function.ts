//generic in arrow function
const createArray = <T>(param: T): Array<T> => {
  return [param];
};

//generic in normal function
function createArray1<X, Y>(param1: X, param2: Y) {
  return [param1, param2];
}

const createTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res = createTuple<string, string>("Bangladesh", "Dhaka");
const res2 = createTuple<boolean, string[]>(true, ["USA"]);
console.log(res2);

const result = createArray<string>("Bangladesh");
const result1 = createArray<boolean>(true);

type NameType = { name: string };
const result2 = createArray<NameType>({ name: "Bangladesh" });

//spread operator

const addMeMyCrushMind = <T>(myInfo: T) => {
  const crush = "kate";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo = {
  name: "Abir",
  age: 50,
  salary: 900,
};

const res3 = addMeMyCrushMind(myInfo);

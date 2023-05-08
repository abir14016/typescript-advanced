let emni: any;
emni = 35;
(emni as number).toExponential;

function kgTogram(param: number | string): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `converted value is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `converted value is ${value} gram`;
  }
}

const resultToBeNumber = kgTogram(2) as number;
const resultToBeString = <string>kgTogram("5"); //angle bracket notation
console.log(resultToBeString);

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}

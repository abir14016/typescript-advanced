const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());

console.log(arrayOfStrings);

type Volume = {
  height: number;
  width: string;
  depth: number;
};
type Area<T> = {
  // [key in keyof Volume] : Volume[key];
  [key in keyof T]: T[key];
};
type AreaReadOnly = {
  readonly height: number;
  width: number;
};
const rectangle: AreaReadOnly = {
  height: 10,
  width: 30,
};

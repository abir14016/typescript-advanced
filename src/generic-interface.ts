//generic interface
interface ICrush<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: ICrush<boolean, string> = {
  name: "kate",
  husband: true,
  wife: "nuron",
};

interface IHusband {
  name: string;
  salary: number;
}
const crush2: ICrush<IHusband> = {
  name: "Kate",
  husband: {
    name: "john",
    salary: 0.2,
  },
};

interface IPerson {
  name: string;
  age: number;
}
const crush4: ICrush<IPerson, IPerson> = {
  name: "kate",
  husband: {
    name: "uron",
    age: 40,
  },
  wife: {
    name: "gdn",
    age: 40,
  },
};

console.log(crush1);
console.log(crush2);
console.log(crush4);

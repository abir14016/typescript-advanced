type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";
type newTypeUsingKeyof = keyof PersonType;

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const result5 = getProperty({ name: "Abir", age: 40 }, "age");

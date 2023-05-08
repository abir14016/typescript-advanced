// //We will always use type alias for primtive type
// type User = {
//   name: string;
//   age: number;
// };

// //extend with type alias
// type ExtendedUser = User & {
//   role: string;
// };

// const user2: ExtendedUser = {
//   name: "Abir",
//   age: 40,
//   role: "dev",
// };

// //We will always use interface for object type
// interface IUser {
//   name: string;
//   age: number;
// }

// //extend with interface
// interface IExtendedUser extends IUser {
//   role: string;
// }

// const user: IExtendedUser = {
//   name: "Abir",
//   age: 40,
//   role: "dev",
// };

// // console.log(user);

// const userWithTypeAlias: User = {
//   name: "Type Alias",
//   age: 100,
// };

// const userWithInterface: IUser = {
//   name: "interface",
//   age: 30,
// };

// //type signature in function with type alias(best practice for function)
// type addNumbersType = (n1: number, n2: number) => number;
// //type signature in function with interface
// interface IAddNumbers {
//   (n1: number, n2: number): number;
// }
// const addNumbers: IAddNumbers = (n1, n2) => n1 + n2;

// //array with type alias (best practice)
// type rollNumbersType = number[];
// //array with interface(index signature)
// interface IRollNumbers {
//   [index: number]: number; //index signature of array
// }
// const rollNumbers: IRollNumbers = [1, 3, 4];
// console.log(rollNumbers);

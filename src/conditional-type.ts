//a type is depended on another type
type a1 = string;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends undefined
  ? undefined
  : never;

type SheikhType = {
  wife1: string;
  wife2: string;
};

type CheckPropertyType<T, K> = K extends keyof T ? true : false;
type CheckWife1Type = CheckPropertyType<SheikhType, "wife2">;

type Friends = "A" | "B" | "C";
type RemoveFriend<T, K> = T extends K ? never : T;
type CUrrentFriends = RemoveFriend<Friends, "C">;

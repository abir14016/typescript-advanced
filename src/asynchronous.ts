//fetching json placeholder data
interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<TodoInterface> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = makePromise();
  console.log(data);
  return data;
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = makePromiseBoolean();
  console.log(data);
  return data;
};

type dataType = {
  data: string;
};

const makePromiseObject = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = { data: "data is fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseDataObject = async (): Promise<dataType> => {
  const data = makePromiseObject();
  console.log(data);
  return data;
};

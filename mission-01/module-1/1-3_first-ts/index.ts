// function with generics

const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("bangladesh");
const resGeneric = createArrayWithGeneric<string>("bangladesh");

interface User {
  id: number;
  name: string;
}

const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: "john" });

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res3 = createArrayWithTuple<string, number>("bangladesh", 33);
const res4 = createArrayWithTuple<string, User>("bangladesh", {
  id: 3,
  name: "Uganda",
});

const addCourseToStudent = <T>(student: T) => {
  const course = "level 2";

  return {
    ...student,
    course,
  };
};

// function with generics

const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("bangladesh");
const resGeneric = createArrayWithGeneric<string>("bangladesh");

type User = { id: number; name: string };

const resGenericObj = createArrayWithGeneric<User>({
  id: 22,
  name: "x",
});

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res2 = createArrayWithTuple<string, number>("bd", 22);
const res3 = createArrayWithTuple<string, { name: string }>("bd", {
  name: "asia",
});

const addCourseToStudent = <T>(student: T) => {
  const course = "level 2";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  name: "x",
  email: "x@gmail.com",
  devType: "l2",
});
const student2 = addCourseToStudent({
  name: "y",
  email: "y@gmail.com",
  devType: "l2",
});

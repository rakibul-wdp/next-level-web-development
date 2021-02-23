// constraints

const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "level 2";

  return {
    ...student,
    course,
  };
};

const student0 = addCourseToStudent({
  id: 44,
  name: "z",
  email: "z@gmail",
  not: "not",
});

const student1 = addCourseToStudent<{
  id: number;
  name: string;
  email: string;
  devType: string;
}>({
  id: 23,
  name: "x",
  email: "x@gmail.com",
  devType: "l2",
});
const student2 = addCourseToStudent({
  id: 33,
  name: "y",
  email: "y@gmail.com",
  devType: "l2",
});

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

interface Student {
  id: number;
  name: string;
  email: string;
  devType: string;
}

const student1 = addCourseToStudent<Student>({
  id: 22,
  name: "x",
  email: "x@gmail.com",
  devType: "l2",
});

const student2 = addCourseToStudent({
  id: 33,
  name: "y",
  email: "y@gmail.com",
  hasWatch: "apple watch",
});

const student3 = addCourseToStudent({ id: 2, name: "x", email: "x" });

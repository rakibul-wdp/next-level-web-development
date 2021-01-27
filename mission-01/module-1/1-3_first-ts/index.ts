// union types

// type FrontendDeveloper = "fake developer" | "junior developer";
// type FullStackDeveloper = "frontend developer" | "expert Developer";

// type Developer = FrontendDeveloper | FullStackDeveloper;

// const newDeveloper: FrontendDeveloper = "fake developer";

// type User = {
//   name: string;
//   email?: string;
//   gender: "male" | "female";
//   bloodGroup: "O+" | "A+" | "AB+";
// };

// const user1: User = {
//   name: "abul",
//   gender: "male",
//   bloodGroup: "O+",
// };

type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
  skills: ["html", "css", "js", "nodejs"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

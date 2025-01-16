const GENDER = {
  male: "male",
  female: "famale",
  other: "other",
};

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}

type Person = {
  name: string,
  age: number,
  sex: string;
}

const person: Person = {
  name: "Pedro Rafael",
  age: 19,
  sex: "Male",
}

function deployCreatePeople(person: Person): void {
  console.log(`${person.name}`)
  console.log(`${person.age}`)
  console.log(`${person.sex}`)
}

deployCreatePeople(person)
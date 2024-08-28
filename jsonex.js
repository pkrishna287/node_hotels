const jsonString = '{"name":"Krishna", "age": 21, "city":"Godhra"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);

const textobject = {
    name: "Ankur",
    age:32
}
const strring = JSON.stringify(textobject);
console.log(strring);

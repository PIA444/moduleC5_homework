let result = []
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
const list = data.list;
for(let i = 0; i < 2; i++){
result.push({
  name: list[i].name,
  age: list[i].age,
  prof: list[i].prof,
});
}
console.log('list:',result);
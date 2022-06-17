const parser = new DOMParser();
let result = [];

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
for(let i=1; i<=3; i = i + 2){
const listNode = xmlDOM.querySelector("list").childNodes[i];
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
const langAttr = nameNode.getAttribute('lang');
result.push({name: firstNode.textContent +' '+secondNode.textContent,
 age: ageNode.textContent,
 prof: profNode.textContent,
 lang: langAttr
});
}
console.log('list:',result);
//2 tipuri de variabile: scop global si scop local
// cu scop local: var
// cu scop global: let si const

var index = 2;
let index2 = 3;


for(let index2 = 0; index2 < 5; index2++) {
    console.log("ceva cu let");
}

for(var index = 0; index < 5; index++) {
    console.log("ceva cu var");
}

console.log("index", index);
console.log("index2", index2);


var obj = {
    name: "Ana",
    age: 23,
    lab: {
        grupe: [
            152,
            134
        ]
    }
}

console.log(obj.name, obj["age"], obj.lab.grupe[0])

var students = [
    {
        name: "Student 1", 
        age: 19
    },
    {
        name: "Student 2", 
        age: 20
    }
]

for(let o in obj) {
    console.log(obj[o]);
}

students.forEach((s) => {
    console.log(s.name);
})

students.push({
    name: "Student 3",
    age: 19
})

console.log(students)

students.map(s => s.age++)
console.log(students)


console.log(students.filter(s => s.age <= 20))
console.log(students.filter(function(s) {
   return s.age <= 20;
}));

a();

function a() {
    console.log("S-a apelat functia a")
}
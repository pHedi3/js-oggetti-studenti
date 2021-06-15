// parte 1 
var student = {
    nome: 'yugo',
    surname: 'sumo',
    age: 20
}

for (var k in student) {
    document.querySelector('.result').innerHTML += k + ': ' + student[k] + '<br>';
}
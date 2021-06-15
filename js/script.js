// parte 1 
var student = {
    nome: 'yugo',
    surname: 'sumo',
    age: 20
}

for (var k in student) {
    document.querySelector('.result').innerHTML += k + ': ' + student[k] + '<br>';
}

//parte due

var school = [
    {nome: 'timo',
    surname: 'bagno',
    age: 20
    },
    {nome: 'palo',
    surname: 'nando',
    age: 14
    },
    {nome: 'rugo',
    surname: 'saldo',
    age: 26
    },
];

for (var x = 0; x < school.length; x++) {
    document.getElementById('output').innerHTML += school[x].nome + ' ' + school[x].surname + '<br>'
}

// parte tre

var userName = prompt('inserisci il nome');
var userSurname = prompt('inserisci il cognome');
var userAge = prompt('insersci la tua età')

school.push({
    nome: userName,
    surname: userSurname,
    age: userAge
})



for (var x = 0; x < school.length; x++) {
    document.getElementsByClassName('fine')[0].innerHTML += school[x].nome + ' ' + school[x].surname + '<br>'
}
function randomSelector(arrayStudents) {
    return Math.round(Math.random() * (arrayStudents.length - 1));
}

const students = [];
students.push('ANDRES FELIPE GIRALDO');
students.push('EDWIN GERMAN VILLALBA GONZALEZ');
students.push('CRISTIAN ORLANDO ROMERO ACOSTA');
students.push('CRISTIAN DAVID SAINEA CÉSPEDES');
students.push('DANIEL CAMILO RAMIREZ MARTINEZ');
students.push('ALEJANDRO RIVAS LOPEZ');
students.push('DIANA GARCIA SANDOVAL');
students.push('MARCOS ORTIZ');
students.push('CARLOS ANDRES FANDIÑO RUEDA');
students.push('JORGE ALBERTO RODRIGUEZ PAEZ');
students.push('EDGAR LEONARDO RODRIGUEZ VASQUEZ');
students.push('KELLY JOHANA VERGARA TORRES');
students.push('LINA MARÍA RODRÍGUEZ RAMÍREZ');
students.push('JOHN JAIRO ORJUELA ESPINOSA');
students.push('JHON FAVER MACHADO ALAPE');
students.push('FRANCISCO JAVIER TORRES VILLAMOR');

const studentsAux = students;

const groups = [];
const maxGroupSize = 2;
let group = 0;

while (studentsAux.length) {
    let groupAux = [];
    for (let i = 0; i < maxGroupSize; i++) {
        if (studentsAux.length) {
            const studentSelected = randomSelector(studentsAux);
            groupAux.push(studentsAux[studentSelected]);
            studentsAux.splice(studentSelected, 1);
        }
    }
    groups.push(groupAux);
    group++;
}
// console.log(groups);

const h1 = document.createElement('h1');
h1.innerText = `Creación aleatoria de grupos`;
document.body.appendChild(h1);

const bodyMain = document.createElement('main');
bodyMain.setAttribute('id', 'body-main');
document.body.appendChild(bodyMain);

const divGroups = document.createElement('div');
divGroups.setAttribute('id', 'div-groups');
bodyMain.appendChild(divGroups);

for (let i = 0; i < groups.length; i++) {

    const divGroupContainer = document.createElement('div');
    divGroupContainer.setAttribute('class', 'div-group-container');
    divGroups.appendChild(divGroupContainer);

    const pGroup = document.createElement('p');
    pGroup.setAttribute('class', 'p-group');
    pGroup.innerText = `Grupo ${i + 1}`;
    divGroupContainer.appendChild(pGroup);
    for (let j = 0; j < groups[i].length; j++) {
        const groupMember = document.createElement('p');
        groupMember.setAttribute('class', 'p-group-member');
        groupMember.innerText = `${groups[i][j].toLowerCase()}`;
        divGroupContainer.appendChild(groupMember);
    }
}

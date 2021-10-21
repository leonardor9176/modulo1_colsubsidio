function createGroups(studentsList, maxGroupSize) {
    const studentsAux = [...studentsList];

    const groups = [];
    // const maxGroupSize = 2;

    while (studentsAux.length) {
        const groupAux = [];
        for (let i = 0; i < maxGroupSize; i++) {
            if (studentsAux.length) {
                const studentSelected = Math.round(Math.random() * (studentsAux.length - 1));
                groupAux.push(studentsAux[studentSelected]);
                studentsAux.splice(studentSelected, 1);
            }
        }
        groups.push(groupAux);
    }
    return groups;
}

let textAreaList = '';
textAreaList += 'ANDRES FELIPE GIRALDO\n';
textAreaList += 'EDWIN GERMAN VILLALBA GONZALEZ\n';
textAreaList += 'CRISTIAN ORLANDO ROMERO ACOSTA\n';
textAreaList += 'CRISTIAN DAVID SAINEA CÉSPEDES\n';
textAreaList += 'DANIEL CAMILO RAMIREZ MARTINEZ\n';
textAreaList += 'ALEJANDRO RIVAS LOPEZ\n';
textAreaList += 'DIANA GARCIA SANDOVAL\n';
textAreaList += 'MARCOS ORTIZ\n';
textAreaList += 'CARLOS ANDRES FANDIÑO RUEDA\n';
textAreaList += 'JORGE ALBERTO RODRIGUEZ PAEZ\n';
textAreaList += 'EDGAR LEONARDO RODRIGUEZ VASQUEZ\n';
textAreaList += 'KELLY JOHANA VERGARA TORRES\n';
textAreaList += 'LINA MARÍA RODRÍGUEZ RAMÍREZ\n';
textAreaList += 'JOHN JAIRO ORJUELA ESPINOSA\n';
textAreaList += 'JHON FAVER MACHADO ALAPE\n';
textAreaList += 'FRANCISCO JAVIER TORRES VILLAMOR\n';

const studentsList = document.getElementById('students-text-box');
studentsList.innerHTML = textAreaList.trim();

const groupSize = document.getElementById('group-size');
groupSize.value = 2;

//DOM
// const h1 = document.createElement('h1');
// h1.innerText = `Creación aleatoria de grupos`;
// document.body.appendChild(h1);
// const divTextBox = document.getElementById('div-text-box');
// divTextBox.before(h1);

// const bodyMain = document.createElement('main');
// bodyMain.setAttribute('id', 'body-main');
// document.body.appendChild(bodyMain);

const bodyMain = document.getElementById('body-main');

const divButton = document.createElement('div');
divButton.setAttribute('class', 'div-button');
bodyMain.appendChild(divButton);

const button = document.createElement('button');
button.innerText = `Crear grupos`;
button.setAttribute('id', 'create-groups-button');
divButton.appendChild(button);

//Eevents

//Clear list
document.getElementById("button-clean-list").onclick = () => {
    const studentsList = document.getElementById('students-text-box');
    studentsList.value = '';
};

//Create groups
const buttonClick = document.querySelector('#create-groups-button');
buttonClick.addEventListener('click', (eventFunctOpt1) => {

    const groupSize = document.getElementById('group-size');
    const maxGroupSize = Number(groupSize.value);

    const studentsList = document.getElementById('students-text-box');
    const textAreaList = studentsList.value.trim();
    const students = textAreaList.split('\n');

    const groups = [...createGroups(students, maxGroupSize)];

    const checkDivGroup = document.getElementById('div-groups');
    if (document.body.contains(checkDivGroup)) {
        const father = checkDivGroup.parentElement;
        father.removeChild(checkDivGroup);
    }
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
});
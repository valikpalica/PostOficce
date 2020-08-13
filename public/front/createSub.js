let buttonAll = document.getElementById('findall');
let buttonSave = document.getElementById('save');
let find = document.getElementById('button');
buttonAll.addEventListener('click', getAllUser);
buttonSave.addEventListener('click', SaveAll);
find.addEventListener('click', findUser);

async function createTable() {
    let tbody = document.getElementById('tbody');
    let tableHTML = '';
    let response = await fetch('/getall', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    });
    let resmas = await response.json();
    let mas = resmas.mas;

    mas.forEach(i => {
        tableHTML += '<tr>\n' +
            `                    <th scope="row"><input type="checkbox" id="check"  class="checkboxes" value=${i.email}></th>\n` +
            `                    <td>${i.email}</td>\n` +
            `                    <td>${i.key}</td>\n` +
            '                </tr>'
    });
    tbody.innerHTML = tableHTML;
}

async function findUser() {
    let user = document.getElementById('findUser').value;
    let response = await fetch('/findOne', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({mail: user})
    });
    let res = await response.json();
    let users = res.user[0];
    let tbody = document.getElementById('tbody');
    let tableHTML = '';
    tableHTML+='<tr>\n' +
        `                    <th scope="row"><input type="checkbox"  class="checkboxes" id="check" value=${users.email}></th>\n` +
        `                    <td>${users.email}</td>\n` +
        `                    <td>${users.key}</td>\n` +
        '                </tr>';
    tbody.innerHTML  = tableHTML;

}

function getAllUser() {
    let checkboxes = document.getElementsByClassName('checkboxes');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

function SaveAll() {
    let namesubscribe = document.getElementById('namesubscribe').value;
    let checkboxes = document.getElementsByClassName('checkboxes');
    let checkUsers = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkUsers.push(checkboxes[i].value)
        }
    }
    allnew();
    console.log({name: namesubscribe, users: checkUsers});
    //post request to save in db
    return {name: namesubscribe, users: checkUsers};
}


function allnew() {
    document.getElementById('findUser').value = '';
    document.getElementById('namesubscribe').value = '';
    let checkboxes = document.getElementsByClassName('checkboxes');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

createTable();
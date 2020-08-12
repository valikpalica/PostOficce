let buttonAll = document.getElementById('findall');
let buttonSave = document.getElementById('save');
let check = document.getElementById('check');
let find = document.getElementById('button');

let mas = [{mail:'programmtestandwork@gmail.com',key:'qfadfasdfvcxzadsfgasdfasdvasdf'}];


buttonAll.addEventListener('click', getAllUser);
buttonSave.addEventListener('click', SaveAll);
find.addEventListener('click', findUser);

function createTable() {
    let tbody = document.getElementById('tbody');
    let tableHTML = '';
    for(let item in mas ){
        console.log(item);
        tableHTML+='<tr>\n' +
            `                    <th scope="row"><input type="checkbox" id="check" value=${item.mail}></th>\n` +
            `                    <td>${item.mail}</td>\n` +
            `                    <td>${item.key}</td>\n` +
            '                </tr>'
    }
    tbody.innerHTML = tableHTML;
}

async function findUser() {
    let user = document.getElementById('findUser').value;
}

function getAllUser() {

}

function SaveAll() {

}
createTable();
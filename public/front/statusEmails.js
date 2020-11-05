
document.addEventListener("DOMContentLoaded", getAllStatus);
let green  = '#8BC34A';
let red = '#F44336';

async function getAllStatus() {
    let NameSub  = document.getElementById('nameSub').value;
    let responseStatus = await fetch('/getAllStatus',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8',
        },
        body:JSON.stringify({nameSub:NameSub})
    });
    let result = await responseStatus.json();
    result.answer?createTable(result.answer):sendNoInformation();
}



function sendNoInformation() {
    let div = document.getElementById('NoInfo');
    let table = document.getElementById('table');
    table.style.display = 'none';
    div.style.display  =  'block';
    let blockNoInformation = `<label style="color: #FFFFFF; font-size: 40px">No information</label>`;
    div.style.textAlign = 'center';
    div.innerHTML = blockNoInformation;
    div.style.height = '100px';
    div.style.paddingBottom ='40px';
}

function createTable(obj) {
    document.getElementById('time').innerText  =obj.Date;
    let tbody = document.getElementById('tbody');
    let innerHTML ='';
    for (let i=0;i<obj.ArraySendEmails.length;i++){
        let color = obj.ArraySendEmails[i].status? green: red;
        innerHTML+=`<tr><td>${obj.ArraySendEmails[i].email}</td><td style="background-color: ${color}">${obj.ArraySendEmails[i].status}</td></tr>`;
    }
    tbody.innerHTML = innerHTML;
}


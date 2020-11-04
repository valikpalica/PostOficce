
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
    result.answer?createTable(result.answer):alert('no Information');
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


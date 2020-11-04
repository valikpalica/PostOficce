async function createTable() {
    console.log('createTebleSubscribes');
    let response = await fetch('/getAllSubsccribes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });
    let mas = await response.json();
    let tbody = document.getElementById('tbody');
    let TBodyHTml = '';
    mas.allSub.forEach(i => {
        console.log(i.SubName);
        TBodyHTml +='<tr>\n' +
            `                    <td>${i.SubName}</td>\n` +
            '<td>\n' +
            '<div style="display: inline-flex;padding-left: 450px">\n'+
            `<div><form action="/sendEmails" method="post"><input type="hidden" value="${i.SubName}" name="value"><button onclick="send(this)" value=${i.SubName} style="margin-left: 5px" class="btn btn-outline-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg></button></form></div>`+
            `<div><form action="/updatelist" method="post"><input type="hidden" value="${i.SubName}" name="value"><button  type="submit" value=${i.SubName} style="margin-left: 5px" class="btn btn-outline-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
  <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg></button></form></div>`+
            `<div><form action="/getInform" method="post"><input type="hidden" value="${i.SubName}" name="value"><button  type="submit" value=${i.SubName} style="margin-left: 5px" class="btn btn-outline-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
    <circle cx="8" cy="4.5" r="1"/>
    </svg></button></form></div>`+
            `<button onclick="remove(this)" value=${i.SubName} style="margin-left: 5px" class="btn btn-outline-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>`+
            '</div>\n' +
            '</td>' +
            '</tr>';
    });
    tbody.innerHTML = TBodyHTml;
}
async function send(element) {
    console.log(element.value);
}

function log(subscribable) {
    console.log(subscribable.value);
}
async function remove(subscribable) {
    let result = await fetch('/removeSub',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8',
        },
        body:JSON.stringify({nameSub:subscribable.value})
    });
    let res = await result;

    let answer = await res.json();
    if(res.status===200){
        alert(answer.answer);
        deleteRow();
        createTable();
    }
}

function deleteRow() {
    for(let i=1;i<document.getElementById('tbody').getElementsByTagName('tr').length;i++){
        document.getElementById('tbody').deleteRow(i);
    }
}

createTable();





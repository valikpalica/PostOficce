
let file = document.getElementById('file');
file.addEventListener('change',addTaboy);

function addTaboy() {
    let tbody = document.getElementById('tbody');
    let innerHTML  = '';
    for(let i =0;i<file.files.length;i++){
        let name  = file.files[i].name;
        innerHTML+=`<tr><td>${name}</td></tr>`
    }
    tbody.innerHTML = innerHTML;
}

const sendForm  = document.getElementById('action');
sendForm.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData();
    let name  = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    let nameSub = document.getElementById('nameSub').value;
    formData.append('name',name);
    formData.append('comment',comment);
    formData.append('nameSub',nameSub);
    for(let i=0;i<file.files.length;i++){
        formData.append('file',file.files[i]);
    }
    const response = await fetch('/uploadFile',{
        method:'POST',
        body:formData,
    });
    console.log(response);
};
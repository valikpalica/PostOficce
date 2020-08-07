let button = document.getElementById('button');
button.addEventListener('click',message);
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

async function message()  {
    let mail = document.getElementById('input').value;
    if(validate(mail)){
        console.log(mail);
        await fetch('/validation',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({mail:mail})
        });
    }
    else {
        let div = document.getElementById('err');
        div.style  = 'text-align: center;margin-bottom: 10px;margin-right:auto; margin-left: auto; width: 250px; color: #D32F2F; border: solid 1px #D32F2F';
        div.innerHTML = 'not valid';
        div.append(div);
    }
}

function validate(mail) {
    return EMAIL_REGEXP.test(mail);
}
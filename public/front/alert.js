let button = document.getElementById('button');
button.addEventListener('click',message);
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function compaire() {
    console.log('compaire');
    if(validate(document.getElementById('input').value)){
        document.getElementById('err').hidden = true;
        document.getElementById('button').disabled  = false;

    }
    else {
            document.getElementById('button').disabled  = true;
            let div = document.getElementById('err');
            div.style  = 'text-align: center;margin-bottom: 10px;margin-right:auto; margin-left: auto; width: 250px; color: #D32F2F; border: solid 1px #D32F2F';
            div.innerHTML = 'not valid';
    }
}
 function message()  {
    let mail = document.getElementById('input').value;
    if(validate(mail)){
        console.log(mail);
         fetch('/validation',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({mail:mail}),
        });
    }
}

function validate(mail) {
    console.log(EMAIL_REGEXP.test(mail));
    return EMAIL_REGEXP.test(mail);
}
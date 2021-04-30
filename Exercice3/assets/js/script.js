let input = document.querySelector('input');
let username = 'gaetan';
input.addEventListener('input', checkInput);
function checkInput() {
    if(input.value == username){
        document.querySelector('input').className = 'is-valid';
    }else{
        document.querySelector('input').className = 'is-invalid';
    }
}
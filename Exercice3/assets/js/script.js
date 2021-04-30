let input = document.querySelector('input');
let username = 'gaetan';
input.addEventListener('input', z);
function z() {
    if(input.value == username){
        document.querySelector('input').className = 'is-valid';
    }else{
        document.querySelector('input').className = 'is-invalid';
    }
}
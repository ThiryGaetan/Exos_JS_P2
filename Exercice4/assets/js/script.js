function scrollTest (){
    let scrollLevel = window.scrollY;
    if(scrollLevel < 400){
        document.getElementById('blockDiv').className = 'hide';
    }else{
        document.getElementById('blockDiv').className = '';
    }
}
window.addEventListener('scroll', scrollTest);
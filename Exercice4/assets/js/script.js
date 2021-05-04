window.onscroll = function (){
    console.log(window.pageYOffset)
    if(window.pageYOffset < 520){
        document.getElementById('blockDiv').className = 'hide';
    }else{
        document.getElementById('blockDiv').className = '';
    }
}
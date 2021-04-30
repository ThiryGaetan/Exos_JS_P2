let pic = document.getElementById('picture');
function scalePic(){
    if(pic.width < 550){
        pic.width = 600;
    }else{
        pic.width = 500
    }
}
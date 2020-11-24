var images = [
    'photo0',
    'photo1',
    'photo2',
    'photo3'
]

var count = 1;
var aux = 0;
function changeImage(){

    setTimeout(function(){ 
        document.getElementById(images[aux]).style.opacity = 0;
        document.getElementById(images[count]).style.opacity= 1;

        aux = count;
        if(count===3){
            count = 0;
        }else {
            count++;
        }

        changeImage();

    }, 3000);
}


changeImage();

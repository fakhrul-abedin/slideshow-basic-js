const slideshowElement = document.querySelectorAll(".slide-items");


let count = 1;
setInterval(()=>{

    count++;

    let activeItem = document.querySelector(".active");
    activeItem.classList.remove('active');


    if(count>slideshowElement.length){
        slideshowElement[0].classList.add('active');
    }else{
        activeItem.nextElementSibling.classList.add('active');
    }

   
},2000)
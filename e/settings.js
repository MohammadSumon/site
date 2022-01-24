

//selector

const mainImage = document.querySelector('.main-img');

const img = document.querySelectorAll('.img-fluid');


for(item of img ){
    item.addEventListener("click", function(evt){
        var evt = evt.target.src;
    
        mainImage.src = evt;
    })
    
}



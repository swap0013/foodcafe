function showhide(){

    var menu = document.getElementById('h');
    h.style.display = (h.style.display === 'block') ? 'none' : 'block';
    
}

function showhide1(){

var menu = document.getElementById('a');
a.style.display = (a.style.display === 'block') ? 'none' : 'block';

}

function showhide2(){

var menu = document.getElementById('s');
s.style.display = (s.style.display === 'block') ? 'none' : 'block';

}

function showhide3(){

var menu = document.getElementById('g');
g.style.display = (g.style.display === 'block') ? 'none' : 'block';

}

function showhide4(){

var menu = document.getElementById('c');
c.style.display = (c.style.display === 'block') ? 'none' : 'block';

}

function changeimg(){
    document.getElementById('img1').src='img1.jpg';
}

function changeimg1(){
    document.getElementById('img1').src='img2.webp';
}
function changeimg2(){
    document.getElementById('img1').src='img3.jpg';
}

// function coffee(){
//     document.getElementById('cof').src='cof1.jfif';
// }
// function coffee(){
//     document.getElementById('cof1').src='cof2.png';
// }
// function coffee(){
//     document.getElementById('cof2').src='cog3.jpg';
// }
// function coffee(){
//     document.getElementById('cof3').src='cof4.webp';
// }

// function colddrink(){
//     document.getElementById('cof').src='col1.jpg';
// }
// function colddrink(){
//     document.getElementById('cof1').src='col2.jpg';
// }
// function colddrink(){
//     document.getElementById('cof2').src='col3.jpg';
// }
// function colddrink(){
//     document.getElementById('cof3').src='col4.webp';
// }

// function colddrink(){
//     document.getElementById('col').src='col1.jpg';
// }
// function colddrink(){
//     document.getElementById('col1').src='col2.jpg';
// }
// function colddrink(){
//     document.getElementById('col2').src='col3.jpg';
// }
// function colddrink(){
//     document.getElementById('col3').src='col4.webp';
// }

function toggleVisibility() {
    toggleImages('coffeeImages');
}

function toggleVisibility1() {
    toggleImages('colddrinkImages');
}

function toggleVisibility2() {
    toggleImages('fastfoodImages');
}

function toggleVisibility3() {
    toggleImages('teaImages');
}

function toggleVisibility4() {
    toggleImages('allImages');
}

function toggleImages(containerId) {
    var containers = document.querySelectorAll('.image-container');

    containers.forEach(function (container) {
        if (container.id == containerId) {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    });
}

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'block'
   }
   function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'none'
   }



   let slideIndex = 1;
   showSlides(slideIndex);
   
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}    
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
   }
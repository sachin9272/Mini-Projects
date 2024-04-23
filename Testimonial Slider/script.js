const testimonials = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit."," Delectus saepe, magni asperiores est alias dolor hic!","Repudiandae recusandae similique libero ad, porro","temporibus. Perferendis cupiditate temporibus porro quod animi atque"," soluta dicta ut quos, possimus aut illo iste similique incidunt!"]
const authors = ["John Doe", "Sachin Singh","Mike Tyson","Zukerberg","Kelsi Gordan"]
const imgUrl = "https://source.unsplash.com/random/150*150/?face"; 
const author = document.querySelector("#author");
const testimonial = document.querySelector('#testimonials');
const image = document.querySelector("#image");


let count = 0;
function changeTest(){
    author.textContent = authors[count];
    testimonial.textContent = testimonials[count];
    image.innerHTML = `<img src=${imgUrl} alt="Person Image" id="image">`;
    count++;
    if(count > authors.length-1){
        count = 0;
    }
}   
setInterval(changeTest,2000);
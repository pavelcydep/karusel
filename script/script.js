


const prevClick = document.querySelector(".prev");
const nextClick = document.querySelector(".next");
const conteinerSwitch = document.querySelector(".conteiner__switch");


const newPrev = new PrevNext(prevClick,plusSlides);
const newNext = new PrevNext(nextClick,plusSlides);
const newSwitch = new Switch(conteinerSwitch,currentSlides);
newSwitch.actionSwitch(1);
let indexSlide = 1;

newPrev.action(1);
newNext.action(1);



sliders(indexSlide);
function plusSlides(n){
	sliders(indexSlide += n);
	
}
function currentSlides(n){
	sliders(indexSlide = n);
}
  function sliders(n){
	let i = 0; 
	let slides = document.getElementsByClassName("slider-conteiner");
	let conteinerSwitch = document.getElementsByClassName("conteiner__switch");
	
	if(n > slides.length){
		indexSlide = 1;
		
	}
	if(n < 1){
		indexSlide = slides.length;	
	}
	for(i = 0; i < slides.length; i++ ){
		slides[i].classList.add("slider-conteiner");
		slides[i].classList.remove("slider-conteiner_active");
		
	}
	for(i = 0; i < conteinerSwitch.length; i++){
		conteinerSwitch[i].className = conteinerSwitch[i].className.replace("active","")
	}
	slides[indexSlide-1].classList.add("slider-conteiner_active");
	
	conteinerSwitch[indexSlide-1].classList.add("conteiner__switch_active");
	
}

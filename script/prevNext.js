class PrevNext {
	constructor(element,plusSlides){
		this.element = element;
		this.plusSlides = plusSlides;
	}
	action(n){
	this.element.addEventListener("click", (event) => {
	   plusSlides(n);
	});}
}
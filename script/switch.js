class Switch 
 {
	constructor(element,currentSlides){
		this.element = element;
		this.currentSlides = currentSlides;
        

	}
	actionSwitch(n){
	this.element.addEventListener("click", (event) => {
       
        currentSlides(n);
	});}
}
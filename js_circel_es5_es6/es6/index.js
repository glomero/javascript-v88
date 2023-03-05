document.addEventListener('DOMContentLoaded', (event) =>{
    class Circle{
        constructor(){
            this.p = document.createElement('p'); // create p tag
            this.x = 0;
            this.y = 0;
            this.randomRadius = Math.floor(Math.random() * 200) + 10; //random radius
        }
        click(){
            document.body.addEventListener('click', function(e){ //triggered when clicked in the body
                let circle = new Circle();
                circle.getCoordinate(e);
                circle.setAttr(bgColor);
                //decreading radius 
                setInterval(function(){
                    circle.randomRadius -= 1;
                    circle.p.style.width = circle.randomRadius + 'px';
                    circle.p.style.height = circle.randomRadius + 'px';
                    if(circle.randomRadius == 0){
                        circle.p.style = '';
                        circle.p.remove();
                    }
                }, 50);
                document.body.appendChild(circle.p);
            });
        }
        setAttr(bgColor){
                this.p.setAttribute("class", "circle"); //set class for p tag
				this.p.setAttribute("style",
						"width: " + this.randomRadius + 'px;' +
						"height: " + this.randomRadius + 'px;' +
						"left: " + (this.x - this.randomRadius / 2) + 'px;' +
						"top: " + (this.y - this.randomRadius    / 2) + 'px;' +
						"display: block;" +
						"background-color: " + bgColor);
        }
        getCoordinate(e){
            this.x = e.clientX;	// horizontal coordinate
			this.y = e.clientY;	// vertical coordinate
        }
    }
    class ButtonColors{
        constructor(){
            this.btn = document.querySelectorAll('button.btn:not(.btn-delete)');
        }
        buttons(){
            for(let i = 0; i < this.btn.length; i++){
                this.btn[i].addEventListener("click", function (e) {
                    e.stopPropagation();
                    let btn_bg = this.style.backgroundColor
                    bgColor = btn_bg;
                    btn_bg = "#333333";
                });
            }
        }
        delete(){
            document.getElementById("btn-reset").addEventListener("click", function (e) {
                    e.stopPropagation();
                    let p = document.querySelectorAll("p")
                    for (let i = 0; i < p.length; i++) {
                        p[i].style = "";
                        p[i].remove();
                    }
                });
        }
    }
    let bgColor = '#CCE8CC'; // initial color
    let button = new ButtonColors();
    let circle = new Circle();
    circle.click();
    button.buttons();
    button.delete();
});
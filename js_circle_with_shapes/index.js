document.addEventListener('DOMContentLoaded', (event) =>{
    class Shapes{  // parent class
        constructor(){
            this.p = document.createElement('p'); // create p tag
            this.x = 0;
            this.y = 0;
            this.randomRadius = Math.floor(Math.random() * 200) + 10; //random radius
            this.borderRadius = '50%'; //border radius
            this.bgColor = '#CCE8CC'; // default background color
        }
        click(){
            let self = this;
            document.body.addEventListener('click', function(e){ //triggered when clicked in the body
                let shape;
                if(currentShape == 'circle'){
                    shape = new Circle();
                }else if(currentShape == 'square'){
                    shape = new Square();
                }else{
                    shape = new Star();
                }
                console.log(shape);
                shape.getCoordinate(e);
                shape.setAttr(bgColor, shape.borderRadius);
                //decreading radius 
                setInterval(function(){
                    shape.randomRadius -= 1;
                    shape.p.style.width = shape.randomRadius + 'px';
                    shape.p.style.height = shape.randomRadius + 'px';
                    if(shape.randomRadius == 0){
                        shape.p.style = '';
                        shape.p.remove();
                    }
                }, 50);
                document.body.appendChild(shape.p);
            });
        }
        setAttr(bgColor, borderRadius){
            this.bgColor = bgColor; // update background color
            this.p.setAttribute("style",
                `width: ${this.randomRadius}px;
                height: ${this.randomRadius}px;
                left: ${this.x - this.randomRadius / 2}px;
                top: ${this.y - this.randomRadius / 2}px;
                display: block; background-color: ${bgColor};
                position: absolute; border: 1px solid black; border-radius: ${borderRadius}`
            );
        }
        getCoordinate(e){
            this.x = e.clientX;	// horizontal coordinate
			this.y = e.clientY;	// vertical coordinate
        }
        updateShapes(selectedShape){
            let shapes = document.querySelectorAll('p');
            for(let i = 0; i < shapes.length; i++){
                if(shapes[i] != selectedShape.p){
                    shapes[i].style.backgroundColor = 'white';
                }
            }
        }
    }
    // Circle class inheret the parent
    class Circle extends Shapes{
        constructor(borderRadius){
            super(borderRadius);
            this.borderRadius = '50%';
        }
    }
    // Square class
    class Square extends Shapes{
        constructor(borderRadius){
            super(borderRadius);
            this.borderRadius = '0%';
        }
    }
    //star class
    class Star extends Shapes{
        setAttr(bgColor){
            this.p.setAttribute('style',
                    `width: ${this.randomRadius}px;
                    height: ${this.randomRadius}px;
                    left: ${this.x - this.randomRadius / 2}px;
                    top: ${this.y - this.randomRadius / 2}px;
                    display: block; background-color: ${bgColor}; 
                    position: absolute; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`
                );
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
                    let btn_bg = this.style.backgroundColor;
                    bgColor = btn_bg;
                    btn_bg = "#333333";
                    // Update the bgColor of the Shapes class to the selected color
                    shape.setAttr(bgColor, shape.borderRadius);
                    // Update the background color of the selected shape to match the bgColor
                    let selectedShape = document.querySelector('button.shapes[id=' + currentShape + ']');
                    selectedShape.style.backgroundColor = bgColor;
                    // Update the background color of the other shapes to white
                    let allShapes = document.querySelectorAll('button.shapes:not(#' + currentShape + ')');
                    for(let i = 0; i < allShapes.length; i++){
                        allShapes[i].style.backgroundColor = 'white';
                    }
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
    // Buttons Shape class
    class btnShape{
        constructor(){
            this.btn = document.querySelectorAll('button.shapes');
        }
        setShape(){
            for(let i = 0; i < this.btn.length; i++){
                this.btn[0].style.backgroundColor = bgColor;
                this.btn[i].addEventListener('click', function(e){
                    let allShapes = document.querySelectorAll('button.shapes:not(#' + this.id + ')');
                    for(let i = 0; i < allShapes.length; i++){
                        allShapes[i].style.backgroundColor = 'white';
                    }
                    e.stopPropagation();
                    this.style.backgroundColor = bgColor;
                    let idShapes = this.id;
                    currentShape = idShapes;
                });
            }
        }
    }
    let bgColor = '#CCE8CC'; // initial color
    let currentShape = 'circle'; 
    let button = new ButtonColors();
    let btn = new btnShape();
    let shape = new Shapes();
    btn.setShape();
    shape.click();
    button.buttons();
    button.delete();
});
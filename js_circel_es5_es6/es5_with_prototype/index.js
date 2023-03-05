document.addEventListener('DOMContentLoaded', (event) =>{
    function Circle(){
        this.p = document.createElement('p'); //create p tag element
        this.x = 0;
        this.y = 0;
        this.randomRadius = Math.floor(Math.random() * 200) + 10; //create random radius
        Circle.prototype.clicked = function(){
            document.body.addEventListener('click', function(e){
                let circle = new Circle();
                circle.getCoordinate(e);
                circle.setAttr(bgColor);
                //decreasing radius 
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
        Circle.prototype.setAttr = function(bgColor){
            this.p.setAttribute('class', 'circle'); // setting class for p tag
            this.p.setAttribute('style', 'width: ' + this.randomRadius + 'px;' +
                    'height: ' + this.randomRadius + 'px;' + 'top: ' + (this.y - this.randomRadius / 2) + 'px;' +
                    'left: ' + (this.x - this.randomRadius  / 2) + 'px;' + 'display: block;' + 'background-color: ' + bgColor
            );
        }
        Circle.prototype.getCoordinate = function(e){
            this.x = e.clientX; // Horizontal coordinate
            this.y = e.clientY; // vertical coordinate
        }
    }
    function ButtonColors(){
        this.btn = document.querySelectorAll('button.btn:not(.btn-reset)');
        ButtonColors.prototype.buttons = function(){
            for(let i = 0; i < this.btn.length; i++){
                this.btn[i].addEventListener('click', function(e){
                    e.stopPropagation();
                    let btnBg = this.style.backgroundColor;
                    bgColor = btnBg;
                    btnBg = '#333333';
                });
            }
        }
        ButtonColors.prototype.delete = function(){
            document.getElementById('btn-reset').addEventListener('click', function(e){
                e.stopPropagation();
                let p = document.querySelectorAll('p');
                for(let i = 0; i < p.length; i++){
                    p[i].style = '';
                    p[i].remove();
                }
            });
        }
    }
    let bgColor = '#CCE8CC'; // initial color
    let button = new ButtonColors();
    let circle = new Circle();
    circle.clicked();
    button.buttons();
    button.delete();
});
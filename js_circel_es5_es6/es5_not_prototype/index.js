
document.addEventListener('DOMContentLoaded', (event) =>{
    function Circle(){
        this.p = document.createElement('p'); // create p tag
        this.x = 0;
        this.y = 0;
        this.randomRadius = Math.floor(Math.random() * 200) + 10; //for creating a random radius
        this.clicked = function(){
            document.body.addEventListener('click', function(e){ //when clicked in the body this will triggered
                let circle = new Circle();
                circle.get_coordinate(e);
                circle.set_bg(bgcolor);
                //decreasing the radius and disappear
                setInterval(function(){
                        circle.randomRadius -= 1;
                        circle.p.style.width = circle.randomRadius + 'px';
                        circle.p.style.height =circle.randomRadius + 'px';
                        if(circle.randomRadius == 0){
                        circle.p.style = '';
                        circle.p.remove();
                    }
                }, 50);
                document.body.appendChild(circle.p);
            });
        }
        this.set_bg = function(bgcolor){
            this.p.setAttribute('class', 'circle'); //set class for p tag
            this.p.setAttribute('style', 'width: ' + this.randomRadius + 'px;' + 
                'height: ' + this.randomRadius + 'px;' + 'left: ' + (this.x - this.randomRadius / 2) + 'px;' +
                'top: ' + (this.y - this.randomRadius / 2) + 'px;' + 'display: block;' + 'background-color: ' + bgcolor
            );
        }
        this.get_coordinate = function(e){
            this.x = e.clientX; //horizontal coordinate
            this.y = e.clientY; //vertical coordinate
        }
    }
    function ButtonsColors(){ //button function
        this.btn = document.querySelectorAll('button.btn:not(btn-delete)');
        this.buttons = function(){
            for(let i = 0; i < this.btn.length; i++){
                this.btn[i].addEventListener('click', function(e){
                    e.stopPropagation();
                    let buttonColor = this.style.backgroundColor;
                    bgcolor = buttonColor;
                    buttonColor = '#333333';
                });
            }
        }
        this.btnDelete = function(){
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
    let bgcolor = '#CCE8CC'; // initial color
    let button = new ButtonsColors();
    let circle = new Circle();
    circle.clicked();
    button.buttons();
    button.btnDelete();
});


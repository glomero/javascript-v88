document.addEventListener('DOMContentLoaded', (event) => {
    let background = '#CCE8CC'; //initial color of the circle
    document.body.addEventListener('click', function(e){ //when clicked in the body this will triggered
        //console.log('click body')
        let circle = document.createElement('p'); //this create an element p tag
        let x = e.clientX; //horizontal coordinate
        let y = e.clientY; //vertical
        let randomRadius = Math.floor(Math.random() * 200) + 10; //for creating a random radius
        circle.setAttribute('class', 'circle'); // setting the class in p tag
        circle.setAttribute(
            'style', 'width: ' + randomRadius + 'px;' + 'height: ' + randomRadius + 'px;' +
            'left: ' + (x - randomRadius / 2) + 'px;' + 'top: ' + (y - randomRadius / 2) + 'px;' +
            'display: block;' + 'background-color: ' + background
        );
        //decreasing the radius and disappear
        setInterval(function(){
            randomRadius -= 1;
            circle.style.width = randomRadius + 'px';
            circle.style.height = randomRadius + 'px';
            if(randomRadius <= 0){
                circle.style = "";
                circle.remove(); // remove in DOM
            }
        }, 50);
        document.body.appendChild(circle);
    });
    const buttons = document.getElementsByClassName('btn');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
            e.stopPropagation();
            // buttons[i].textContent = 'chosen';

            background = buttons[i].style.backgroundColor;
            buttons[i].style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
            // button[i].style.backgroundColor = 'black';
            // setTimeout(function(){
            //     buttons[i].style.backgroundColor = background;
            //     buttons[i].textContent = '';
            // },1000);
        });
    }
    document.getElementById('btn-reset').addEventListener('click', function(e){ // reset
        e.stopPropagation();
        let p = document.getElementsByClassName('circle');
        for(let i = 0; i < p.length; i++){
            p[i].style = " ";
            p[i].remove();
        }
        
    });
});
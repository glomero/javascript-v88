const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

//Plane class
class Plane{
    constructor(x, y, name){
        this.x = x;
        this.y = y;
        this.name = name;
        this.health = 100;
    }
}
let players = [];
let bullets = [];
let enemies = [ { x: 50, y: 150, type:'enemy1' }, { x: 250, y:250, type:'enemy2' }, { x: 450, y:150, type:'enemy2' }, { x: 50, y:50, type:'enemy1' },
{ x: 650, y:250, type:'enemy1' }, { x: 50, y:150, type:'enemy2' }, { x: 850, y:50, type:'enemy2' } ];
let score = 0;
let player_count = 0;
let loop = setInterval(gameLoop, 40);

// ===== socket.io ===== // 
const server = app.listen(9000);
const io = require('socket.io')(server);
console.log('localhost:9000');

io.on('connection', function(socket) {
    //If this event is triggered, it will push and create a new plane in the players array.
    //then it will emit to all clients to display the new plane. 
    socket.on('player_detected', function(res) {
        let x = Math.floor(Math.random() * 800) + 10;
        players.push(new Plane(x, 500, res.name));
        io.emit('display_plane', { players: players })
    });
// If this event is triggered, it will emit the current player_count to the particular 
    // client that triggered this event.

    socket.on('get_player_number', function() {
        socket.emit('give_player_number', { player_number: player_count })
        player_count++;
    });
// If this event is triggered, it will update the x-axis of a particular player.
    // it will then emit the new x-axis for that particular player for all clients.
    socket.on('move_x', function(res) {
        players[res.player_number].x = res.x;
        io.emit('movement_x', { x: players[res.player_number].x, player_number: res.player_number}) 
        //get player number from the client and send it back to the client;
    });
// If this event is triggered, it will update the y-axis of a particular player.
    // it will then emit the new y-axis for that particular player for all clients.     
    socket.on('move_y', function(res) {
        players[res.player_number].y = res.y;
        io.emit('movement_y', { y: players[res.player_number].y, player_number: res.player_number }) 
        //get player number from the client and send it back to the client;
    });
// If this event is triggered, it will push a new bullet with the x-axis and y-axis of the player that
    // shoot the bullet.       
    socket.on('got_bullets', function(res) {
        bullets.push({x: res.x, y: res.y});
    });
    
})
//  ====end of socket.io ====//


// =====Bullets functions====//

//The displayBullets function loops through the bullet array and create an element for each bullet.
function displayBullets(){
    let output = '';
    for(let i=0; i<bullets.length; i++){
        output += "<div class='bullet' style='top:" + bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>";
    }
    return output;
}
//The moveBullets function loops through the bullets array and moves the y-axis of the bullet by -5.
function moveBullets(){
    for(let i = 0; i < bullets.length; i++){
        bullets[i].y -= 10;
        if(bullets[i].y < 0){
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
}
// ======== End of bullets functions ======== //

// ======= Enemy functions ====== //

// The displayEnemies function loops through the enemies array and create an element for each enemy.
    //It return a string containing the elements.
function displayEnemies(){
    let output = '';
	for(let i = 0; i < enemies.length; i++){
        output += "<div class='" + enemies[i].type + "' style='top:"+enemies[i].y + "px; left:"+enemies[i].x + "px;'></div>";
	}
	return output;
}

// The moveBullets function loops through the bullets array and moves the y-axis of the bullet by -5.
    // When the ememy reaches the bottom of the area or its y-axis reaches 540px, it will reapear at the top of the area
    // with a random x-axis.
function moveEnemies(){
    for(let i = 0; i < enemies.length; i++){
        enemies[i].y += 10;
		if(enemies[i].y > 540){
            enemies[i].y = 0;
			enemies[i].x = Math.floor(Math.random() * 900);
		}
	}
}
// ====== End of enemy functions ===== //

// ===== Collision functions ====== //
// The detectCollision function loops through the bullets array and enemies array. If the hit condition is met,
    // it will create an explosion, set the y-axis and x-axis of the bullet to 0 and the enemy will reappear at the top
    // of the area. It will also emit the explosion to all the clients. 

function detectCollision(){
    let output = '';
	for(let i=0; i < bullets.length; i++){
        for(let j=0; j < enemies.length; j++){
            if(Math.abs(bullets[i].x - enemies[j].x) < 15 && Math.abs(bullets[i].y - enemies[j].y) < 15){
                output += "<div class='" + enemies[j].type + "' style='top:" + enemies[j].y + "px; left:" + enemies[j].x + "px; background-position: -5px -400px;'></div>";
				bullets[i].y = 0;
				bullets[i].x = 0;
				enemies[j].y = 0;
				enemies[j].x = Math.floor(Math.random() * 900);
				score += 10;
                io.emit('detect_bullet_collision', { output: output })
			}
		}
	}	
}
// The detectCollision function loops through the enemies array. If the hit condition is met,
   // it will create an explosion, decrease the score by 50 points and the enemy will reappear at the top
    // of the area. It will also emit the explosion to all the clients.
function planeEnemyCollision(plane){
    let output = '';
	for(let j = 0; j < enemies.length; j++){
        if(Math.abs(plane.x - enemies[j].x) <= 20 && Math.abs(plane.y - enemies[j].y) <= 3){
            output += "<div class='" + enemies[j].type + "' style='top:" + enemies[j].y + "px; left:" + enemies[j].x + "px; background-position: -5px -400px;'></div>";
			enemies[j].y = 0;
			enemies[j].x = Math.floor(Math.random() * 900);
			score -= 15;
            io.emit('detect_enemy_collision', { output: output })
		}	
	}
}
// ======= End of collision functions ======== //

// ======== Loops function ======== //
// The gameLoop function loops through the functions above. It also check if the 
    // score condition is met and emits a game over to all the clients.
    
function gameLoop() {
    let bullets_output = displayBullets();
    let enemies_output = displayEnemies();
    moveBullets();
    moveEnemies();
    io.emit('display_bullets', { output: bullets_output});
    io.emit('display_enemies', { output: enemies_output});
    io.emit('display_score', { output: score});
    detectCollision();
    
    if(players.length != 0){
        for(let i = 0; i < players.length; i++){
            planeEnemyCollision(players[i]);
        }
    }

    if(score <= 0){
        io.emit('end_game', { msg: "Game Over" });
        endGame();
    }
    else if(score >= 500){
        io.emit('end_game', { msg: "You Win \nScore: " + score });
        endGame();
    }
}
/// The endgame function is triggered once the score condition is met.
    // It will reset the score, bullets and enemies.
function endGame(){
    score = 100;
    bullets = [];
    enemies = [];
    enemies = [ { x: 50, y: 100, type:'enemy1' }, { x: 350, y:350, type:'enemy2' }, { x: 450, y:150, type:'enemy2' }, { x: 50, y:50, type:'enemy1' },
    { x: 650, y:250, type:'enemy1' }, { x: 50, y:150, type:'enemy2' }, { x: 850, y:50, type:'enemy2' } ];
}
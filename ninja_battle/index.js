function battle(){
    for(let i = 1; i <= 10; i++){
        console.log('===Round' + i + '===')
        ninja1.attack();
        ninja2.attack();
        console.log('__________');
    }
}
var ninja1 = {
  hp: 100,
  strength: 15,
  attack: function() {
      let damage = Math.floor(Math.random()* this.strength);
      let ninja2_hp = ninja2.hp - damage;
      ninja2.hp = ninja2_hp;
      let result = "Ninja1 attacks Ninja2 and does a damage of " + damage + "!" + " Ninja1 health: " + ninja1.hp + ". " + "Ninja2 health: " + ninja2.hp;
      console.log(result);
  },
}
var ninja2 = {
  hp: 150,
  strength: 10,
  attack: function() {
      let damage = Math.floor(Math.random()* this.strength);
      let ninja1_hp = ninja1.hp - damage;
      ninja1.hp = ninja1_hp;
      let result = "Ninja2 attacks Ninja1 and does a damage of " + damage + "!" + " Ninja1 health: " + ninja1.hp + ". " + "Ninja2 health: " + ninja2.hp;
      console.log(result);
  }
}
battle();
const winner = ninja1.hp > ninja2.hp ? 'Ninja1 WINS!!!!!' : 'Ninja2 WINS!!!!!';
console.log(winner);
const Warrior = function(name) {
  this.name = name
  this.hp = 100
}

Warrior.prototype.bash = function(target) {
  target.hp -= 15
}

Warrior.prototype.omniSlash = function(target) {
  // The target's hp may not be under 50 or this attack will fail on the opponent
  if (target.hp < 50) {
    return
  }
  target.hp -= 50
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

console.log(sam.bash === lenardo.bash) 
console.log(sam.omniSlash === lenardo.omniSlash)
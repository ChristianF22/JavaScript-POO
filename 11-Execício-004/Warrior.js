const Character = require("./Character");

module.exports = class Warrior extends Character{
    constructor(name,lifePts, attackPts, defensePts, shieldPts){
        super(name,lifePts,attackPts,defensePts)
        this.shieldPts = shieldPts
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if(this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchaStance(){
        if(this.stance === 'attacking'){
            this.stance = "defending"
            this.defensePts += this.shieldPts
        }else{
            this.stance = 'attacking'
            this.defensePts -= this.shieldPts
        }
    }
}
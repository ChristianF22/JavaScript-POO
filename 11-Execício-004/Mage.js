const Character = require("./Character")

module.exports = class Mage extends Character{
    constructor(name,lifePts, attackPts, defensePts, magiPts){
        super(name,lifePts,attackPts,defensePts)
        this.magiPts = magiPts
    }
    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts + this.magiPts) - targetCharacter.defensePts
    }

    heal(targetCharacter){
        targetCharacter.lifePts += this.magiPts * 2
    }
}


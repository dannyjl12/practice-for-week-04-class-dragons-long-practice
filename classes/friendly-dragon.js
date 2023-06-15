const isEsModule = require("sinon/lib/sinon/util/core/is-es-module");
const Dragon = require("./dragon")

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend) {
        super (name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        for (let lifeGoal of this.lifeGoals) {
            console.log(`${this.name} likes to ${lifeGoal}`)
        }
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = FriendlyDragon;

class Dinner {
    constructor(appetizer, entree, desert) {
        this.appetizer = appetizer
        this.entree = entree
        this.desert = desert
    }
}

class Chef {
    prepareDinner(appetizer, entree, desert) {
        const dinner = new Dinner(appetizer, entree, desert)
        console.log(`Prepared ${dinner.appetizer},${dinner.entree} & ${dinner.desert}`)
    }
}

const newChef = new Chef
newChef.prepareDinner('Fries', 'Burger', 'Ice cream')
newChef.prepareDinner('Onion rings', 'Dosa', 'Laddu')
newChef.prepareDinner('Wedges', 'Taco', 'Pudding')
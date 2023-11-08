class Storage{
    #items = [];
    constructor(items){
        Array.isArray(items) ? this.#items = items.slice(0) : console.error("Arguments isn`t valid");
    }

    getItems() { 
        return this.#items;
    }
    addItem(newItem) { 
        this.#items.push(newItem); 
    }
    removeItem(itemToRemove){
        this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
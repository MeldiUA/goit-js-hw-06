class StringBuilder{

    #value;

    constructor(initialValue){
        this.#value = initialValue;
    }

    getValue(){
        return this.#value; 
    }

    padEnd(str){
        this.#value += str;
    }

    padStart(str){
        this.#value = str + this.#value;
        //this.#value.padStart(str);  прочитав що є нові методи padStart & padEnd але в мене щось не ппрацює
    }

    padBoth(str){
        this.padEnd(str);
        this.padStart(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
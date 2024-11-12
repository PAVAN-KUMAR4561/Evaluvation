

class Stacks {
    constructor(size) {
        this.stack1 = []; 
        this.stack2 = []; 
        this.size = size;      
    }

    
    push1(element) {
        if (this.stack1.length + this.stack2.length >= this.size) {
            console.log("Stack1 Overflow, cannot push in Stack1");
            return;
        }
        this.stack1.push(element);
    }

    
    push2(element) {
        if (this.stack1.length + this.stack2.length >= this.size) {
            console.log("Stack2 Overflow,cannot push in Stack1");
            return;
        }
        this.stack2.push(element);
    }

    pop1() {
        if (this.stack1.length === 0) {
            console.log("Stack 1 Underflow");
            return null;
        }
        return this.stack1.pop();
    }

   
    pop2() {
        if (this.stack2.length === 0) {
            console.log("Stack 2 Underflow");
            return null;
        }
        return this.stack2.pop();
    }

    
    top1Element() {
        if (this.stack1.length === 0) {
            console.log("Stack 1 is empty.");
            return null;
        }
        return this.stack1[this.stack1.length - 1];
    }

    top2Element() {
        if (this.stack2.length === 0) {
            console.log("Stack 2 is empty.");
            return null;
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty1() {
        return this.stack1.length === 0;
    }

    isEmpty2() {
        return this.stack2.length === 0;
    }
}

const size = 10;
const Stacks = new Stacks(N);


Stacks.push1(1);
Stacks.push1(2);
Stacks.push1(3);
console.log("Top of Stack 1: ", Stacks.top1Element()); 


Stacks.push2(100);
Stacks.push2(200);
Stacks.push2(300);
console.log("Top of Stack 2: ", Stacks.top2Element()); 


console.log("Popped from Stack 1: ", Stacks.pop1());
console.log("Top of Stack 1 after pop: ", Stacks.top1Element()); 


console.log("Popped from Stack 2: ", Stacks.pop2());
 console.log("Top of Stack 2 after pop: ", Stacks.top2Element());



Stacks.push1(4);
Stacks.push1(5);
Stacks.push1(6);
Stacks.push2(400); 

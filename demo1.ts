class Key{
    protected var1: number = 4545;

    public constructor (var1 : number){
        this.var1 = var1;
    }
    protected meth1(){
        console.log("Protected method");
    }
}

class Child extends Key{
    public constructor(var1 : number) {
        super(var1);
    }
}
// Object
const k = new Key(454);
k.meth1();
const ch = new Child(5);
ch.meth1();
console.log(ch.var1);
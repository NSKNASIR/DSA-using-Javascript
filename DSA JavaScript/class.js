class Cookie{
    constructor(color='',name='',age=''){
        this.color = color;
        this.name = name;
        this.age = age;
    }
    setData(color,name,age){
        this.color = color;
        this.name=name;
        this.age=age;
    }
    getData(){
        return this;
    }
}

let cookieOne = new Cookie('green','nasir',24)
cookieOne.age  = 25;

let cookieTwo = new Cookie();
cookieTwo.setData('blue','ariyan',10)

console.log(cookieTwo.getData())
console.log(cookieOne)
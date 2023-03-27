let strObj = new String("HI");//wrapper object
let strObj2 = new String("Hello");//wrapper object
console.log("Type of strObj =>", typeof(strObj));
console.log("Type of strObj2 =>", typeof(strObj2));

strObj2 = strObj;
strObj = new String("Not Hi");//wrapper object

console.log("Object assign ", strObj);
console.log("Object assign ", strObj2);

console.log("Type of strObj =>", typeof(strObj));
console.log("Type of strObj2 =>", typeof(strObj2));

//console.log("window ", window)//not support in node 20230327

let a = 10;
let b = a;

a = 20;

console.log("a ", a);
console.log("b ", b);


let obj = {
    name: "ppk",
    age: 18,
};

let obj2 = obj;

obj.name = "bmp";
console.log("Obj2", obj2);

let data = "5";
data = data + 10;//data + toString(10);
console.log("Data ", data);

console.log("3 * 4", "3" * "4");
console.log("3 * String", "3" * "String");
console.log("3 * String",typeof(8 + ""));
console.log("Convet ot Nan", + "9" + typeof(+"9"));//9
console.log("Convet ot Nan", + "" + typeof(+""));//0

console.log(+"str");//NaN
console.log(+null);//0
console.log(+undefined);//NaN
console.log(!!'false');


let obj3 = {
    name: "ppk",
    age: 18,
    toSting:function(){
        console.log("toString");
        return 'Object';//only primitive
    },
valueOf:function(){
    console.log("Value");
    return 10;//only primitive
}
}
console.log("Obj ", +obj3);
console.log(8 + NaN);


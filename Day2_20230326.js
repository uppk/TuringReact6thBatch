console.log("+ ", 2 + 3);
console.log("- ", 2 - 3);
console.log("* ", 2 * 3);
console.log("% ", 2 % 3);

let num = 5;
let num2 = 2;

console.log("num + num2", num + num2);

let obj = {
    name: "PaingPhyoKyaw",
    age:28,
};
console.log("obj ", obj);

num = 0xff;
console.log("Hexa literal ", num);

num = 0b1;
console.log("Binary literal ", num);

num = 0o12;
console.log("Octal literal ", num);

num = 1_000_000_000;//(only modern version)
console.log("modern version", num);

console.log("Power", Math.pow(2,3));//(build In => library
console.log("Sin90 in degree", Math.sin(90 * Math.PI/180));

console.log("0.3 - 0.2", 0.3 - 0.2);
console.log("3 - 0.2", 3 - 0.2);
console.log("0 / 0", typeof(0/0));
console.log("isNaN ", isNaN(0/0));

//ieee 754formula

let posZero = 0;
let negZero = -0;
console.log("1/0", 1/posZero);
console.log("1/-0", 1/negZero);
console.log("posZero == negZero", posZero == negZero);

console.log("2**3", 2**3);//(same as Math.pow();)

//Date and Time
let now = new Date();
console.log("Current Date Time", now);

let ms = now.getTime();
console.log("MilliSecond", ms);

now = new Date(50_000_000_000);
console.log("50_000_000_000 Time", now);

console.log("Normal Date() ", Date());

str = "I am String";
str = "Price is" + str + "and" + "Concat";
console.log(str);


//escape character and interpolation(modern vesion)
console.log(`\n${num}`);
console.log("typeof NaN", typeof(NaN));

console.log("Math.ceil ", Math.ceil(0.6));
console.log("Math.floor ", Math.floor(0.6));
console.log("Math.abs ", Math.abs(-9));
console.log("Math.max ", Math.max(1,2,5,8,1,4));
console.log("Math.exp ", Math.exp(7));//approximately
console.log("(7 + (7 / 7000000)) ** 7000000 ", (7 + (7 / 7000000)) ** 7000000);//approximately
console.log("typeof(isNaN(String))", typeof(isNaN("String")));

let strNum = 1 + "0".repeat(100);
let bigNum = BigInt(strNum);

console.log("BigInt Value ", bigNum + bigNum);
console.log("Character 65", String.fromCharCode(65));
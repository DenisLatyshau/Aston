const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN

const res2 = (true && 3) + "d";
console.log(res2); // 3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); // trued
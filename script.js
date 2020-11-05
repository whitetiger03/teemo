let a = 1;
let b = true;
let c = "오메메";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

function fun(name) {
    console.log(name);

    return name;
}

const n = fun("그렇군요");
console.log(n);

const g = function (name) {
    console.log(name); //익명함수
};

g("ㅎㅅㅎ");

const x = (name) => {
    console.log(name);
    return name;
};

x("2spdla");


(() => {
    console.log(1);
})();

let v = 1;
const add = (a) => {
    return a + 1;
};

v = add(v);

if (v > 1) {
    console.log("1보다 큼");
} else {
    console.log("1보다 작거나 같음");
}

for (let i = 1; i <= 9; i++) {
    if (i % 2 == 0){
        continue;
    }

    console.log( i * 2 );
}

console.log(1 == "1");
console.log(1 === "1");
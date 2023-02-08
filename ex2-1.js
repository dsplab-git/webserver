function first() {
    second();
    console.log("첫 번째");
}

function second(){
    third();
    console.log("두 번째");
}

function third(){
    console.log("세 번째")
}

function run(){
    console.log("3초 후 실행");
}
function run2(){
    console.log("1초 후 실행");
}

console.log("시작");
//setTimeout(run,3000);
//setTimeout(first,2000);
var id = setTimeout(run2,100);
clearTimeout(id);
console.log(__filename);
console.log(__dirname);
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("끝");
console.log("I am a tutorial on loops")

let a = 1
for (let i = 0; i < 10; i++) {
    console.log(i + a)
}

console.log()

let obj = {
    Name: "Harry",
    Role: "Programmer",
    Company: "CodeWithHarry"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

console.log()

for (const key in obj) {
    console.log(key)
}

console.log()

for (const ch of "object") {
    console.log(ch)
}

console.log()

let m = 0
while (m < 10) {
    console.log(m)
    m++
}

console.log()

let n = 100;
do {
    console.log(n)
    n++
} while (n < 10);
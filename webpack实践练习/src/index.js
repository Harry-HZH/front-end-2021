import "./styles/index.scss"

const person = {
    level:1,
    power:10,
    intellegence:10,
    hp:500,
    mp:300,
}

const gm = {
    ...person,
    isUndefeatable:true
}
console.log(person);
console.log(gm);
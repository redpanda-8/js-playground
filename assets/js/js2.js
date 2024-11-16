// JS-2 - 12 skaidre
// 1 -----------------------------------------------------------------------------------------------------------------------
// patikrinam ar kandidato amzius atitinka nustatymus kriterijus
const amzius = 40; 

if (amzius >= 25 && amzius <= 85) {
    console.log('kandidato amzius', amzius, 'kandidatas tinka');
}
console.log("-------------------------------------");

// 2------------------------------------------------------------------------------------------------------------------------
// nustatom ar pateiktas skaicius lyginis ar nelyginis, naudojame reduce operatoriu %
const skaicius = 60; 
if (skaicius % 2 === 0) {
    console.log(skaicius, ' yra lyginis');
} else {
    console.log(skaicius, ' yra nelyginis');
}
console.log("-------------------------------------");

//2 (trumpesnis budas) ----------------------------------------------------------------------------------------------------
// skaiciuojam ta pati ka auksciau, tik naudojam trumpinta if else forma
let skaiciusSutrumpintai = skaicius  % 2 === 0 ? 'lyginis' : 'nelyginis';
console.log(skaicius, ' yra ' + skaiciusSutrumpintai);

console.log("-------------------------------------");

//3 -----------------------------------------------------------------------------------------------------------------------
// Patikrinu ar saskaitoje yra pinigu, jeigu yra, ar ju uzteks mokesciams
const saskaita = 100;
const mokesciai = 200;

if (saskaita > 0) {
    if (saskaita > mokesciai) {
        console.log('saskaitoj yra casho mokesciam');
    } else {
        console.log('nu chash yra bet numininke patenkinta nebus si menesi');
    }
} else {
    console.log('eik dirbti');
};

console.log("-------------------------------------");

// 13 skaidre - 1 --------------------------------------------------------------------------------------------------------
// palyginu ar pazymiuVidurkis ir lankomumas atitinka kriterijus stipendijai
const pazymiuVidurkis = 8;
const lankomumas = 'geras';

if (pazymiuVidurkis >= 8 && lankomumas === 'geras') {
    console.log(`Jusu vidurkis ${pazymiuVidurkis} ir lankomumas ${lankomumas}, stipendija gausite`)
} else {
    console.log('bye');
};

console.log("-------------------------------------");

// 13 skaidre - 2 --------------------------------------------------------------------------------------------------------
// rasti kuris is 3 skaiciu yra didziausias
const x = 2;
const y = 4;
const z = 6;

if (x > z && x > y) {
    console.log("X is bigger than both Z and Y.");
} else if (x < z && x < y) {
    console.log("X is smaller than both Z and Y.");
} else if (x > z) {
    console.log("X is bigger than Z but smaller than Y.");
} else if (x > y) {
    console.log("X is bigger than Y but smaller than Z.");
} else {
    console.log("X is smaller than both Z and Y.");
}

console.log("-------------------------------------");
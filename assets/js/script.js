// js2 dalis - 12 skaidre - 1 uzduotis ------------------------------------------------------------------------------------
// const amzius = prompt('ivesk kandidato amzius:'); 

// if (amzius >= 25 && amzius <= 85) {
//     console.log('tinka');
// }

// 12 skaidre - 2 uzduotis -----------------------------------------------------------------------------------------------
// const skaicius = prompt('ivesk skaiciu:'); 
// if (skaicius % 2 === 0) {
//     console.log('lyginis');
// } else {
//     console.log('nelyginis')
// }

// 12 skaidre - 2 uzduotis (trumpesnis budas) ----------------------------------------------------------------------------
// let geitasSkaicius = skaicius  % 2 === 0 ? 'lyginis' : 'nelyginis';
// console.log(geitasSkaicius);

// 12 skaidre - 3 uzduotis ----------------------------------------------------------------------------------------------
// const saskaita = 100;
// const mokesciai = 200;

// if (saskaita > 0) {
//     if (saskaita > mokesciai) {
//         console.log('saskaitoj yra casho mokesciam');
//     } else {
//         console.log('nu chsh yra bet numininke oatenkinta nebus si menesi');
//     }
// } else {
//     console.log('eik dirbti');
// };

// 13 skaidre - 1 --------------------------------------------------------------------------------------------------------
// const pazymiuVidurkis = 8;
// const lankomumas = 'geras';

// if (pazymiuVidurkis >= 8 && lankomumas === 'geras') {
//     console.log(`Jusu vidurkis ${pazymiuVidurkis} ir lankomumas geras, stipendija gausite`)
// } else {
//     console.log('bye');
// };

// 13 skaidre - 2 --------------------------------------------------------------------------------------------------------
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

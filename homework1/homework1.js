const apples = 15.678;
const banana = 123.965;
const cherry = 90.2345; 

const maxNumber= Math.max(apples, banana, cherry);
console.log (`Максимальне число:  ${maxNumber} `); 

const minNumber= Math.min(apples, banana, cherry);
console.log(`Мінімальне число:  ${minNumber}`);

const all= apples + banana + cherry ;
console.log (`Вартість всіх товарів : ${all}`);

const minRounded = Math.floor(apples) + Math.floor(banana) + Math.floor(cherry);
console.log (`Округлення в меншу сторону : ${minRounded}`);

const maxRounded = Math.ceil((all / 100)) * 100;
console.log(`Округлення до сотень : ${maxRounded}`);

const evenNumber = minRounded % 2 === 0 ? true : false;
console.log(`Чи є сума всіх товарів парним числом? : ${evenNumber}`);

const rest = 500 - all;
console.log(`Решта : ${rest}`);

const averege = (all / 3).toFixed(2);
console.log(`Середнє значення, округлене до другого знаку : ${averege}`);

const randomPrice = Math.random().toFixed(2);
console.log( `Знижка : ${randomPrice}`);

const needPay =all - (all * randomPrice).toFixed(2);
console.log(`Сума до оплати : ${needPay}`);

const costProducts = (apples/ 2 + banana / 2 + cherry / 2);

const profit = (costProducts - needPay).toFixed(2);
console.log(`Чистий прибуток : ${profit}`);

alert(
    `Максимальна ціна : ${maxNumber}
    Мінімальна ціна : ${minNumber}
    Вартість всіх товарів : ${all}
    Округлення в меншу сторону : ${minRounded}
    Округлення до сотень : ${maxRounded}
    Чи є сума всіх товарів парним числом? : ${evenNumber}
    Решта : ${rest}
    Середнє значення, округлене до другого знаку : ${averege}
    Знижка : ${randomPrice}
    Сума до оплати : ${needPay}
    Чистий прибуток : ${profit}
    `
);
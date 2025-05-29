let fruits = ['apples', 'bananas', 'pears', 'mangos', 'watermelons'];// Programmerar arrayen <--
let practiceArray = ['Spättan', 12, [true]];// Array med 3 olika datatyper.
console.log(practiceArray[0]);// Skriver ut 'Spättan'
console.log(fruits[4]);// Skriver ut 'watermelons'
fruits[2] = 'kiwis';// Byter ut nummer [2] från 'pears' till 'kiwis'.
console.log(fruits[2]); //Skriver nu ut 'kiwis'.
console.log(practiceArray.length);// Skriver ut hur många objekt arrayen har, i detta fall 5.
console.log(typeof [true]);// Frågar vilken sorts datatyp [true] är; object i detta fall.
console.log(typeof'Spättan');// Svarar att 'Spättan' är en string. 
let combinedArray = practiceArray.concat(fruits);// Kombinerar practiceArray och fruits.
console.log(combinedArray);/* Skriver ut ['Spättan', 12, [true], 'apples', 'bananas', 'pears', 'mangos', 'watermelons']. Startar med den array som 
sätts först */
let clonedArray = [...practiceArray];// KLONAR practiceArray.
console.log(clonedArray);// Loggar ut (3) ['Spättan', 12, Array(1)] Att den skriver Array om true beror på att det är ett element av den datatypen.
let clonedArray = [...fruits];// KLONAR arrayen fruits.
console.log(clonedArray); // Loggar ut (5) ['apples', 'bananas', 'pears', 'mangos','watermelons']
practiceArray.push(3); // Lägger TILL 3 som element (datatypen object)  -SIST- i arrayen practiceArray.
console.log(practiceArray[practiceArray.length - 1]); //Loggar ut sista elementet i arrayen. Första är 0 och sista är alltid -1.
fruits.unshift('Plums'); // Unshiftar fram 'Plums' FÖRST i arrayen fruits med hjälp av .unshift.
console.log(fruits); //Loggar ut fruits med de element som de nu ser ut, med 'Plums' först.
practiceArray.pop(); // Poppar bort SISTA elementet, [true] från arrayen practiceArray.
console.log(practiceArray); //Loggar ut elementen i practiceArray som är kvar; 'Spättan', 12. 
fruits.shift(); // Shiftar bort FÖRSTA elementet i arrayen fruits; här 'apples'.
console.log(fruits); // Loggar ut alla element i fruits, men utan 'apples' nu.
fruits.splice(1, 0, 'Pineapples'); // Lägger till 'Pineapples' på plats 1 (plats 2) i Index; ['apples', 'pinapples', 'bananas' osv.]
fruits.splice(2, 0, 'Dragonfruits', 'sharonfruits', 'honeymelons'); // Lägger till dessa från Index 2(plats 3 och framåt) i arrayen fruits.
let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1, 2); //tar bort nummer 1 och 2 i Index av names; 'Christoffer' och 'Johan'. 
console.log(names); // nu endast 'David' och 'Maja'. 
let nums = [1,2,3,4,5,6,7,8,9];
nums.reverse(); //spegelvänder arrayen nums element.
console.log(nums); // Loggar ut; 9, 8, 7, 6, 5, 4, 3, 2, 1.
let str = 'Supercalifragilisticexpialidocious'; // string.
console.log(str.includes('n')); // Kollar om strängen innehåller bokstaven 'n'. Loggar ut 'false'.
console.log(str.includes('x')); // Kollar om strängen innehåller bokstaven 'x'.
console.log(str.indexOf('p')); // Kollar vilken position första p:et har i arrayen, vilket blir '2' då första bokstaven har '0'.
console.log(str.slice(0, 5)); // Kollar vilka de fem första bokstäverna i indexet av strängen i den arrayen är.
console.log(str.slice(-7)); // Tar fram de 7 sista tecknena framifrån och bak i strängen; 'docius'.
let horses = ['Bestman', 'Beauty', 'Simona', 'Charm', 'Windy', 'Zebonny','Thron'];
horses.sort(); // Sorterar namnen i alfabetisk ordning.
console.log(horses); // Loggar ut Beauty, Bestman, Charm, Simona, Thron, Windy, Zebonny.




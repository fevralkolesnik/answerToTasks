import {encoded, translations} from './data.js'

//console.log("Let's rock")
//console.log(encoded, translations)

let exception = [
    'groupId',
    'service',
    'formatSize',
    'ca'
];

function except (key) {
    return exception.find((element) => element === key);
}

let counterGroups = {}; 
let uniqueKeys = new Set();

function groupsCounter (data) {
    if (counterGroups[data]) {
        counterGroups[data] += 1;
    } else {
        counterGroups[data] = 1;
    }
}


function decodedObj (obj) {
    let newObject = {};
    for (let key in obj) {
        if (!except(key) && obj[key] !== null) {
            newObject[key] = translations[obj[key]];

            groupsCounter(newObject[key]);

            if (newObject[key] === undefined) {
                uniqueKeys.add(obj[key]);
            }
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

function decoder () {
    let decoded = [];
    encoded.forEach(obj => {
        decoded.push(decodedObj(obj));
    });
    return decoded;
}

let decoded = decoder();
console.log(decoded);

// не поняла уникальное значение id, это поле из translations, которое встречается 1 раз, или ключи, которых там нет, поэтому:
console.log(counterGroups); // сколько раз каждое свойство из translations встретилось в массиве объектов

console.log(uniqueKeys); // ключи, которых нет в translations


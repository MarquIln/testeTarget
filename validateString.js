function counterAonString(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

const string = 'quantos anos voce precisA ter para tirar a carteirA de motoristA?';
const counterA = counterAonString(string);
console.log(`A letra "a" aparece ${counterA} vezes na string.`);
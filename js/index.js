const userName = prompt('enter you name');
alert('Hello' + userName);

const userAge = Number(prompt('Enter your age'));
const nextAge = add(userAge, 1);
alert('Next year you well be' + nextAge);

if(userAge >= 18) {
    alert('you are adult');
} else {
    alert('you are underage');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}
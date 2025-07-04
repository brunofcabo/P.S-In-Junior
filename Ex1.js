let delta;
let a = prompt("Digite o valor de a:");
let b = prompt("Digite o valor de b:");
let c = prompt("Digite o valor de c:");

delta = (b**2) - (4*(a*c));

if (delta > 0){
    let raiz1 = ((-b) + (delta**0.5)) / (2*a);
    let raiz2 = ((-b) - (delta**0.5)) / (2*a);
    console.log(`x1: ${raiz1}`);
    console.log(`x2: ${raiz2}`);
}

else if (delta == 0){
    let raiz = (-b) / (2*a);
    console.log(`Raiz: ${raiz}`);
}

else if (delta < 0){
    console.log(`Não existe raiz`);
}
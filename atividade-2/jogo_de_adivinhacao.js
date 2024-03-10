


  let numero;
  let tentativas = 0;


  while (true) {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    numero = parseInt(prompt("Guess a number between 1 and 100:"));

 
    if (isNaN(numero) || numero < 1 || numero > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    tentativas++;

    
    if (numero === numeroSecreto) {
      alert(`Parabéns , você acertou o numero secreto ${numeroSecreto} em ${tentativas} tentativas.`);
      break;
    }


    if (numero < numeroSecreto) {
      alert("Numero informado é menor, tente um numero maior");
    } else {
      alert("Numero informado é maior, tente um numero menor");
    }
  }



function ePalindromo(palavra){
    palavraArray = palavra.split();
    palavraIvertida = palavraArray.reverse();

    if(palavraIvertida === palavraArray){
        return true;
    }else{
        return false;
    }
}
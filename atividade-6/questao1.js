import PromptSync from "prompt-sync";

let loop = true

while(loop){
    console.log("Digite uma nota");
    let nota = PromptSync();

    if((nota <= 0) && !(nota >= 10)){
        console.log("Digite a nota Novamente");
    }else{
        loop = false;
        break
    }
}
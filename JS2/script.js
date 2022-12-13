function jokenpo(){
    let qtd = 0;
    let num = [1,2,3];

    while(1){
        let jogada = Number.parseInt(prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura\n"));
        let jogadaNPC = Math.floor(Math.random() * 3) + 1;
        
        
        if(!(num.includes(jogada))) break;

        if(jogadaNPC == 1){
            if(jogada == 1){
                console.log("O computador jogou Papel");
                console.log("A rodada empatou!");
            }else if(jogada == 2){
                console.log("O computador jogou Papel");
                break;
            }else{
                console.log("O computador jogou Papel");
                console.log("Você ganhou !")
                qtd++;
            }
        }
                
        if(jogadaNPC == 2){
            if(jogada == 1){
                console.log("O computador jogou Pedra");
                console.log("Você ganhou !")
                qtd++;
            }else if(jogada == 2){
                console.log("O computador jogou Pedra");
                console.log("A rodada empatou!");
            }else{
                console.log("O computador jogou Pedra");
                break;
            }
        }
                
        if(jogadaNPC == 3){
            if(jogada == 1){
                console.log("O computador jogou Tesoura");
                break;
            }else if(jogada == 2){
                console.log("O computador jogou Tesoura");
                console.log("Você ganhou !")
                qtd++;
            }else{
                console.log("O computador jogou Tesoura");
                console.log("A rodada empatou!");
            }
        
        }

    }

    console.log(`Você perdeu! A sua pontuação foi de ${qtd}`);
    
}
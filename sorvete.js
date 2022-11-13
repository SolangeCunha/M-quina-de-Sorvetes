/*Desenvolver o sistema de sorveteria proposto no exercício de vetores, com a parte visual. É um sistema do tipo self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 camadas (sabores). 

A aplicação deve possuir (imagem anexo): 

Label ou H1 -> Título da aplicação .
Input -> Espaço para adicionar um sabor.
Botões -> Adicionar sabor, Remover sabor e Finalizar pedido.
Label ou H1 -> Título da lista de sabores.
Div ou label -> Onde será mostrada a lista dos sabores atualizada.
Div ou label -> Onde serão mostradas as mensagens de para o usuário (em vermelho).

* Deve funcionar como uma pilha, cada sabor é adicionado após o outro.
* Botão remover, deve remover sempre o último sabor.

======== MENSAGENS e VALIDAÇÕES DOS BOTÕES ========

Botão Adicionar -> “Sabor adicionado!” OU “Não é possível adicionar mais sabores!”
Botão Remover -> “Sabor removido!” OU “Seu sorvete ainda não possui sabores!”
Lista -> "Sabor X - Sabor Y - Sabor Z - Sabor W” OU “Seu sorvete ainda não possui sabores!”
Botão Finalizar -> “Pedido finalizado!” OU “Seu sorvete ainda não possui sabores!”


Critérios de avaliação:

(3,0) Criar a parte visual (HTML obrigatório, CSS opcional) com os elementos.
(2,0) Criar um vetor para a lista / pilha.
(3,0) Adicionar e remover corretamente os sabores com as validações.
(2,0) Mostrar mensagens para o usuário.


Entrega até 18/11 pelo AVA na aba "Recuperações Paralelas - Envios".
Qualquer dúvida entrar em contato. Boa sorte! :D*/
let sabores = []
let inputSabor = document.getElementById("sabor")                     
document.getElementById(`sabor`).focus()        


function Adicionar(){

 
        
    if(sabores.length < 4 ){
            
        sabores.push(inputSabor.value)
        document.getElementById(`sabor`).value = ''              
    }else{       
       
        listaCompleta.innerHTML =`Não é possível adicionar mais sabores!`

    }
        
    listaSabores.innerHTML = `Sabores adicionados: ${sabores}`
}
    
function Remover(){
        
    if(sabores.length > 0){ 
          
        sabores.pop(inputSabor.value)
            
        listaSabores.innerHTML = `Sabores adicionados: ${sabores}`
         listaCompleta.innerHTML =``
           
    }else{
            
        alert("Seu sorvete ainda não possui sabores")
    }
        
        
}

function Finalizar(){
if(sabores.length > 0){

alert("Pedido finalizado!")
sorvetePronto.innerHTML =`Seu sorvete está pronto: Camada 1: ${sabores[0]},Camada 2: ${sabores[1]},Camada 3: ${sabores[2]},Camada 4: ${sabores[3]}`

}else{

alert("Seu sorvete ainda não possui sabores!")

}

    
}
    




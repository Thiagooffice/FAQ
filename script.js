const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log("Clicou!!")
    })
})
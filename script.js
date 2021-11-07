const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach((item)=>{
    item.addEventListener("click",()=>{
        const estaAtiva = item.classList.contains("ativo")
        if(!estaAtiva){
            itensPerguntasERespostas.forEach((item)=>{
                item.classList.remove("ativo")
            })
            item.classList.add("ativo")
        }else{
            item.classList.remove("ativo")
        }
    })
})
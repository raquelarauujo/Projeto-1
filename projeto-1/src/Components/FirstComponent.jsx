import React from 'react'

const Events = () => {
   
    // Função de evento que é acionada ao clicar no botão
    const handleClick = (e) => {
        // Mostra o evento no console (a informação do evento do clique)
        console.log(e);
        // Exibe um alerta com a mensagem "Evento com função!"
        alert("Evento com função!")
    }

    // Função simples que exibe um alerta com a mensagem "Testando"
    const callNames = () => {
        alert("Testando")
    }

  return (
    <div>
        {/* Botão que, ao ser clicado, exibe um alerta com uma mensagem fixa */}
        <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
            Clique Aqui
        </button>

        {/* Botão que, ao ser clicado, chama a função handleClick */}
        <div>
            <button onClick={handleClick}> 
                Clique com Função
            </button>
        </div>

        {/* Botão que, ao ser clicado, chama a função callNames */}
        <div>
            <button onClick={callNames}>
                Clique com Função
            </button>
        </div>
    </div>
  )
}

export default Events

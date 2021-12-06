//VARIÁVEIS
let time = 3000;
let index = 1;
const arrImages = ['../img/ana-larg-300.png', '../img/gabriel-larg-300.png', '../img/joao-larg-300.png', '/img/lucas-larg-300.png', '/img/maria-larg-300.png']

function start() {

    setInterval(() => {
        
        //REINICIAR:
        if (index > 1) {
            const getId = document.getElementById(`${index - 1}`)
            getId.style.backgroundColor = 'white'
        }
        if (index > 5) {
            index = 1;
        }

        //APLICAR:
        const getId = document.getElementById(`${index}`)
        getId.style.backgroundColor = 'rgb(27, 89, 139)'
        getId.click()

        // PEGAR IMAGEM SELECIONADA E CONTINUAR NA ORDEM CORRETA.
        let el = document.querySelector('#bolinhasDoCarrossel');
        el.addEventListener('click', function(e) {
            let idAtual = e.target.id
            
            if (idAtual != 'bolinhasDoCarrossel') {

                const getIdAtual = document.getElementById(`${idAtual}`)
                getIdAtual.style.backgroundColor = 'rgb(27, 89, 139)'
                
                getId.style.backgroundColor = 'white'

                if (idAtual == index) {//PARA QUANDO CLICAR MAIS DE UMA VEZ EM UM MESMO ITEM.
                    getIdAtual.style.backgroundColor = 'rgb(27, 89, 139)'
                }

                index = idAtual
            }            
        })

        //CONTABILIZAR:
        index++

    }, time)
}

window.addEventListener("load", start)

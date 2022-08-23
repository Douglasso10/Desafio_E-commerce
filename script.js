const contador = document.getElementById('n_contador')
const btn_mais = document.getElementById('contador_mais')
const btn_menos = document.getElementById('contador_menos')


let value = contador.value

btn_mais.addEventListener('click', () => {
    value = ++ value
    contador.value = value 
})

btn_menos.addEventListener('click', () =>{
    value = value !== 0 ? --value : 0
    contador.value = value;
})

const refresh = document.getElementById('refresh')

refresh.addEventListener('click', () => {
    location.reload()
})


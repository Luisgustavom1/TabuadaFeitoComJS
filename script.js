function gerar(){
    var snum = window.document.getElementById('numtab')
    var tab = window.document.getElementById('htmltab')
    if (snum.value.length == 0){
        window.alert('[ERRO] Digite um número...')
    } else {
        /* DO MEU JEITO
        
        var conta = window.document.getElementById('hconta')
        var resultado = window.document.getElementById('hresultado')
        var num = Number(snum.value)
        conta.innerHTML = ``
        resultado.innerHTML = ``        
        for(var c = 1; c<=10; c++){
            conta.innerHTML += (`${num}*${c} = </br>`)
            resultado.innerHTML += `${num*c} </br>`
        }  */
        var num = Number(snum.value)
        tab.innerHTML = ''
        for(var c = 1; c<=10; c++){
            let item = document.createElement('option')   
            item.innerHTML = `${num} x ${c} = ${c*num}`  
            tab.appendChild(item)   
            item.Value = `${c}`
        }
    }
}















async function converter() {
    const moeda = document.getElementById("moeda").value;
    const valor = document.getElementById("valor").value;
    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const data = await response.json();
    const cotacao = parseFloat(data.USDBRL.bid);
    
    let resultado = "";
    if (valor) {
        if (moeda === "real") {
            const valorConvertido = valor / cotacao;
            resultado = `R$${valor} equivale a $${valorConvertido.toFixed(2).replace('.', ',')} dólares na cotação atual de $${cotacao.toFixed(2).replace('.', ',')}`;
        } else if (moeda === "dolar") {
            const valorConvertido = valor * cotacao;
            resultado = `$${valor} equivale a R$${valorConvertido.toFixed(2).replace('.', ',')} reais na cotação atual de $${cotacao.toFixed(2).replace('.', ',')}`;
        }
    } else {
        resultado = "Por favor, insira um valor.";
    }
    
    document.getElementById("resultado").innerText = resultado;
}
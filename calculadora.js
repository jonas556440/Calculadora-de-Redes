function calcular() {
    // Obtenha o valor do IP e da máscara de rede
    const ip = document.getElementById("ip").value;
    const mascara = document.getElementById("mascara").value;

    // Faça os cálculos aqui e exiba os resultados no elemento #resultados
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = `<h2>Resultados:</h2>
        <!-- Exiba os resultados calculados aqui -->`;
}

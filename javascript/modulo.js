// Converte um número inteiro decimal (positivo ou negativo) para uma string binária
// Exemplos:
// decimalParaBinario(192) -> '11000000'
// decimalParaBinario(5)   -> '101'
// decimalParaBinario(-5)  -> '-101'
function decimalParaBinario(n) {
    if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) {
        throw new TypeError('A função espera um inteiro finito como entrada.');
    }

    if (n === 0) return '0';

    const negativo = n < 0;
    let valor = Math.abs(n);
    let bits = '';

    while (valor > 0) {
        bits = (valor % 2) + bits;
        valor = Math.floor(valor / 2);
    }

    return negativo ? '-' + bits : bits;
}

// Se o script for executado diretamente com Node, aceitar argumento CLI
if (typeof require !== 'undefined' && require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        // exemplos de demonstração
        const exemplos = [192, 168, 0, 1];
        exemplos.forEach(v => console.log(v + ' -> ' + decimalParaBinario(v)));
    } else {
        // tentar converter cada argumento para inteiro e imprimir
        args.forEach(a => {
            const n = Number(a);
            try {
                console.log(a + ' -> ' + decimalParaBinario(n));
            } catch (err) {
                console.error('Erro ao converter', a + ':', err.message);
            }
        });
    }
}

// Exporta a função para uso em outros módulos
if (typeof module !== 'undefined') module.exports = { decimalParaBinario };
// Arquivo: backend/server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PdfReader } = require('pdfreader');

const app = express();
app.use(cors()); // Permite que o front-end converse com a API

// O Multer guarda o PDF na memória temporária para lermos o binário
const upload = multer({ storage: multer.memoryStorage() });

// Função que traduz o binário do PDF usando a biblioteca
function extrairTextoPuroPdfBuffer(buffer) {
    return new Promise((resolve, reject) => {
        let textoAcumulado = "";
        new PdfReader().parseBuffer(buffer, (err, item) => {
            if (err) reject(err);
            else if (!item) resolve(textoAcumulado);
            else if (item.text) textoAcumulado += item.text + " ";
        });
    });
}

// Nossa rota da API que recebe o PDF
app.post('/api/taxas', upload.single('arquivoPdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ erro: 'Nenhum arquivo enviado.' });
        }

        const textoBruto = await extrairTextoPuroPdfBuffer(req.file.buffer);
        
        // Remove os espaços e quebras para unir os números
        const textoLimpo = textoBruto.replace(/[\s\r\n\\]/g, '');

        // A Regex infalível para os valores negativos
        const padraoValoresNegativos = /R\$-([\d.,]+)/g;
        let totalTaxas = 0;
        let quantidadeTaxas = 0;
        let match;

        while ((match = padraoValoresNegativos.exec(textoLimpo)) !== null) {
            let valorStr = match[1]; 
            let valorLimpoNum = valorStr.replace(/\./g, '').replace(',', '.');
            let valorFloat = parseFloat(valorLimpoNum);

            // Filtro para taxas (menores que R$ 10,00)
            if (!isNaN(valorFloat) && valorFloat < 10) {
                totalTaxas += valorFloat;
                quantidadeTaxas++;
            }
        }

        // Devolve o JSON pronto para a interface
        res.json({
            quantidade: quantidadeTaxas,
            totalFormatado: totalTaxas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        });

    } catch (erro) {
        console.error('Erro na API:', erro);
        res.status(500).json({ erro: 'Erro interno ao processar o PDF.' });
    }
});

const PORTA = 3001;
app.listen(PORTA, () => {
    console.log(`✅ Back-end (API) rodando na porta ${PORTA}`);
});
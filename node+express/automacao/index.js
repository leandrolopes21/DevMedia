const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PdfReader } = require('pdfreader');

const app = express();
app.use(cors());

// Configuramos o Multer para guardar o PDF na memória (buffer) temporariamente, 
// assim não precisamos salvar o arquivo no HD
const upload = multer({ storage: multer.memoryStorage() });

// Função adaptada para ler o PDF direto da memória (Buffer) em vez do disco
function extrairTextoPuroPdfBuffer(buffer) {
    return new Promise((resolve, reject) => {
        let textoAcumulado = "";
        new PdfReader().parseBuffer(buffer, (err, item) => {
            if (err) {
                reject(err);
            } else if (!item) {
                resolve(textoAcumulado);
            } else if (item.text) {
                textoAcumulado += item.text + " ";
            }
        });
    });
}

// Rota da API que recebe o arquivo do front-end
app.post('/api/taxas', upload.single('arquivoPdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ erro: 'Nenhum arquivo enviado.' });
        }

        // Extrai o texto do buffer do arquivo enviado
        const textoBruto = await extrairTextoPuroPdfBuffer(req.file.buffer);
        const textoLimpo = textoBruto.replace(/[\s\r\n\\]/g, '');

        const padraoValoresNegativos = /R\$-([\d.,]+)/g;
        let totalTaxas = 0;
        let quantidadeTaxas = 0;
        let match;

        while ((match = padraoValoresNegativos.exec(textoLimpo)) !== null) {
            let valorStr = match[1]; 
            let valorLimpoNum = valorStr.replace(/\./g, '').replace(',', '.');
            let valorFloat = parseFloat(valorLimpoNum);

            if (!isNaN(valorFloat) && valorFloat < 10) {
                totalTaxas += valorFloat;
                quantidadeTaxas++;
            }
        }

        // Devolve o resultado em formato JSON para o Front-end
        res.json({
            quantidade: quantidadeTaxas,
            totalFormatado: totalTaxas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            totalNum: totalTaxas
        });

    } catch (erro) {
        console.error('Erro no processamento:', erro);
        res.status(500).json({ erro: 'Erro ao processar o PDF.' });
    }
});

const PORTA = 3001;
app.listen(PORTA, () => {
    console.log(`🚀 API rodando na porta ${PORTA}`);
});
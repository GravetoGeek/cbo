import {createReadStream,createWriteStream,readFile,writeFile} from 'fs'

const inputFile = 'CBO2002 - PerfilOcupacional.csv'
const outputFile = 'perfilOcupacional.json'

// Criamos um stream de leitura do CSV
const readStream = createReadStream(inputFile, { encoding: 'utf8' })

// Criamos um stream de escrita para o JSON de saída
const writeStream = createWriteStream(outputFile, { encoding: 'utf8' })

// Variáveis auxiliares
let leftover = ''      // Armazena pedaço de texto incompleto do chunk
let lineCount = 0      // Contador de linhas processadas
let headers = []       // Array que guardará o cabeçalho (colunas)

// Como vamos escrever um array JSON grande, iniciamos o arquivo com '['
writeStream.write('[\n')

readStream.on('data', (chunk) => {
    // Acumula o chunk na variável leftover
    leftover += chunk

    // Quebra o conteúdo em linhas
    const lines = leftover.split('\n')

    // A última linha pode estar incompleta, então removemos do array e guardamos em leftover
    leftover = lines.pop()

    // Processa cada linha completa
    for (let line of lines) {
        lineCount++

        // Remove espaços extras e quebras de linha no final/início
        line = line.trim()

        // Se a linha estiver vazia, ignoramos
        if (!line) continue

        // Se for a primeira linha (cabeçalho), extraímos as colunas
        if (lineCount === 1) {
            headers = line.split(';')
            continue  // pula para a próxima iteração
        }

        // Caso contrário, processamos a linha como dados
        const values = line.split(';')
        const obj = {}

        // Monta o objeto (chave -> valor) com base no cabeçalho
        headers.forEach((header, index) => {
            obj[header] = values[index] || ''
        })

        // Escreve o objeto no JSON de saída
        // Colocamos uma vírgula e quebra de linha para separar objetos, exceto no primeiro
        // (Mas aqui, para simplificar, colocamos a vírgula sempre antes e depois tratamos o final)
        writeStream.write(JSON.stringify(obj, null, 2))
        writeStream.write(',\n')
    }
})

readStream.on('end', () => {
    // Quando terminamos a leitura, pode haver um "resto" que ainda não foi processado
    if (leftover) {
        lineCount++
        leftover = leftover.trim()

        if (lineCount === 1) {
            // Significa que só tinha 1 linha no arquivo (que é cabeçalho)
            headers = leftover.split(',')
        } else {
            // É um último registro
            const values = leftover.split(',')
            const obj = {}
            headers.forEach((header, index) => {
                obj[header] = values[index] || ''
            })
            writeStream.write(JSON.stringify(obj, null, 2))
            writeStream.write(',\n')
        }
    }

    // Fecha o array JSON com ']', mas antes precisamos remover a última vírgula que colocamos
    // O jeito mais simples (neste exemplo) é fechar o arquivo, depois remover a última vírgula
    // Para manter o exemplo didático, vamos fazer de forma mais simples, que funciona mas não é otimizada:
    writeStream.end(']\n', () => {
    // Agora temos um arquivo JSON que provavelmente termina com ",\n]"
    // Precisamos remover a vírgula extra antes do ']' final.
    // Leremos o arquivo, removeremos a vírgula extra e escreveremos de volta.

        readFile(outputFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo JSON:', err)
                return
            }
            // Remove a última vírgula antes do fechamento do array "],"
            // Regex para encontrar ",\n]" ou ",\r\n]" e substituir por "\n]"
            const result = data.replace(/,\s*\n\]$/, '\n]')

            writeFile(outputFile, result, 'utf8', (err) => {
                if (err) {
                    console.error('Erro ao escrever o arquivo JSON:', err)
                    return
                }
                console.log('Conversão concluída com sucesso!')
            })
        })
    })
})

readStream.on('error', (err) => {
    console.error('Erro ao ler o arquivo CSV:', err)
})

writeStream.on('error', (err) => {
    console.error('Erro ao escrever o arquivo JSON:', err)
})

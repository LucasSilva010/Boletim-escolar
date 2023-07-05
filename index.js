const aprovados = []
const reprovados = []
const notaParaPassar = 7
let dadosAlunos = {}

function adicionarNotaAlunos() {
  const nome = prompt('Digite o nome do aluno')
  const nota = parseFloat(prompt('Qual a nota do aluno?'))

  if(nota >= notaParaPassar) {
    alert('Aluno ' + nome + ' foi aprovado!')
    dadosAlunos = {nome:nome, nota:nota}
    aprovados.push(dadosAlunos)
  } else if(nota < notaParaPassar) {
    alert('Aluno ' + nome + ' foi reprovado!')
    dadosAlunos = {nome:nome, nota:nota}
    reprovados.push(dadosAlunos)
  }
 return dadosAlunos, aprovados, reprovados
}  

function exibirMenu(){
  opcao = prompt('Olá! O que deseja fazer?' + '\n1. Adicionar nota de aluno.' + '\n2. Verificar situação de alunos.' + '\n3. Sair.'
 )
 return opcao
}

function exibirAlunosAprovadosOuReprovados(){
  opcoes = prompt('Deseja ver a lista de quais alunos?\n ' + 
  '\n1. Aprovados' +
  '\n2. Reprovados')

  return opcoes
}

function executarPrograma() {
  let opcao = ''
  let opcoes = ''
  do {
    opcao = exibirMenu()
    switch (opcao) {
      case '1':
        adicionarNotaAlunos()
        break
      case '2':
        opcoes = exibirAlunosAprovadosOuReprovados()
        switch(opcoes){
          case '1':
            aprovados.forEach(function (dadosAlunos){
              alert('Lista de alunos aprovados:\n' + 'Nome: ' + dadosAlunos.nome + '\nNota: ' + dadosAlunos.nota + '\nSituação: Aprovado') 
            })
            break
          case '2':
            reprovados.forEach(function (dadosAlunos){
              alert('Lista de alunos reprovados:\n' + 'Nome: ' + dadosAlunos.nome + '\nNota: ' + dadosAlunos.nota + '\nSituação: Reprovado') 
            })
            break
          default: 
          alert('Opção inválida!')
          break
        }
        break
      case '3':
        alert('Encerrando o programa...')
        break
      default:
        alert('Opção inválida!')
    }
  } while (opcao !== '3')
}

executarPrograma()
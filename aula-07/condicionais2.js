
// Muito útil quando sua variável possui valores específicos

const permissoes = 'professor'; // 'aluno', 'professor', 'admin'

switch (permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas!');
        break;
    case 'professor':
        console.log('Você pode editar o conteúdo das aulas!');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema!');
        break;
    default:
        console.log('Nenhum dos casos foi atendido!');
}
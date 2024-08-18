const chk = document.getElementById('chk');
// Função para alternar o modo noturno
function toggleDarkMode() {
    document.body.classList.toggle('dark'); // Alternar classe 'dark' no body
    const modoNoturnoAtivado = document.body.classList.contains('dark');
    localStorage.setItem('modoNoturnoAtivado', modoNoturnoAtivado.toString()); // Salvar no localStorage
}
// Verificar o estado atual do modo noturno ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const modoNoturnoSalvo = localStorage.getItem('modoNoturnoAtivado') === 'true';
    if (modoNoturnoSalvo) {
        document.body.classList.add('dark'); // Aplicar classe 'dark' se modo noturno estiver ativado
        chk.checked = true; // Marcar o checkbox como selecionado
    }
    // Adicionar um listener para o toggle de modo noturno
    chk.addEventListener('change', toggleDarkMode);
});

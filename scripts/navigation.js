function sair() {
    const confirmation = confirm("Você realmente deseja sair do jogo?");
    if (confirmation) {
        window.location.href = 'sair.html';
    }
}
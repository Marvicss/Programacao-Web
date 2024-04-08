
function calcularAnosPopulacao(A_populacao, A_taxa_crescimento, B_populacao, B_taxa_crescimento) {
    let anos = 0;
    while (A_populacao < B_populacao) {
        A_populacao *= (1 + A_taxa_crescimento / 100);
        B_populacao *= (1 + B_taxa_crescimento / 100);
        anos++;
    }
    return anos;
}


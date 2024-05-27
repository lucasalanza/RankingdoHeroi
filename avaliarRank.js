function avaliarJogador(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de **${saldoVitorias}** e está no nível de **${nivel}**`;
}

// Exportar a função para ser usada em outros módulos
module.exports = {
  avaliarJogador,
};

// Teste a função diretamente se este arquivo for executado no Node.js
if (require.main === module) {
  const vitorias = parseInt(process.argv[2], 10);
  const derrotas = parseInt(process.argv[3], 10);

  if (!isNaN(vitorias) && !isNaN(derrotas)) {
    console.log(avaliarJogador(vitorias, derrotas));
  } else {
    console.log(
      "Por favor, forneça a quantidade de vitórias e derrotas do jogador."
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const heroisList = document.getElementById("herois");
  const respostaAvaliacao = document.getElementById("respostaAvaliação");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      const nomeHeroi = document.getElementById("iNome").value;
      const vitorias = parseInt(document.getElementById("iVitorias").value, 10);
      const derrotas = parseInt(document.getElementById("iDerrotas").value, 10);

      const resultado = classificarHeroi(vitorias, derrotas);

      adicionarHeroiNaLista(
        nomeHeroi,
        resultado.saldoVitorias,
        resultado.nivel
      );
      respostaAvaliacao.textContent = `O Herói tem de saldo de **${resultado.saldoVitorias}** e está no nível de **${resultado.nivel}**`;

      form.reset();
      form.classList.remove("was-validated");
    } else {
      form.classList.add("was-validated");
    }
  });
  function classificarHeroi(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

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

    return { saldoVitorias, nivel };
  }

  function adicionarHeroiNaLista(nome, saldoVitorias, nivel) {
    const novoItem = document.createElement("a");
    novoItem.href = "#";
    novoItem.className = `list-group-item list-group-item-action`;
    novoItem.innerHTML = `Herói: ${nome} - Saldo de Vitórias: ${saldoVitorias} <span class="badge text-bg-primary rounded-pill">${nivel}</span>`;

    heroisList.insertBefore(novoItem, heroisList.firstChild);
  }
});

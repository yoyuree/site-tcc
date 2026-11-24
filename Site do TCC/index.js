const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        const aberto = menu.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        });
    });
}

const ano = document.querySelector("#ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

const formulario = document.querySelector(".formulario");
if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const dados = new FormData(evento.currentTarget);
        const assunto = encodeURIComponent(`Orçamento de marcenaria — ${dados.get("nome")}`);
        const corpo = encodeURIComponent(
            `Nome: ${dados.get("nome")}\nE-mail: ${dados.get("email")}\n\nProjeto:\n${dados.get("mensagem")}`
        );

        const status = document.querySelector(".form-status");
        if (status) {
            status.textContent = "Abrindo seu aplicativo de e-mail...";
        }

        window.location.href =
            `mailto:contato@oficinaazul.com.br?subject=${assunto}&body=${corpo}`;
    });
}
window.addEventListener("DOMContentLoaded", () => {
  // Carrega o CSS do chatbot
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "https://steady-brigadeiros-81da3c.netlify.app/style.css";
  document.head.appendChild(style);

  // Carrega o HTML do chatbot
  fetch("https://steady-brigadeiros-81da3c.netlify.app/index.html")
    .then(res => res.text())
    .then(html => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);

      // Depois que o HTML for inserido, carregamos o script principal
      const script = document.createElement("script");
      script.src = "https://steady-brigadeiros-81da3c.netlify.app/script.js";
      script.defer = true;
      document.body.appendChild(script);
    });
});

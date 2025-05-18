window.addEventListener("DOMContentLoaded", () => {
    // Carrega o CSS do chatbot
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "https://neobot-ecru.vercel.app/style.css";
    document.head.appendChild(style);
  
    // Carrega o HTML do chatbot
    fetch("https://neobot-ecru.vercel.app/index.html")
      .then(res => res.text())
      .then(html => {
        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container);
  
        // Depois que o HTML for inserido, carregamos o script
        const script = document.createElement("script");
        script.src = "https://neobot-ecru.vercel.app/script.js";
        script.defer = true;
        document.body.appendChild(script);
      });
  });
  
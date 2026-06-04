const templateTiktok = document.createElement("template");
// Ajustamos el ancho (width) y alto (height) para que sea vertical como TikTok
templateTiktok.innerHTML = `
  <div>
    <iframe 
      id="reproductorTiktok" 
      width="325" 
      height="580" 
      src="" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
`;

class TiktokElemento extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const templateContent = templateTiktok.content.cloneNode(true);

        const idVideo = this.getAttribute("identificador");

        // La URL de incrustación para TikTok usa /embed/ seguido del ID
        templateContent.querySelector("#reproductorTiktok").src = `https://www.tiktok.com/embed/${idVideo}`;

        shadow.append(templateContent);
    }
}
customElements.define("tiktok-elemento", TiktokElemento);
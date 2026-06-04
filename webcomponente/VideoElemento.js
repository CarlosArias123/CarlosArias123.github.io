const templateVideo = document.createElement("template");
templateVideo.innerHTML = `
  <div>
    <iframe 
      id="reproductor" 
      width="560" 
      height="315" 
      src="" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
`;


class VideoElemento extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const templateContent = templateVideo.content.cloneNode(true);

        const idVideo = this.getAttribute("identificador");

        templateContent.querySelector("#reproductor").src = `https://www.youtube.com/embed/${idVideo}`;

        shadow.append(templateContent);
    }
}
customElements.define("video-elemento", VideoElemento);
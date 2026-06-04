const template = document.createElement("template");
template.innerHTML = "<div><h1>Oferta: <span id='nombreOferta'></span></h1></div> <p>¡Aprovecha esta oferta por tiempo limitado!</p>";


class OfertaElemento extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const templateContent = template.content.cloneNode(true);
        
        // 1. Obtener el atributo "nombre" directamente
        const nombre = this.getAttribute("nombre");
        console.log("Nombre: ", nombre);

        // 2. Modificar el <span> dentro del template clonado antes de meterlo a la página
        templateContent.querySelector("#nombreOferta").textContent = nombre;

        // 3. Agregar el template ya modificado al shadow DOM
        shadow.append(templateContent);
        
        console.log("Constructor ", this);
    }

}

customElements.define("oferta-elemento", OfertaElemento);


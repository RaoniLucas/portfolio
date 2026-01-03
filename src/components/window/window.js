export default class Window {
   constructor(conteudo) {
      this.conteudo = conteudo;
      this.modal = null;
   }

   toggle() {
      this.modal?.classList.toggle("ativo") || this.criar();
      
      // Toggle para fechar menu em breve
   }

   criar() {
      this.modal = document.createElement("div");
      this.modal.className = "modal";
      this.modal.innerHTML =
         typeof this.conteudo === "function" ? this.conteudo() : this.conteudo;

      document.body.appendChild(this.modal);

      this.modal.onclick = (e) => e.target === this.modal && this.fechar();
      document.onkeydown = (e) => e.key === "Escape" && this.fechar();

      this.modal.offsetWidth;
      this.modal.classList.add("ativo");
   }

   fechar() {
      this.modal?.classList.remove("ativo");

      this.modal?.addEventListener(
         "transitionend",
         () => {
            if (!this.modal?.classList.contains("ativo")) {
               this.modal?.remove();
               this.modal = null;
            }
         },
         { once: true },
      );
   }
}

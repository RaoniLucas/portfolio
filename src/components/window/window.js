export default class Modal {
   constructor(config = {}) {
      // Configurações padrão
      this.config = {
         id: `modal-${Date.now()}`,
         content: '',
         closeButton: true,
         overlay: true,
         overlayClose: true,
         onClose: null,
         ...config
      };
      
      // Elementos
      this.modalElement = null;
      this.overlayElement = null;
      this.contentElement = null;
      
      this.isOpen = false;
      
      this.init();
   }
   
   init() {
      this.createModal();
      this.setupEvents();
   }
   
   createModal() {
      // Cria overlay se necessário
      if (this.config.overlay) {
         this.overlayElement = document.createElement('div');
         this.overlayElement.className = 'modal-overlay';
         this.overlayElement.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
         `;
         document.body.appendChild(this.overlayElement);
      }
      
      // Cria modal
      this.modalElement = document.createElement('div');
      this.modalElement.id = this.config.id;
      this.modalElement.className = 'modal';
      this.modalElement.style.cssText = `
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         background: white;
         padding: 20px;
         border-radius: 8px;
         box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
         z-index: 1000;
         min-width: 300px;
         max-width: 90vw;
         max-height: 90vh;
         overflow-y: auto;
         display: none;
      `;
      
      // Botão de fechar
      if (this.config.closeButton) {
         const closeBtn = document.createElement('button');
         closeBtn.className = 'modal-close';
         closeBtn.innerHTML = '×';
         closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: #666;
         `;
         
         closeBtn.addEventListener('mouseover', () => {
            closeBtn.style.backgroundColor = '#f0f0f0';
         });
         
         closeBtn.addEventListener('mouseout', () => {
            closeBtn.style.backgroundColor = 'transparent';
         });
         
         this.modalElement.appendChild(closeBtn);
      }
      
      // Área de conteúdo
      this.contentElement = document.createElement('div');
      this.contentElement.className = 'modal-content';
      this.contentElement.style.cssText = `
         margin-top: ${this.config.closeButton ? '10px' : '0'};
      `;
      
      // Adiciona conteúdo
      this.setContent(this.config.content);
      
      this.modalElement.appendChild(this.contentElement);
      document.body.appendChild(this.modalElement);
   }
   
   setContent(content) {
      this.contentElement.innerHTML = '';
      
      if (typeof content === 'string') {
         this.contentElement.innerHTML = content;
      } else if (content instanceof HTMLElement) {
         this.contentElement.appendChild(content);
      }
   }
   
   setupEvents() {
      // Fechar pelo botão
      const closeBtn = this.modalElement.querySelector('.modal-close');
      if (closeBtn) {
         closeBtn.addEventListener('click', () => this.close());
      }
      
      // Fechar pelo overlay
      if (this.config.overlay && this.config.overlayClose) {
         this.overlayElement.addEventListener('click', () => this.close());
      }
      
      // Previne que clique no modal feche
      this.modalElement.addEventListener('click', (e) => {
         e.stopPropagation();
      });
   }
   
   open() {
      this.isOpen = true;
      
      if (this.overlayElement) {
         this.overlayElement.style.display = 'block';
      }
      
      this.modalElement.style.display = 'block';
      
      // Foco no primeiro elemento interativo
      setTimeout(() => {
         const firstInput = this.modalElement.querySelector('input, button, textarea, select');
         if (firstInput) firstInput.focus();
      }, 100);
   }
   
   close() {
      this.isOpen = false;
      
      if (this.overlayElement) {
         this.overlayElement.style.display = 'none';
      }
      
      this.modalElement.style.display = 'none';
      
      if (this.config.onClose) {
         this.config.onClose();
      }
   }
   
   destroy() {
      if (this.overlayElement) {
         this.overlayElement.remove();
      }
      this.modalElement.remove();
   }
   
   // Método para adicionar CSS personalizado
   addStyles(styles) {
      Object.assign(this.modalElement.style, styles);
   }
}
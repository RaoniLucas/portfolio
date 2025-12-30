import { menuListenerElements } from './menuTemplateElements.js';

export default class Menu {
   constructor() {
      this.isOpen = false;
      
      this.menuButton = document.getElementById('menu-button');
      this.menuContainer = null;
      this.bodyHTML = document.querySelector('.body');
      
      this.scrollPosition = 0;
      this.isMobile = false;
      
      this.init();
   }
   
   init() {
      this.menuModal();
      this.setupEvents();
      
      this.checkMobile();
      this.setupResizeListener();
   }
   
   menuModal() {
      this.menuButton.className = 'menu-button';
      this.menuButton.classList.add('hidden');
      
      this.menuContainer = document.createElement('div');
      this.menuContainer.id = 'menu-container';
      this.menuContainer.className = 'menu-container';
      this.menuContainer.classList.add('hidden');
      this.menuContainer.innerHTML = menuListenerElements();
      
      document.body.insertAdjacentElement('afterbegin', this.menuContainer);
   }
   
   updateMenu() {
      const isActive = this.isOpen;
      
      this.bodyHTML.classList.toggle('menu-active', isActive);
      this.bodyHTML.classList.toggle('menu-hidden', !isActive);
      
      this.menuButton.classList.toggle('active', isActive)
      this.menuButton.classList.toggle('hidden', !isActive)
      
      this.menuContainer.classList.toggle('active', isActive);
      this.menuContainer.classList.toggle('hidden', !isActive);
      
      if (this.isMobile) {
         if (isActive) {
            this.lockScroll();
         } else {
            this.unlockScroll();
         }
      }
   }
   
   toggleMenu() {
      this.isOpen = !this.isOpen;
      this.updateMenu();
   }
   
   setupEvents() {
      this.menuButton.addEventListener('click', () => {
         this.toggleMenu();
      });
   }
   
   
   // Métodos utilitários para correção de bugs do menu
   checkMobile() {
      this.isMobile = window.innerWidth <= 675;
      return this.isMobile;
   }
   
   lockScroll() {
      this.scrollPosition = window.pageYOffset;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
   }
   
   unlockScroll() {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      window.scrollTo(0, this.scrollPosition);
   }
   
   setupResizeListener() {
      let resizeTimeout;
      window.addEventListener('resize', () => {
         clearTimeout(resizeTimeout);
         resizeTimeout = setTimeout(() => {
            const wasMobile = this.isMobile;
            this.checkMobile();
            
            if (this.isMobile && this.isOpen && !wasMobile) {
               this.lockScroll();
            }
            else if (!this.isMobile && this.isOpen && wasMobile) {
               this.unlockScroll();
            }
         }, 100);
      });
   }
}
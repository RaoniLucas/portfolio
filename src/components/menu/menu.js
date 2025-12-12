import { menuListenerElements } from './menuTemplateElements.js';

export default class Menu {
   constructor() {
      this.isOpen = false;
      this.menuButton = document.getElementById('menu-button');
      this.menuContainer = null;
      
      this.bodyHTML = document.querySelector('.body');
      
      this.init();
   }
   
   init() {
      this.menuModal();
      this.setupEvents();
   }
   
   menuModal() {
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
      
      this.menuContainer.classList.toggle('active', isActive);
      this.menuContainer.classList.toggle('hidden', !isActive);
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
}
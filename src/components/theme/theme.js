export default class Theme {
   constructor() {
      this.switchButton = document.querySelector('.switch-container');
      this.switch = document.querySelector('.switch');
      this.body = document.querySelector('body');
      
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      
      this.init();
   }
   
   init() {
      this.applyTheme();
      this.setupEvents();
   }
   
   applyTheme() {
      this.body.classList.toggle('dark', this.isDarkMode);
      this.body.classList.toggle('light', !this.isDarkMode);
      this.switch.classList.toggle('dark', this.isDarkMode);
      this.switch.classList.toggle('light', !this.isDarkMode);
      
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
   }
   
   toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
   }
   
   setupEvents() {
      this.switchButton.addEventListener('click', () => {
         this.toggleTheme();
      });
   }
}
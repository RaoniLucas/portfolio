export default class Theme {
   constructor() {
      this.switchButton = document.querySelector('.switch-container');
      this.switch = document.querySelector('.switch');
      this.body = document.querySelector('body');
      
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      
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
      
      this.updateThemeColor();
      
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
   }
   
   updateThemeColor() {
      let meta = document.querySelector('meta[name="theme-color"]');
      
      if (!meta) {
         meta = document.createElement('meta');
         meta.name = 'theme-color';
         document.head.appendChild(meta);
      }
      
      meta.content = this.isDarkMode ? '#000000' : '#FFFFFF';
      console.log('Cor da meta tag atualizada:', meta.content); // Saída para verificar as alterações
   }
   
   toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
   }
   
   setupEvents() {
      this.switchButton.addEventListener('click', () => this.toggleTheme());
   }
}
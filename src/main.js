import Menu from './components/menu/menu.js';
import Theme from './components/theme/theme.js';

try {
   new Menu;
   console.log('Menu tudo funcionando!');
} catch {
   console.error('Falha ao inicar menu');
}

try {
   new Theme;
   console.log('Sistemas de temas funcionando!');
} catch {
   console.error('Falha ao iniciar a alteração de temas');
}

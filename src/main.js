import Theme from './components/theme/theme.js';
import Menu from './components/menu/menu.js';

try {
   new Theme;
   console.log('Sistemas de temas funcionando!');
} catch {
   console.error('Falha ao iniciar a alteração de temas');
}

try {
   new Menu;
   console.log('Menu tudo funcionando!');
} catch {
   console.error('Falha ao inicar menu');
}


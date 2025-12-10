import Theme from './components/theme/theme.js';

try {
   new Theme;
   console.log('Sistemas de temas funcionando!');
} catch {
   console.error('Falha ao iniciar a alteração de temas');
}
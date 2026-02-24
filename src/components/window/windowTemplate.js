export const windowContact = () => {
   return `
      <div class="contact-info">
         <header class="contact-info__header">
            <button class="contact-info__close">Fechar</button>
         </header>
         <main class="contact-info__main">
            <form class="contact-info__list">
               <label for="firstName">Nome</label>
               <input id="firstName" type="text" placeholder="Primeiro Nome" name="firstName">
               <input id="lastName" type="text" placeholder="Segundo Nome" name="lastName">

               <label for="email">Email</label>
               <input id="email" type="email" placeholder="Informe seu email" name="email">

               <label for="subject">Assunto</label>
               <input id="subject" type="text" placeholder="Informe o assunto" name="subject">

               <label for="message">Mensagem</label>
               <textarea id="message" placeholder="Informe a mensagem" name="message"></textarea>

               <button type="submit">Enviar</button>
            </form>
         </main>
      </div>
   `;
};

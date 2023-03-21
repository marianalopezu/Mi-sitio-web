let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 40,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Gestión Pública y diseño páginas web.')
  .pauseFor(1000)
  .deleteChars(10)
  .start();
  
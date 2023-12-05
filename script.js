function toggleMode(){
  const html = document.documentElement;
  const imagem = document.querySelector('#profile img');
  html.classList.toggle('light');
  if(html.classList.contains('light')){
    imagem.setAttribute('src', './assets/avatar-light.png');
  }else{
    imagem.setAttribute("src", "./assets/avatar.png")
  }
}
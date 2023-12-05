function toggleMode(){
  // Selecionando elementos do documento
  const html = document.documentElement;
  const imagem = document.querySelector('#profile img');
  //Mudando de default para light com a metodo toggle
  html.classList.toggle('light');
  //Alterando imagem em funcao do tema
  if(html.classList.contains('light')){
    imagem.setAttribute('src', './assets/avatar-light.png');
  }else{
    imagem.setAttribute("src", "./assets/avatar.png")
  }
}
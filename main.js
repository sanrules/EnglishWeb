const abrir = id => {
  let estilo = document.getElementById(id).style.display;
  if (estilo == 'inline-block') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'inline-block';
  }
};

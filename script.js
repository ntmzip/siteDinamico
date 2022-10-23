const comandos = document.getElementsByTagName('button');


comandos[0].addEventListener('click', clientes);
comandos[1].addEventListener('click', estoque);
comandos[2].addEventListener('click', relatorio);



function clientes() { 

  var telaClientes = document.querySelectorAll(".clientes");
    if(telaClientes[0].style.display === "none"){
      telaClientes[0].style.display = "block ";
    }
    else {
    
        telaClientes[0].style.display = "none"
      
    }

}

function estoque()  { 
  var telaEstoque = document.querySelectorAll(".estoque");

  if(telaEstoque[0].style.display === "none"){
    telaEstoque[0].style.display = "block ";
    
  }
  else {
  telaEstoque[0].style.display = "none"

  }
}

function relatorio()  { 

  var telaRelatorio = document.querySelectorAll(".relatorios");

  if(telaRelatorio[0].style.display === "none"){
    telaRelatorio[0].style.display = "block ";
  }
  else {
  
      telaRelatorio[0].style.display = "none"
    
  }
}

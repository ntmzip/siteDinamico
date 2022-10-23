const comandos = document.getElementsByTagName('button');


comandos[0].addEventListener('click', clientes);
comandos[1].addEventListener('click', estoque);
comandos[2].addEventListener('click', relatorio);



function clientes()  { 

  var telaClientes = document.querySelectorAll(".clientes");

    if(telaClientes[0].style.display = "none"){

      telaClientes[0].style.display = "block ";
    }

}

function estoque()  { 

  var telaEstoque = document.querySelectorAll(".estoque");
  

  telaEstoque[0].style.display = "block";


}

function relatorio()  { 

  var telaRelatorio = document.querySelectorAll(".relatorios");

    if(telaClientes[0].style.display = "block" || telaEstoque[0].style.display == "block"){
      telaClientes[0].style.display = "none"
      telaEstoque[0].style.display == "none"
      telaRelatorio[0].style.display = "block"
    }
}

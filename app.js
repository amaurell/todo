let conteudoInput;
let btn;
let listaTexto = [];
let temp;
let temp01;

/* Seletores */

window.addEventListener('load', carregaLista);

function carregaLista() {
  const conteudo = localStorage.getItem('conteudos');
  const listaLocalStorage = JSON.parse(conteudo);
  if (conteudo != null) {
    for (let conteudo of listaLocalStorage) {
      listaTexto.push(conteudo);
      temp = conteudo;
      console.log(temp);
      montaLi01();
    }
  }
}
/* Remove a Li da DOM e remove do Local Storage */
document.addEventListener('click', function (e, index) {
  let el = e.target;

  if (el.classList.contains('btn-apagar')) {
    /* Pega conteudo da Li */
    temp01 = el.parentElement.innerText;

    /* Remove o X e os espaços em branco */
    temp01 = temp01.replace('X', '').trim();
    console.log(temp01);

    /* Procura o o item escolhido no array */
    el.parentElement.remove();
    listaTexto.forEach(function (e, index) {
      if (e === temp01) {
        console.log(index);

        /* Retira o item escolhido do array */
        listaTexto.splice(index, 1);
      }
      console.log(e, index);
    });
  }
  /* Salva o array atualizado (sem o item escolhido) no LocalStorage */
  removeConteudo();
});
btn = document
  .getElementById('btn-inclui')
  .addEventListener('click', adicionaTexto);
var limpaLista = document
  .getElementById('btn-limpaTarefas')
  .addEventListener('click', limpaLocalStorage);

function limpaLocalStorage() {
  listaTexto = [];
  removeConteudo();
  /* recarrega a pagina */
  document.location.reload(true);
}
/* function removeTarefa() {
      let tasks;
      if (conteudo === null) {
        tasks = [];
      }else {
        tasks = JSON.parse(localStorage.getItem('conteudos"));
      }
      tasks.forEach(function(tasks,index){
        if(temp01 === tasks)
      })
    } */
function adicionaTexto() {
  conteudoInput = document.getElementById('inputTexto').value;

  insereConteudo();
}
function limpaInput() {
  document.getElementById('inputTexto').value = '';
  document.getElementById('inputTexto').focus();
}

/* -------------------------------------------- */
function montaLi() {
  criaBtn();
  criaLi();
  montaUl();
}
function montaUl() {
  let bxUl = document.getElementById('boxUl');

  bxUl.appendChild(boxLi);
}

function criaLi() {
  var tar;
  criaBtn();

  boxLi = document.createElement('li');

  boxLi.innerText = conteudoInput;

  boxLi.appendChild(btnDel);
}
function criaBtn() {
  btnDel = document.createElement('button');
  btnDel.className = 'btn-apagar';
  btnDel.innerText = 'X';
}
function removeConteudo() {
  const conteudoJSON = JSON.stringify(listaTexto);

  localStorage.setItem('conteudos', conteudoJSON);
  limpaInput();
}
function insereConteudo() {
  if (conteudoInput != '') {
    montaLi();

    listaTexto.push(conteudoInput);

    const conteudoJSON = JSON.stringify(listaTexto);

    localStorage.setItem('conteudos', conteudoJSON);
    limpaInput();
  }
}
/* --------------------------------------------- */

/* MONTA ARRAY QUANDO O LOCALSTORAGE TEM CONTEUDO */

function inicio01() {
  document.addEventListener('click', function (e, index) {
    let el = e.target;
    console.log(el);

    if (el.classList.contains('btn-apagar')) {
      el.parentElement.remove();
    }
  });
}

function adicionaTexto01() {
  conteudoInput = document.getElementById('inputTexto').value;

  limpaInput();
  insereConteudo01();
  console.log(listaTexto);
}
function limpaInput() {
  document.getElementById('inputTexto').value = '';
  document.getElementById('inputTexto').focus();
}
function insereConteudo01() {
  listaTexto.push(conteudoInput);
  montaLi();
  const conteudoJSON = JSON.stringify(listaTexto);
  console.log(conteudoJSON);
  localStorage.setItem('conteudos', conteudoJSON);
}

function montaLi01() {
  criaBtn01();
  criaLi01();
  montaUl01();
}
function montaUl01() {
  let bxUl = document.getElementById('boxUl');

  bxUl.appendChild(boxLi);
}

function criaLi01() {
  var tar;
  criaBtn01();

  boxLi = document.createElement('li');

  console.log(conteudoInput);
  boxLi.innerText = temp;

  boxLi.appendChild(btnDel);
}
function criaBtn01() {
  btnDel = document.createElement('button');
  btnDel.className = 'btn-apagar';
  btnDel.innerText = 'X';
}

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  // array pra armazenar os dados
  //TESTE
  "Fazer café",
  "Estudar",
  "Acessar comunidade"
];
// percorrer o array e mostrar em tela
function renderTodos() {
  listElement.innerHTML = ""; // limpando todo os dados do list element
  // percorre ate o final dos arrays
  for (todo of todos) {
    // console.log(todo);
    var todoElement = document.createElement("li"); // criando o elemento 'li' no html
    var todoText = document.createTextNode(todo); // Texto que vai ficar dentro de cada 'li'

    var linkElement = document.createElement("a"); //criando o elemento 'a' no html
    linkElement.setAttribute("href", "#"); // setando atributos no 'a'

    var pos = todos.indexOf(todo); // pegando a posição no array
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")"); // atribuindo o elemento onclick e chamandao a função deleteTodo

    var linkText = document.createTextNode(" excluir"); // texto que vai ficar dentro do 'a'

    linkElement.appendChild(linkText); //adicionando o texto no 'a'

    todoElement.appendChild(todoText); // adiciona o texto na 'li'
    todoElement.appendChild(linkElement);
    // adicionando os elemntos na 'ul'
    listElement.appendChild(todoElement);
  }
}
// chama a função para renderizar na tela
renderTodos();

// adicionar mais dados ao array usando o input
function addTodo() {
  var todoText = inputElement.value; // pegando o valor do input

  todos.push(todoText); // adicionando no final do array
  inputElement.value = ""; // limpando o input
  renderTodos(); // chamndo render para limpar pagina
}
buttonElement.onclick = addTodo; // chamando a função clicando no botão

function deleteTodo(pos) {
  todos.splice(pos, 1); // remove uma quantidade de intens do array em determinada posição
  renderTodos();
}

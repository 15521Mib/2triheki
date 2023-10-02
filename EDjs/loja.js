class Produto {
    constructor(cod, descricao, valor, estoque) {
      this.cod = cod;
      this.descricao = descricao;
      this.valor = valor;
      this.estoque = estoque;
    }
  }
  
  class Cliente {
    constructor(numero, nome, email) {
      this.numero = numero;
      this.nome = nome;
      this.email = email;
    }
  }
  
  const produtos = [];
  const clientes = [];
  
  function cadastrarProduto() {
    const cod = prompt('Digite o código do produto:');
    const descricao = prompt('Digite a descrição do produto:');
    const valor = parseFloat(prompt('Digite o valor do produto:'));
    const estoque = parseInt(prompt('Digite a quantidade em estoque:'));
    const produto = new Produto(cod, descricao, valor, estoque);
    produtos.push(produto);
    console.log('O produto foi cadastrado');
  }
  
  function cadastrarCliente() {
    const numero = prompt('Digite o número do cliente:');
    const nome = prompt('Digite o nome do cliente:');
    const email = prompt('Digite o e-mail do cliente:');
    const cliente = new Cliente(numero, nome, email);
    clientes.push(cliente);
    console.log('O cliente foi cadastrado');
  }
  
  function listarProdutos() {
    console.log('Lista de Produtos:');
    produtos.forEach((produto) => {
      console.log(produto);
    });
  }
  
  function listarClientes() {
    console.log('Lista de Clientes:');
    clientes.forEach((cliente) => {
      console.log(cliente);
    });
  }
  
  function menu() {
    let opcao;
    do {
      console.log('Menu:');
      console.log('1. Cadastrar Produto');
      console.log('2. Cadastrar Cliente');
      console.log('3. Listar Produtos');
      console.log('4. Listar Clientes');
      console.log('0. Sair');
      opcao = parseInt(prompt('Escolha uma opção:'));
      switch (opcao) {
        case 1:
          cadastrarProduto();
          break;
        case 2:
          cadastrarCliente();
          break;
        case 3:
          listarProdutos();
          break;
        case 4:
          listarClientes();
          break;
        case 0:
          console.log('Saindo');
          break;
        default:
          console.log('Tente novamente, pPois foi invalidado.');
      }
    } while (opcao !== 0);
  }
  
  menu();
  
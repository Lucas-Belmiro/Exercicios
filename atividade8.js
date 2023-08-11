// Crie uma lista encadeada em que cada elemento representa uma pessoa.

// Ela precisa conter informações como nome, idade e referência ao filho dela.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

class Node {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(name, age) {
    const newNode = new Node(name, age);

    //verifica se o valor é nulo
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //assume o valor da cabeça
    let current = this.head;

    //percorre até o último existente nulo
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  display() {
    //assume o valor da cabeça
    let current = this.head;

    //percorre o array e printa enquanto o array for diferente de nulo.
    while (current) {
      console.log(`Name: ${current.name}, Age: ${current.age}`);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append("Ana", 25);
linkedList.append("Carlos", 30);
linkedList.append("Maria", 22);

linkedList.display();

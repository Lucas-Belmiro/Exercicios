Banco = {
  conta: 42234,
  saldo: 2000,
  TipoConta: "corrente",
  agencia: 58667,
  buscarSaldo() {
    console.log(`O saldo é: ${this.saldo}`);
    return this.saldo;
  },
  deposito(value) {
    this.saldo += value;
    console.log(`O novo saldo é: ${this.saldo}`);
  },
  saque(value) {
    this.saldo -= value;
    console.log(`O novo saldo é: ${this.saldo}`);
  },
  numeroConta() {
    console.log(`O número da conta é: ${this.conta}`);
    return this.conta;
  },
};
Banco.buscarSaldo();
Banco.numeroConta();
Banco.deposito(20);
Banco.saque(20);

// getter and setter

class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }

  // getter
  get balance() {
    return this._balance;
  }
}

const poorManAccount = new BankAccount(1, "x", 20);

poorManAccount.deposit = 30;

const myBalance = poorManAccount.balance;

console.log(myBalance);

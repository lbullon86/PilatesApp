import { Clients } from 'src/clientes/clientes.entity';
import { Users } from 'src/users/users.entity';
import { Expense } from 'src/expenses/expense.entity';
import { Payrroll } from 'src/payrolls/payroll.entity';
import { Prices } from 'src/prices/prices.entity';
export declare class Company {
    id: number;
    name: string;
    nif: string;
    address: string;
    clients: Clients;
    user: Users;
    expense: Expense;
    payroll: Payrroll;
    price: Prices;
}

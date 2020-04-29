import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ResumeExpense } from './resumeExpense';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly repositoryExpense: Repository<Expense>,
  ) {}
  getAll() {
    return this.repositoryExpense.find();
  }

  save(expense: Expense) {
    expense.iva = expense.quantity - expense.quantity / expense.taxes;
    console.log(expense.quantity);
    return this.repositoryExpense.save(expense);
  }

  async getSumAllExpenses() {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .getRawOne();
    expense.sum = QueryeResult.sum;
    const QueryeResultIva = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.iva)', 'sumIva')
      .getRawOne();
    expense.sumIva = QueryeResultIva.sumIva;
    console.log(expense.sum);
    return expense;
  }

  async getSumAllExpensesMonth(monthSelect: number) {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .where('month(expenses.date)=:monthSelected', {
        monthSelected: monthSelect,
      })
      .getRawOne();
    const QueryeResultIva = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.iva)', 'sum')
      .where('month(expenses.date)=:monthSelected', {
        monthSelected: monthSelect,
      })
      .getRawOne();
    expense.sum = QueryeResult.sum;
    expense.sumIva = QueryeResultIva.sumIva;
    return expense;
  }

  async getSumAllExpensesYear(yearSelect: number) {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .where('year(expenses.date)=:monthSelected', {
        monthSelected: yearSelect,
      })
      .getRawOne();
    const QueryeResultIva = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.iva)', 'sumIva')
      .where('year(expenses.date)=:monthSelected', {
        monthSelected: yearSelect,
      })
      .getRawOne();
    expense.sum = QueryeResult.sum;
    expense.sumIva = QueryeResultIva.sumIva;
    return expense;
  }

  async getSumAllExpensesDay(dateExpense: Date) {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .where('expenses.date=:dateExpenseSelected', {
        dateExpenseSelected: dateExpense,
      })
      .getRawOne();
    const QueryeResultIva = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.iva)', 'sumIva')
      .where('expenses.date=:dateExpenseSelected', {
        dateExpenseSelected: dateExpense,
      })
      .getRawOne();
    expense.sum = QueryeResult.sum;
    expense.sumIva = QueryeResultIva.sumIva;
    return expense;
  }

  async getSumAllExpensesPeriod(dateExpense: Date, dateExpense2: Date) {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .where(
        'expenses.date BETWEEN :dateExpenseSelected AND  :dateExpenseSelected2',
        {
          dateExpenseSelected: dateExpense,
          dateExpenseSelected2: dateExpense2,
        },
      )
      .getRawOne();
    const QueryeResultIva = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.iva)', 'sumIva')
      .where(
        'expenses.date BETWEEN :dateExpenseSelected AND :dateExpenseSelected2',
        {
          dateExpenseSelected: dateExpense,
          dateExpenseSelected2: dateExpense2,
        },
      )
      .getRawOne();
    expense.sum = QueryeResult.sum;
    expense.sumIva = QueryeResultIva.sumIva;
    return expense;
  }

  async getSumAllExpensesOneQuarter(quarter: number,yearSelected:number) {
    let expense = new ResumeExpense();
    var QueryeResult, QueryeResultIva;
    switch (quarter) {
      case 1:
         QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
            monthBegin: 1,
            monthEnd: 3,
            year:yearSelected,
          })
          .getRawOne();
         QueryeResultIva = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.iva)', 'sumIva')
          .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
            monthBegin: 1,
            monthEnd: 3,
            year:yearSelected,

          })
          .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;

      case 2:
         QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
            monthBegin: 4,
            monthEnd: 6,
            year:yearSelected,

          })
          .getRawOne();
         QueryeResultIva = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.iva)', 'sumIva')
          .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
            monthBegin: 4,
            monthEnd: 6,
            year:yearSelected,

          })
          .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;

        case 3:
        QueryeResult = await this.repositoryExpense
         .createQueryBuilder('expenses')
         .select('sum(expenses.quantity)', 'sum')
         .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
           monthBegin: 7,
           monthEnd: 9,
           year:yearSelected,

         })
         .getRawOne();
        QueryeResultIva = await this.repositoryExpense
         .createQueryBuilder('expenses')
         .select('sum(expenses.iva)', 'sumIva')
         .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year' , {
           monthBegin: 7,
           monthEnd: 9,
           year:yearSelected,

         })
         .getRawOne();
       expense.sum = QueryeResult.sum;
       expense.sumIva = QueryeResultIva.sumIva;
       return expense;

     case 4:
        QueryeResult = await this.repositoryExpense
         .createQueryBuilder('expenses')
         .select('sum(expenses.quantity)', 'sum')
         .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
           monthBegin: 10,
           monthEnd: 12,
           year:yearSelected,

         })
         .getRawOne();
        QueryeResultIva = await this.repositoryExpense
         .createQueryBuilder('expenses')
         .select('sum(expenses.iva)', 'sumIva')
         .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
           monthBegin: 10,
           monthEnd: 12,
           year:yearSelected,

         })
         .getRawOne();
       expense.sum = QueryeResult.sum;
       expense.sumIva = QueryeResultIva.sumIva;
       return expense;  
      default:
        break;
    }

  
  }

 async getSumAllMonthsOneYear(yearSelected:number):Promise<ResumeExpense[]> {
    var count:number=1;
    var allMonths:ResumeExpense[];
    allMonths = []

    while (count <13) {
        let expense = new ResumeExpense();
         
        const QueryeResult = await this.repositoryExpense
        .createQueryBuilder('expenses')
        .select('sum(expenses.quantity)', 'sum')
        .where('month(expenses.date) =:month and year(expenses.date) =:year', {
          month: count,
          year:yearSelected,

        })
        .getRawOne();
        const QueryeResultIva = await this.repositoryExpense
        .createQueryBuilder('expenses')
        .select('sum(expenses.iva)', 'sumIva')
        .where('month(expenses.date) =:month AND year(expenses.date) =:year', {
            month: count,
            year:yearSelected,
  
          })
        .getRawOne();
      expense.sum = QueryeResult.sum;
      expense.sumIva = QueryeResultIva.sumIva;
      allMonths.push(expense)

      count++;
        
        
    }
    return allMonths;
 
 }

 async getSumAllQuartersOneYear(yearSelected:number):Promise<ResumeExpense[]> {
    var count:number=1;
    var allMonths:ResumeExpense[];
    allMonths = []
 
    while (count <13) {
        let expense = new ResumeExpense();
         
        const QueryeResult = await this.repositoryExpense
        .createQueryBuilder('expenses')
        .select('sum(expenses.quantity)', 'sum')
        .where('month(expenses.date) between :monthBegin AND :monthEnd and year(expenses.date) =:year', {
            monthBegin: count,
            monthEnd: count +2,
            year:yearSelected,

        })
        .getRawOne();

        const QueryeResultIva = await this.repositoryExpense
        .createQueryBuilder('expenses')
        .select('sum(expenses.iva)', 'sumIva')
        .where('month(expenses.date) between :monthBegin AND :monthEnd AND year(expenses.date) =:year', {
            monthBegin: count,
            monthEnd: count +2,
            year:yearSelected,
  
          })
        .getRawOne();
      expense.sum = QueryeResult.sum;
      expense.sumIva = QueryeResultIva.sumIva;
      count = count +3;
      allMonths.push(expense)  
      
        
        
    }
    return allMonths;
 
 }




  getOne(id: number): Promise<Expense> {
    return this.repositoryExpense.findOne(id);
  }

  updateExpense(expense: Expense): Promise<UpdateResult> {
    return this.repositoryExpense.update(expense.idExpense, expense);
  }

  deleteExpense(idExpense: number) {
    return this.repositoryExpense.delete(idExpense);
  }
}

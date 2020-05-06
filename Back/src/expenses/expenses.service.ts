import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ResumeExpense } from './resumeExpense';
import { InvoiceService } from 'src/invoice/invoice.service';
import { isNull } from 'util';

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

  //DAY
  async getSumAllExpensesDay(dateExpense: Date) {
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .addSelect('sum(expenses.iva)', 'sumIva')
      .where('expenses.date=:dateExpenseSelected', {
        dateExpenseSelected: dateExpense,
      })
      .getRawOne();

    return QueryeResult;
  }

  //PERIOD
  async getSumAllExpensesPeriod(dateExpense: Date, dateExpense2: Date) {
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .addSelect('sum(expenses.iva)', 'sumIva')
      .where(
        'expenses.date BETWEEN :dateExpenseSelected AND  :dateExpenseSelected2',
        {
          dateExpenseSelected: dateExpense,
          dateExpenseSelected2: dateExpense2,
        },
      )
      .getRawOne();

    return QueryeResult;
  }

  //MONTH

  async getSumAllExpensesOneMonth(yearSelected: number, monthSelect: number) {
    let expense = new ResumeExpense();
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .addSelect('sum(expenses.iva)', 'sumIva')
      .where('month(expenses.date)=:month and year(expenses.date)=:year', {
        month: monthSelect,
        year: yearSelected,
      })
      .getRawOne();

    return QueryeResult;
  }

  async getOneMonthsByConcept(yearSelected: number, month: number) {
    const queryResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'quantity')
      .addSelect('expenses.concept', 'concept')
      .addSelect('sum(expenses.iva)', 'iva')
      .where('month(expenses.date)=:month and year(expenses.date)=:year', {
        month: month,
        year: yearSelected,
      })
      .groupBy('expenses.concept')
      .orderBy('quantity', 'DESC')
      .getRawMany();

    return queryResult;
  }

  async getSumAllMonthsOneYear(yearSelected: number): Promise<ResumeExpense[]> {
    var count: number = 1;
    var allMonths: ResumeExpense[];
    allMonths = [];
    while (count < 13) {
      var expense = await this.getSumAllExpensesOneMonth(yearSelected, count);
      expense.month = count;
      expense = this.getIsNull(expense);
      allMonths.push(expense);
      count++;
      console.log(expense);
    }
    return allMonths;
  }

  //QUARTER

  async getQuartersByMonths( year: number,quarter: number,) {
    var QueryResult;
    var allMonths: ResumeExpense[]=[];

    switch (quarter) {
      case 1:
        for (let index = 1; index < 4; index++) {
          QueryResult = await this.getSumAllExpensesOneMonth(year, index);
          QueryResult.month = index;
          allMonths.push(QueryResult);
        }

        break;
      case 2:
        for (let index = 3; index < 7; index++) {
          QueryResult =  await this.getSumAllExpensesOneMonth(year, index);
          QueryResult.month = index;
          allMonths.push(QueryResult);
        }

        break;

      case 3:
        for (let index = 6; index < 10; index++) {
          QueryResult = await this.getSumAllExpensesOneMonth(year, index);
          QueryResult.month = index;
          allMonths.push(QueryResult);
        }

        break;
      case 4:
        for (let index = 10; index < 13; index++) {
          QueryResult =  await this.getSumAllExpensesOneMonth(year, index);
          QueryResult.month = index;
          allMonths.push(QueryResult);

        }

        break;
      default:
        break;
    }
    return allMonths
  }

  async getSumAllExpensesOneQuarter(quarter: number, yearSelected: number) {
    var QueryeResult;
    switch (quarter) {
      case 1:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .addSelect('sum(expenses.iva)', 'sumIva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 1,
              monthEnd: 3,
              year: yearSelected,
            },
          )
          .getRawOne();

        return QueryeResult;

      case 2:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .addSelect('sum(expenses.iva)', 'sumIva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 4,
              monthEnd: 6,
              year: yearSelected,
            },
          )
          .getRawOne();
        return QueryeResult;

      case 3:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .addSelect('sum(expenses.iva)', 'sumIva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 7,
              monthEnd: 9,
              year: yearSelected,
            },
          )
          .getRawOne();

        return QueryeResult;

      case 4:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'sum')
          .addSelect('sum(expenses.iva)', 'sumIva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 10,
              monthEnd: 12,
              year: yearSelected,
            },
          )
          .getRawOne();

        return QueryeResult;
      default:
        break;
    }
  }

  async getQuartersByConcept(quarter: number, yearSelected: number) {
    var QueryeResult;
    switch (quarter) {
      case 1:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'quantity')
          .addSelect('expenses.concept', 'concept')
          .addSelect('sum(expenses.iva)', 'iva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 1,
              monthEnd: 3,
              year: yearSelected,
            },
          )
          .groupBy('expenses.concept')
          .orderBy('quantity', 'DESC')
          .getRawMany();

        return QueryeResult;

      case 2:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'quantity')
          .addSelect('expenses.concept', 'concept')
          .addSelect('sum(expenses.iva)', 'iva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 4,
              monthEnd: 6,
              year: yearSelected,
            },
          )
          .groupBy('expenses.concept')
          .orderBy('quantity', 'DESC')
          .getRawMany();
        return QueryeResult;

      case 3:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'quantity')
          .addSelect('expenses.concept', 'concept')
          .addSelect('sum(expenses.iva)', 'iva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 7,
              monthEnd: 9,
              year: yearSelected,
            },
          )
          .groupBy('expenses.concept')
          .orderBy('quantity', 'DESC')
          .getRawMany();

        return QueryeResult;

      case 4:
        QueryeResult = await this.repositoryExpense
          .createQueryBuilder('expenses')
          .select('sum(expenses.quantity)', 'quantity')
          .addSelect('expenses.concept', 'concept')
          .addSelect('sum(expenses.iva)', 'iva')
          .where(
            'month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year',
            {
              monthBegin: 10,
              monthEnd: 12,
              year: yearSelected,
            },
          )
          .groupBy('expenses.concept')
          .orderBy('quantity', 'DESC')
          .getRawMany();

        return QueryeResult;
      default:
        break;
    }
  }

  //YEAR

  async getSumAllExpensesYear(yearSelect: number) {
    var QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .addSelect('sum(expenses.iva)', 'sumIva')
      .where('year(expenses.date)=:monthSelected', {
        monthSelected: yearSelect,
      })
      .getRawOne();

    return QueryeResult;
  }

  getIsNull(number: any) {
    for (const key in number) {
      if (isNull(number[key])) {
        number[key] = 0;
      }
    }
    return number;
  }

  //GLOBAL

  async getSumAllExpenses() {
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'sum')
      .addSelect('sum(expenses.iva)', 'sumIva')
      .getRawOne();

    return QueryeResult;
  }

  async getSumAllExpensesByConcept(yearSelected: number) {
    const QueryeResult = await this.repositoryExpense
      .createQueryBuilder('expenses')
      .select('sum(expenses.quantity)', 'quantity')
      .addSelect('expenses.concept', 'concept')
      .addSelect('sum(expenses.iva)', 'iva')
      .where('year(expenses.date)=:year', {
        year: yearSelected,
      })
      .groupBy('expenses.concept')
      .orderBy('quantity', 'DESC')
      .getRawMany();

    return QueryeResult;
  }

  async getSumAllQuartersOneYear(
    yearSelected: number,
  ): Promise<ResumeExpense[]> {
    var count: number = 1;
    var allMonths: ResumeExpense[];
    allMonths = [];

    while (count < 13) {
      const QueryeResult = await this.repositoryExpense
        .createQueryBuilder('expenses')
        .select('sum(expenses.quantity)', 'sum')
        .addSelect('sum(expenses.iva)', 'sumIva')
        .where(
          'month(expenses.date) between :monthBegin AND :monthEnd and year(expenses.date) =:year',
          {
            monthBegin: count,
            monthEnd: count + 2,
            year: yearSelected,
          },
        )
        .getRawOne();

      count = count + 3;
      allMonths.push(QueryeResult);
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

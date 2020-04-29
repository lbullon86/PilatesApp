import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';

import { Invoicing } from './invoicing-model';
import { Balance } from './balance';
import { ResumeExpense } from 'src/expenses/resumeExpense';
import { ExpensesService } from 'src/expenses/expenses.service';
import { InvoicingClass } from './invoicingClass-model';
import { isNull } from 'util';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly repositoryInvoice: Repository<Invoice>,
    private readonly serviceExpense: ExpensesService,
  ) {}

  getAll() {
    return this.repositoryInvoice.find();
  }

  save(invoice: Invoice): Promise<Invoice> {
    console.log(invoice);
    return this.repositoryInvoice.save(invoice);
  }

  getInvoiceOneClient(id: number) {
    return this.repositoryInvoice.findOne(id);
  }

  async getInvoicing(): Promise<Invoicing> {
    let invoicing: Invoicing = new Invoicing();
    const queryResultSum = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sum')
      .getRawOne();

    const queryResultSumCash = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumCash')
      .where('invoice.paymentMethod =:method', { method: 1 })
      .getRawOne();

    invoicing.sum = queryResultSum.sum;
    invoicing.sumCash = queryResultSumCash.sumCash;
    invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
    invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
    invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);

    return invoicing;
  }

  async getInvoicingOneDay(date: Date) {
    let dateInvoice: Date = new Date(date);
    let invoicing: Invoicing = new Invoicing();

    const sum = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sum')
      .where('date(invoice.dateInvoice) =:dateInvoice', { dateInvoice: dateInvoice })
      .getRawOne();

    invoicing.sum = sum.sum;

    const sumCash = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumCash')
      .where(
        'date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 1 },
      )
      .getRawOne();
    invoicing.sumCash = sumCash.sumCash;

    const sumBizum = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumBizum')
      .where(
        'date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 2 },
      )
      .getRawOne();

    invoicing.sumBizum = sumBizum.sumBizum;

    const sumTransfer = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumTransfer')
      .where(
        'date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 4 },
      )
      .getRawOne();

    invoicing.sumTransfer = sumTransfer.sumTransfer;

    const sumTpv = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumTpv')
      .where(
        'date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 3 },
      )
      .getRawOne();
    invoicing.sumTpv = sumTpv.sumTpv;
    invoicing.sumTax = await Math.round(
      invoicing.sum - (invoicing.sum / 1.21) * 0.8,
    );
    return invoicing;
  }

  getPasses(): Promise<Invoice[]> {
    return this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('invoice')
      .from(Invoice, 'invoice')
      .where('invoice.concept = B8 ')
      .getRawMany();
  }

  async getInvoicingOnePeriod(
    dateInvoice1: Date,
    dateInvoice2: Date,
  ): Promise<Invoicing> {
    let invoicing: Invoicing = new Invoicing();

    const queryReesultSum = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sum')
      .where('date(invoice.dateInvoice) >:date1 AND date(invoice.dateInvoice) <:date2', {
        date1: dateInvoice1,
        date2: dateInvoice2,
      })
      .getRawOne();
      const queryReesultSumCash = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sum')
      .where('date(invoice.dateInvoice) >:date1 AND date(invoice.dateInvoice) <:date2 AND invoice.paymentMethod =:method', {
        date1: dateInvoice1,
        date2: dateInvoice2,
        method:1
      })
      .getRawOne();
    invoicing.sum = queryReesultSum.sum;
    invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
    invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
    invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);
    invoicing.sumCash = queryReesultSumCash.sum;
    return invoicing;
  }

  async getInvoicingQuarter(): Promise<Invoicing[]> {
    const invoicingQuarter: Invoicing[] = [];
    const quarterDate = [
      ['2019-12-31T22:00:00.000Z', '2020-04-01T00:00:00.000Z'],
      ['2020-03-31T23:59:59.000Z', '2020-07-01T00:00:00.000Z'],
      ['2020-06-30T22:00:00.000Z', '2020-10-01T00:00:00.000Z'],
      ['2020-09-30T22:00:00.000Z', '2021-01-01T00:00:00.000Z'],
    ];

    const promises = quarterDate.map(async element => {
      const invoicing: Invoicing = new Invoicing();
      const queryResult = await this.repositoryInvoice
        .createQueryBuilder('invoice')
        .select('SUM(invoice.quantity)', 'sum')
        .where('date(invoice.dateInvoice) BETWEEN :date1 AND :date2', {
          date1: element[0],
          date2: element[1],
        })
        .getRawOne();
      invoicing.sum = queryResult.sum;
      console.log(element);
      console.log(invoicing.sum);
      invoicingQuarter.push(invoicing);
    });

    await Promise.all(promises);

    return invoicingQuarter;
  }

  async getBalance() {
    const balance: Balance = new Balance();
    const sum = await this.getInvoicing();
    const sumIva = sum.sum - sum.sum / 1.21;
    const sumIrpf = (sum.sum / 1.21) * 0.2;
    const sumExpense = await this.serviceExpense.getSumAllExpenses();
    balance.sum =
      sum.sum - sumExpense.sum - (sumIva - sumExpense.sumIva) - sumIrpf;

    return balance;
  }

  async getInvoicingOneYearByClass(year:number){
    const invoicing:InvoicingClass = new InvoicingClass();
  
    const queryResultB8 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumB8')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "B8",
    }).getRawOne()

    const queryResultB16 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumB16')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "B16",
    }).getRawOne()

    const queryResultMT1 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumMT1')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "MT1",
    }).getRawOne()

    const queryResultMT2 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumMT2')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "MT2",
    }).getRawOne()

    const queryResultR1 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumR1')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "R1",
    }).getRawOne()

    const queryResultR2 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumR2')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "R2",
    }).getRawOne()

    const queryResultTb1 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumTB1')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "TB1",
    }).getRawOne()

    const queryResultTb2 = await this.repositoryInvoice
    .createQueryBuilder('invoice')
    .select('SUM(invoice.quantity)', 'sumTB2')
    .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
      date1: year,
      concept: "TB2",
    }).getRawOne()

    invoicing.B16 =  queryResultB16.sumB16;
    invoicing.B8  = queryResultB8.sumB8;
    invoicing.reformer1 =queryResultR1.sumR1;
    invoicing.reformer2 = queryResultR2.sumR2;
    invoicing.totalBarre1 =  queryResultTb1.sumTB1;
    invoicing.totalBarre2 = queryResultTb2.sumTB2;
    invoicing.mat1 = queryResultMT1.sumMT1;
    invoicing.mat2  = queryResultMT2.sumMT2;

    return invoicing;
  }
}

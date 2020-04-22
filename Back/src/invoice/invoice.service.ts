import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Clients } from '../clientes/clientes.entity';
import { Pass } from '../pass/pass.entity';
import { Invoicing } from './invoicing-model';
import { ivory } from 'color-name';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly repositoryInvoice: Repository<Invoice>,
  ) {}

  getAll() {
    return this.repositoryInvoice.find();
  }

  save(invoice: Invoice): Promise<Invoice> {
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
      .where('invoice.dateInvoice =:dateInvoice', { dateInvoice: dateInvoice })
      .getRawOne();

    invoicing.sum = sum.sum;

    const sumCash = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumCash')
      .where(
        'invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 1 },
      )
      .getRawOne();
    invoicing.sumCash = sumCash.sumCash;

    const sumBizum = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumBizum')
      .where(
        'invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 2 },
      )
      .getRawOne();

    invoicing.sumBizum = sumBizum.sumBizum;

    const sumTransfer = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumTransfer')
      .where(
        'invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 4 },
      )
      .getRawOne();

    invoicing.sumTransfer = sumTransfer.sumTransfer;

    const sumTpv = await this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sumTpv')
      .where(
        'invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method',
        { dateInvoice: dateInvoice, method: 3 },
      )
      .getRawOne();
    invoicing.sumTpv = sumTpv.sumTpv;
    invoicing.sumTax = await Math.round( invoicing.sum -((invoicing.sum /1.21)*0.8));
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
  ): Promise<any> {
    return this.repositoryInvoice
      .createQueryBuilder('invoice')
      .select('SUM(invoice.quantity)', 'sum')
      .where('invoice.dateInvoice >:date1 AND invoice.dateInvoice <:date2', {
        date1: dateInvoice1,
        date2: dateInvoice2,
      })
      .getRawOne();
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
        .where('invoice.dateInvoice BETWEEN :date1 AND :date2', {
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
}

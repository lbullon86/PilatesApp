import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pass } from './pass.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Invoice } from 'src/invoice/invoice.entity';
import { InvoiceService } from 'src/invoice/invoice.service';
import { Clients } from 'src/clientes/clientes.entity';

@Injectable()
export class PassService {
  constructor(
    @InjectRepository(Pass) private readonly repositoryPass: Repository<Pass>,
    @InjectRepository(Pass) private readonly repositoryInvoices: Repository<Invoice>,

   
  ) {}

  getAll() {
    return this.repositoryPass.find();
  }

  save(pass: Pass) {
    return this.repositoryPass.save(pass);
  }

  saveAttendance(pass:Pass):Promise <UpdateResult>{
      
      return this.repositoryPass.update(pass.idPass,pass)
      
  }

  getOnePassActiveOneClient(idClient:number){
    const qb = this.repositoryInvoices;
    console.log(idClient)

    return this.repositoryPass
      .createQueryBuilder('pass')
      .select('pass')
      .where(
        'numberClasses > 0 AND idPass IN' +
          qb
            .createQueryBuilder('invoice')
            .subQuery()
            .select("invoice.passIdPass").from(Invoice,"invoice").where("invoice.clientIdClient = :id", ).getQuery()
      ).setParameter("id",idClient).getOne();  

    }

}

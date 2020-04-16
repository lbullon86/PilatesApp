import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pass } from './pass.entity';
import { Repository } from 'typeorm';
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

  saveAttendance(pass:Pass){
      
      return this.repositoryPass.update(pass.idPass,pass)
      
  }




}

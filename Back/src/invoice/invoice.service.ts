import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Clients } from '../clientes/clientes.entity'
import { Pass } from '../pass/pass.entity';

@Injectable()
export class InvoiceService {
    constructor(@InjectRepository(Invoice)private readonly repositoryInvoice:Repository<Invoice>){

    }
    getAll(){
        return this.repositoryInvoice.find()
    }

    save(invoice:Invoice):Promise<Invoice>{        
        return this.repositoryInvoice.save(invoice);
    }

    getInvoiceOneClient(id:number){
        return this.repositoryInvoice.findOne(id);
    }

    getFacturacion(){
        return this.repositoryInvoice.createQueryBuilder("invoice").select("SUM(invoice.quantity)","sum").getRawOne()
    }
    
    getPasses():Promise<Invoice[]>{
        return this.repositoryInvoice.createQueryBuilder("invoice").select("invoice")
        .from(Invoice, "invoice").where("invoice.concept = B8 ").getRawMany();
    }




}

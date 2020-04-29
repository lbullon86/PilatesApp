import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Clients } from './clientes.entity'; 
import { Invoice } from 'src/invoice/invoice.entity';
import { InvoiceService } from 'src/invoice/invoice.service';
import { Pass } from 'src/pass/pass.entity';
import { PassService } from 'src/pass/pass.service';

@Injectable()
export class ClientesService {
    

constructor(@InjectRepository(Clients) private readonly repositoryClients:Repository<Clients>,

private readonly invoiceService:InvoiceService,
private readonly passService:PassService){
}

getAll():Promise<Clients[]>{
    return this.repositoryClients.find() ;
}

save(client:Clients):Promise <Clients>{
    return this.repositoryClients.save(client);
}

getOne(id:number):Promise<Clients>{
    return this.repositoryClients.findOne(id)
}

async getInvoices(id:number):Promise<Invoice[]>{
     const client = await this.repositoryClients.findOne(id, {relations:["invoices"]});
     return client.invoices;
}

updateClient(client:Clients):Promise<UpdateResult>{
    return this.repositoryClients.update(client.idClient,client);
}

async saveInvoice(id:number, invoice: Invoice): Promise<Invoice> {
    console.log(invoice)
    invoice.pass = this.getTypePass(invoice); 
    const client = await this.repositoryClients.findOne(id, {relations:["invoices"]});
    client.invoices.push(invoice);
    await this.repositoryClients.save(client);
    console.log(invoice)
    return invoice;
}


getTypePass(invoice:Invoice){
    if(invoice.concept =="B8"){
        const pass = new Pass();
        pass.numberClasses = 8;
        pass.dates =[]
        return pass;
    }
    else if(invoice.concept=="B16"){
        const pass = new Pass();
        pass.numberClasses = 16;
        pass.dates =[]
        return pass;

    }
}

getPasses(client:Clients):Promise<Pass>{
    return this.repositoryClients.createQueryBuilder("client").select("pass")
    .from(Invoice, "invoice").where("(invoice.concept = B8  AND invoice.client.idClient = client.idClient").getRawOne();
}

}













//await espera que la promesa se cumpla. 
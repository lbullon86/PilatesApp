import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pay } from "../detail-client/add-pay/pay-model";

@Injectable({
  providedIn: "root"
})
export class InvoicesService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/invoices";
  }

  getInvoicesClient(id: number): Observable<Pay> {
    return this.http.get(`${this.url}/${id}`) as Observable <Pay>
  }
}

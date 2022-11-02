import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistarBIService {

  constructor(private http: HttpClient) { }

  setHeaders(): HttpHeaders {
    var headersConfig = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    };

    return new HttpHeaders(headersConfig);
  }

  validarExistenciaBI(numeroBI: any) {

    return this.http.get<any>(`https://angolaapi.herokuapp.com/api/v1/validate/bi/${numeroBI}`, {headers: this.setHeaders()} ).pipe(map((res: any) => {
      return res
    }))
  }
}

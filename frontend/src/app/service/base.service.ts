import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {active?: boolean, _id?: string, price?: number}>{

  entity: string = "";
  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.config.apiURL}${this.entity}`);
  }

  get(_id:string): Observable<T> {
    return this.http.get<T>(`${this.config.apiURL}${this.entity}/${_id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.config.apiURL}${this.entity}`, entity)
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.config.apiURL}${this.entity}/${entity._id}`, entity)
  }

  remove(_id: string): Observable<T> {
    return this.http.delete<T>(`${this.config.apiURL}${this.entity}/${_id}`)
  }
}

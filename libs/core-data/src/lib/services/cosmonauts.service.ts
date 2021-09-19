import { map } from 'rxjs/operators';
import { AstroPagination, Person } from '@astro/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environments';
@Injectable({
  providedIn: 'root',
})
export class CosmonautsService {
  private model = 'astros';
  constructor(private http: HttpClient) {}

  all(): Observable<Person[]> {
    return this.http
      .get<AstroPagination>(this.getApi())
      .pipe(map((response) => response.people));
  }

  find(id: string): Observable<Person> {
    return this.http.get<Person>(this.getApiByUrl(id));
  }

  private getApi() {
    return `${environment.apiUrl}${this.model}`;
  }

  private getApiByUrl(id: string) {
    return `${this.getApi()}${id}`;
  }
}

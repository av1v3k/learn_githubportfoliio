import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'av1v3k';
  private apiUrl = 'https://api.github.com';
  private userUrl = 'https://api.github.com/users/' + this.username;

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${this.username}`);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userUrl + '/orgs');
  }
}

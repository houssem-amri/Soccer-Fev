import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

export interface JwtPayload {

  username:string,
  role:string,
  id:string,
  exp:string,
  iat:string,

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  signup(data: any) {
    return this.http.post<{ message: any }>(`${environment.apiUrl}/users/inscri`, data)
  }

  login(data: any) {
    return this.http.post<{ message: any, token: any }>(`${environment.apiUrl}/users/login`, data)

  }

  getUserRole() :any {
    let token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      console.log('decoded.role',decoded.role);
      
      return decoded.role
    }

  }


  getweatherData(){
    let lat=36.8453878
    let lon=10.193848
    let key='2315f367166a927094addff4b275dd70'
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
  }
}

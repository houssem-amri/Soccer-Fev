import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient:HttpClient) { }

  
    addTeam(data:any){
   
      return this.httpClient.post<{message:any}>(`${environment.apiUrl}/teams/create`,data)
    }
  
    getAllTeams(){
  
      return this.httpClient.get<{data:any}>(`${environment.apiUrl}/teams/getAll`)
    }
  

  
    getTeamById(id:any){
      // `http://localhost:3000/api/Teames/getById/67ca0de91052455b186bd9f9`
      return this.httpClient.get<{team:any , message:any}>(`${environment.apiUrl}/teams/getById/${id}`)
  
    }
  
    updateTeam(data:any){
  
      console.log('here into service',data);
      
      return this.httpClient.put<{message:any}>(`${environment.apiUrl}/teams/update/${data._id}` ,data )
      
    }
  
    deleteTeam(id:any){
      return this.httpClient.delete<{message:any}>(`${environment.apiUrl}/teams/delete/${id}`)
  
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match';


@Injectable({
  providedIn: 'root'
})
export class MatchesService {



  constructor(private httpClient : HttpClient) { }

  addMatch(data:Match){
    // "http://localhost:3000/api/matches/create"
    return this.httpClient.post<{message:any , match:Match}>(`${environment.apiUrl}/matches/create`,data)
  }

  getAllMatches(){

    return this.httpClient.get<{data:any}>(`${environment.apiUrl}/matches/getAll`)
  }

  getMatchById(id:any){
    // `http://localhost:3000/api/matches/getById/67ca0de91052455b186bd9f9`
    return this.httpClient.get<{match:Match , message:any}>(`${environment.apiUrl}/matches/getById/${id}`)

  }

  updateMatch(data:any){

    console.log('here into service',data);
    
    return this.httpClient.put<{message:any}>(`${environment.apiUrl}/matches/update/${data._id}` ,data )
    
  }

  deleteMatch(id:any){
    return this.httpClient.delete<{message:any}>(`${environment.apiUrl}/matches/delete/${id}`)

  }
  
}

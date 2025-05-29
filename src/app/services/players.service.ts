import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }


  addPlayer(data: any, image: any) {

    const formData = new FormData

    formData.append('name', data.name)
    formData.append('post', data.post)
    formData.append('number', data.number)
    formData.append('teamId', data.teamId)
    formData.append('image', image)

    return this.httpClient.post<{ message: any }>(`${environment.apiUrl}/players/create`, formData)
  }

  getAllPlayers() {

    return this.httpClient.get<{ data: any }>(`${environment.apiUrl}/players/getAll`)
  }

  getPlayerById(id: any) {
    // `http://localhost:3000/api/Teames/getById/67ca0de91052455b186bd9f9`
    return this.httpClient.get<{ player: any, message: any }>(`${environment.apiUrl}/players/getById/${id}`)

  }

  updatePlayer(data: any, file: any) {

    let formData

    if (file) {
      formData = new FormData
      formData.append('_id', data._id)
      formData.append('name', data.name)
      formData.append('post', data.post)
      formData.append('number', data.number)
      formData.append('teamId', data.teamId)
      formData.append('image', file)
    } else {
      formData=data
    }

    return this.httpClient.put<{ message: any }>(`${environment.apiUrl}/players/update/${data._id}`, formData)

  }

  deletePlayer(id: any) {
    return this.httpClient.delete<{ message: any }>(`${environment.apiUrl}/players/delete/${id}`)

  }
  filterPlayer(data: any) {
    return this.httpClient.post<{ data: any }>(`${environment.apiUrl}/players/filterByNumber`,data)

  }
}

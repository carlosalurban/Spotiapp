import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAIOcNliPByiT0rEZ5z9wUFVAeZQa_C_o38PJSMGHQsK6B280a13Yd1wSeiNLQAjc4XRj3ex6F6p6aJQJAAtwhCdr9uDmPetluV4QhKYQ4fGWUsVKrDSuzlmq9h5IRfdGYkklZ5SBENwj8aSYA'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .pipe(map(data=> data['albums'].items));
  }
  getArtist(term: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBjIKfrxgLQK6TJIgxuifhUTagT1lAZUtxkEQ3ODFP4F_N3Uldx4Zm0DfeczZ6gC-_gztvijM-Rm6G31O1_26ko4VoQLQOhrvQG9d2Y8HFrxYuXm72o1Gh17wlKSBxQEJIdz-J2Y1Kiat3_fU8'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
    .pipe(map(data=>data['artists'].items));
  }
}

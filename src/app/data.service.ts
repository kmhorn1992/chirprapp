import { ChirpformComponent } from './chirpform/chirpform.component';
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { SinglepostComponent } from './singlepost/singlepost.component';
import 'rxjs/add/operator/map';


export interface IChirprs  {
    id: number;
    user: string;
    message: string;
}


@Injectable()
export class DataService {

    static api = 'http://localhost:3000/api/chirps';

    chirps: Array<IChirprs> = [];

    constructor(private http: Http) {}

    getChirps() {
        return this.http.get(DataService.api)
        .map(response => response.json())
        .map(chirps => {
            return chirps;
        });
    }

    getChirp(id) {
        return this.http.get(`${DataService.api}/${id}`)
        .map(response => response.json());
    }

    createChirp(chirp: IChirprs) {
        return this.http.post(DataService.api, chirp)
        .map(response => response.text());
    }
}

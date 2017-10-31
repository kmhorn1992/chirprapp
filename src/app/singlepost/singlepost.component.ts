import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IChirprs } from '../data';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { NgFor} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-singlepost',
  templateUrl: '../singlepost/singlepost.component.html',
  styleUrls: ['../singlepost/singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  chirp: IChirprs;

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.dataService.getChirp(+params.get('id')))
        .subscribe(chirp => this.chirp = chirp);
    }
  }

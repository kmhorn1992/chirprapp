import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';

import { DataService, IChirprs } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})



export class PostsComponent implements OnInit {
  chirps: Array<IChirprs>;

  todayDate = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getChirps()
    .subscribe((response) => this.chirps = response);
  }
}

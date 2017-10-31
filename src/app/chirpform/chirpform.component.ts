import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChirprs } from '../data';
import { DataService } from '../data.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirpform.component.html',
  styleUrls: ['./chirpform.component.css']
})
export class ChirpformComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dataservice: DataService,
    private router: Router) { }

  ngOnInit() {
  }
}

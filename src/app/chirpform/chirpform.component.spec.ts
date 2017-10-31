import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpformComponent } from './chirpform.component';

describe('ChirpformComponent', () => {
  let component: ChirpformComponent;
  let fixture: ComponentFixture<ChirpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

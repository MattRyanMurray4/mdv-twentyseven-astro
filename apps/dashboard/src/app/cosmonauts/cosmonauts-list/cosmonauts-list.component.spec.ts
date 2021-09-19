import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmonautsListComponent } from './cosmonauts-list.component';

describe('CosmonautsListComponent', () => {
  let component: CosmonautsListComponent;
  let fixture: ComponentFixture<CosmonautsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmonautsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmonautsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

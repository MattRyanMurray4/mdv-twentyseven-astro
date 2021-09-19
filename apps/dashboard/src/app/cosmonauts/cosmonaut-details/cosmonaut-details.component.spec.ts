import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmonautDetailsComponent } from './cosmonaut-details.component';

describe('CosmonautDetailsComponent', () => {
  let component: CosmonautDetailsComponent;
  let fixture: ComponentFixture<CosmonautDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmonautDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmonautDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

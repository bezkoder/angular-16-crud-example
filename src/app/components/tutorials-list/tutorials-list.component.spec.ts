import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListComponent } from './tutorials-list.component';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialsListComponent]
    });
    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

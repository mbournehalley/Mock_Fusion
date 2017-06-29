import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCaseComponent } from './completed-case.component';

describe('CompletedCaseComponent', () => {
  let component: CompletedCaseComponent;
  let fixture: ComponentFixture<CompletedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

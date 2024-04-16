import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentlistComponent } from './documentlist.component';

describe('DocumentlistComponent', () => {
  let component: DocumentlistComponent;
  let fixture: ComponentFixture<DocumentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentlistComponent]
    });
    fixture = TestBed.createComponent(DocumentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

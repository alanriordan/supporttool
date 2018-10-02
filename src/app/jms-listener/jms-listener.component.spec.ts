import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsListenerComponent } from './jms-listener.component';

describe('JmsListenerComponent', () => {
  let component: JmsListenerComponent;
  let fixture: ComponentFixture<JmsListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmsListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmsListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

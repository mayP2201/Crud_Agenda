import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAgendaPage } from './crear-agenda.page';

describe('CrearAgendaPage', () => {
  let component: CrearAgendaPage;
  let fixture: ComponentFixture<CrearAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

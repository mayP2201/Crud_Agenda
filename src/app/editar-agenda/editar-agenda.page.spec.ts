import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAgendaPage } from './editar-agenda.page';

describe('EditarAgendaPage', () => {
  let component: EditarAgendaPage;
  let fixture: ComponentFixture<EditarAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

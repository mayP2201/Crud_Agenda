import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.page.html',
  styleUrls: ['./editar-agenda.page.scss'],
})
export class EditarAgendaPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: AgendaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      nombre: [''],
      correo: [''],
      celular: ['']
    })
  }
  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}

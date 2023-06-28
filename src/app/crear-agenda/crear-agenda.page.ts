import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Agenda } from '../shared/agenda';
import { AgendaService } from '../shared/agenda.service';



@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.page.html',
  styleUrls: ['./crear-agenda.page.scss'],
})
export class CrearAgendaPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: AgendaService,
    private router: Router,
    public fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      nombre: [''],
      correo: [''],
      celular: [''],
    });
  }
  
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }
}

import { Component } from '@angular/core';
import { AgendaService } from '../shared/agenda.service';
import { Agenda } from '../shared/agenda';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Bookings: Agenda[] = [];
  constructor(private aptService: AgendaService) {}
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.Bookings = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Agenda);
      });
    });
  }
  fetchBookings() {
    this.aptService
      .getBookingList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Esta seguro que quiere eliminar el contacto?')) {
      this.aptService.deleteBooking(id);
    }
  }
}

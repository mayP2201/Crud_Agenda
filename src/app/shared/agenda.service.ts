import { Injectable } from '@angular/core';
import { Agenda } from './agenda';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Agenda) {
    return this.bookingListRef.push({
      nombre: apt.nombre,
      correo: apt.correo,
      celular: apt.celular,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/agenda/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/agenda');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Agenda) {
    return this.bookingRef.update({
      nombre: apt.nombre,
      correo: apt.correo,
      celular: apt.celular,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/agenda/' + id);
    this.bookingRef.remove();
  }
}
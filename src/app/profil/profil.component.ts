import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() contact: Contact;
  @Output() userhasbeenchanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userHasBeenChanged() {
    this.userhasbeenchanged.emit();
  }
}

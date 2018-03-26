import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable()
export class UserStorageService {

  constructor() { }

  /**
   * Permet de Récupérer les Contacts
   * depuis le localStorage.
   * @returns {Contact[]}
   */
  getContacts(): Contact[] {
    /**
     * Avant de retourner les données, je m'assure
     * qu'il y a bien des contacts dans le localStorage.
     * S'il n'y en a pas, je retourne un nouveau tableau.
     */
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts !== null) {
      return contacts;
    } else {
      return [];
    }
  }

  /**
   * Permet de Sauvegarder nos Contacts
   * dans le localStorage.
   * @param {Contact[]} contacts
   */
  save(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

}

/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core
 */
import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {UserApiService} from './services/user-api.service';

/**
 * @Component est ce qu'on appelle un décorateur
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans votre HTML : <app-root></app-root>.
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /*template: `
    <h1>Bienvenue à Bordeaux !</h1>
    <h3>La belle endormie...</h3>
  `,
  styles: [`
    h1 {color:blue};
  `]*/
  /**
   * La déclaration des styles avec
   * "styleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css'],
})
/**
 * La classe contient les données du
 * composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au ViewModel.
 */
export class AppComponent implements OnInit {

  constructor(private userApiService: UserApiService) {}

  // -- Déclaration d'une Variable Titre
  title = 'Gestion de mes Contacts';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet Contact
  unContact: Contact = {
    id        : 1,
    name      : 'Hugo LIEGEARD',
    username  : 'hugoliegeard',
    email     : 'wf3@hl-media.fr'
  };
  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id        : 1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        : 2,
      name      : 'Bilal MEHDI',
      username  : 'bilalmehdi',
      email     : 'bilal.m@hl-media.fr'
    },
    {
      id        : 3,
      name      : 'Lilian SABATTE',
      username  : 'liliansabatte',
      email     : 'lilian.s@hl-media.fr'
    },
    {
      id        : 4,
      name      : 'Manu SICARD',
      username  : 'manusicard',
      email     : 'manu.s@hl-media.fr'
    },
  ];

  ngOnInit(): void {
    this.userApiService.getContacts().subscribe(
      contacts => {
        console.log(contacts);
        this.mesContacts = contacts;
      }
    );
  }

  /**
   * Ma fonction choisirContact, prend un contact
   * en paramètre et le transmet à la variable
   * contactActif.
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }

  /**
   * Fonction qui permet de rajouter
   * un nouveau contact dans la liste.
   * @param event
   */
  ajouterContactDansListe(event: any) {
    // -- Aperçu dans la Console
    console.log(event);

    // -- Récupération du Contact via l'Evenement
    const leContact: Contact = event.leContact;

    // -- Attribution d'un ID au Contact
    let id: number = this.mesContacts.length;
    leContact.id = id += 1;

    // -- Ajout du Contact dans le Tableau
    this.mesContacts.push(leContact);
  }
}

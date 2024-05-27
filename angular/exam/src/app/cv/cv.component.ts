import { Component } from '@angular/core';
import { Candidat } from '../models/condidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Gaith', 'Jelassi', 25, 'Fullstack Developer', 'bart.jpeg'),
    new Candidat(2, 'Nidhal', 'Jelassi', 25, 'Fullstack Developer', 'homer.jpeg'),
    new Candidat(3, 'Mohamed', 'Jelassi', 25, 'Fullstack Developer', 'lisa.jpeg'),
  ];
  selectedCandidat: Candidat | undefined;

  recupererCandidat(cand: Candidat) {
    this.selectedCandidat = cand;
  }
}

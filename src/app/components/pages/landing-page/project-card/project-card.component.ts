import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input
import { Router } from '@angular/router';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title = '';
  @Input() image = '';

  imageSrc = '../../../../../assets/';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.imageSrc = this.imageSrc + this.image;
  }

  navigateProjects() {
    this.router.navigate(['projects']);
  }
}

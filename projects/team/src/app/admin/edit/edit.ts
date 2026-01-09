import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Head } from 'library';

@Component({
  selector: 'app-edit',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Head
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
  userForm!: FormGroup;
  userId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];

    // Simule récupération données utilisateur
    const userData = this.getUserData(this.userId);

    this.userForm = this.fb.group({
      firstName: [userData.firstName, Validators.required],
      lastName: [userData.lastName, Validators.required],
      email: [userData.email, [Validators.required, Validators.email]],
      phone: [userData.phone],
      role: [userData.role, Validators.required],
      status: [userData.status, Validators.required]
    });
  }

  getUserData(id: string) {
    // Ici tu peux remplacer par un service qui récupère l'utilisateur réel
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'admin@prixdassaut.com',
      phone: '+33 6 00 00 00 00',
      role: 'Admin',
      status: 'Actif'
    };
  }

  save() {
    if (this.userForm.valid) {
      console.log('Utilisateur mis à jour', this.userForm.value);
      // Ici tu appellerais ton API pour sauvegarder les modifications
      this.router.navigate(['/admin/database/users']);
    }
  }

  cancel() {
    this.router.navigate(['/admin/database/users']);
  }
}

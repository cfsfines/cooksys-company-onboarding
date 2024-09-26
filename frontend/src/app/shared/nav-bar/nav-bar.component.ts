import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

// TODO: Dynamically set actor text and add logout functionality

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isAdmin: boolean | undefined;
  userName: string = "";
  constructor(private userService: UserService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.isAdmin = this.userService.user!.admin
    if (!this.isAdmin) {
      this.userName = this.userService.user!.profile.firstName
    }
  }

  logout(): void {
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}

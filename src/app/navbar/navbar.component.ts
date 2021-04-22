import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  aboutMe(){
    this.router.navigate(['aboutMe']);
    }

    experience(){
        this.router.navigate(['experience']);
        }

        contact(){
            this.router.navigate(['contact']);
            }

            resume(){
                console.log("Download");
                
                }
}

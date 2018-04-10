import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        console.log("this.loading:",  this.loading);
        console.log("model",  this.model);
                        console.log("userService",  this.userService);
        this.userService.create(this.model)
            .subscribe(
                data => {
                        
                  console.log("Successful Reg");
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                console.log("Error in Reg");
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

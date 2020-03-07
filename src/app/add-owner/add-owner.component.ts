import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ownerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class addOwnerComponent implements OnInit {

  owner: any = {};
  dni = '';
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ownerservice: ownerService,
    private carService: CarService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.dni = params['dni'];
      if (this.dni) {
        this.ownerservice.get(this.dni).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner._embedded.owners[0];
            this.owner.href = this.owner._links.self.href;
          } else {
            console.log(`Owner with dni '${this.dni}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.ownerservice.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.ownerservice.remove(href).subscribe(result => {
      this.carService.getAll().subscribe(cars => {
        cars.map(car => {
          if (car.ownerDni === this.dni) {
            this.carService.get(car.id).subscribe((carInfo: any) => {
              const updateInfo = {
                name: carInfo.name,
                ownerDni: null,
                href: carInfo._links.self.href
              };
              this.carService.save(updateInfo).subscribe();
            });
          }
        })
      })
      this.gotoList();
    }, error => console.error(error));
  }

}

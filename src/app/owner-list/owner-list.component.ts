import { Component, OnInit } from '@angular/core';
import { ownerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class ownerlistcomponent implements OnInit {
  owners: Array<any>;
  constructor(private ownerService: ownerService) { 
   }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners
    });
  }

data(){
  console.log(this.owners);
}
}

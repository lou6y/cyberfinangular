import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.scss']
})
export class SingleProfileComponent implements OnInit {

    currentUser: any;

    constructor(private token: TokenStorageService) { }

    ngOnInit(): void {
        this.currentUser = this.token.getUser();
    }
}

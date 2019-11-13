import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../shared/service/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private auth: AuthServices) { }

  ngOnInit() {
  }

  test(){
    console.log(this.auth.token)
  }

}

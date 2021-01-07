import { Component, OnInit } from '@angular/core';
import { PeopleService }  from 'src/app/services/people.service'
import { People } from 'src/app/interfaces/people'
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  public peopleList: People[] = [];  
  public image: string = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg" 
  public id: string;
  constructor(
    private peopleService: PeopleService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.peopleService.getPeopleAll().subscribe(resp => {
      console.log('listado de People->', resp.results[1]);
      this.peopleList = resp.results;
     
    }, error => {
      console.log('error All People -->', error);
    })
  }  

  detallePeople(id_custom: string) {
    id_custom = id_custom.substring(28, 29)
    console.log('cuanto vale ID? --->',id_custom)
    this.router.navigate(['people', 'detail', id_custom]);
  }

}

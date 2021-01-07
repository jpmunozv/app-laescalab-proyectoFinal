import { Component, OnInit } from '@angular/core';
import { PeopleService }  from 'src/app/services/people.service'
import { People } from 'src/app/interfaces/people'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent implements OnInit {
  public peopleDetail : People
  public id_people : any
  public image: string = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
  constructor(
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      console.log('params DETALLAZOS -->', params);
      this.id_people = params.get('id');
      console.log('se pinta id_people? Si con valor --->',this.id_people)
    })

    this.peopleService.getPeople(this.id_people).subscribe(resp => {
      this.peopleDetail = resp;
      console.log('Como vienen los datos del PERSONAJE -->', this.peopleDetail);
    }, error => {
      console.log('erro info del PERSONAJE', error);
    })

  }


}

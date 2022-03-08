import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { NewEntryComponent } from '../new-entry/new-entry.component';


@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent extends CardsComponent{

     posts = [
        { 
         username: 'T. S. Eliot',
         submissionDate: '02/09/2022',
         internSemester: 'Winter 1911',
         message: 'Let us go then, you and I, When the evening is spread out against the skyLike a patient etherized upon a table; Let us go, through certain half-deserted streets,The muttering retreats Of restless nights in one-night cheap hotelsAnd sawdust restaurants with oyster-shells: Streets that follow like a tedious argument Of insidious intent To lead you to an overwhelming question ... Oh, do not ask, “What is it?” Let us go and make our visit.',
        },       
        ];
               
}





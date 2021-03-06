

import {Component, OnInit} from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
declare let toastr
@Component({
  
    template : `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    
    </div>
    </div>
    `
   
     
})
export class EventsListComponent implements OnInit{
    events:any[]
   constructor(private eventService:EventService, private toastr:ToastrService){

   }
   ngOnInit(){
    this.events = this.eventService.getEvents()
   }
   handleThumbnailClick(eventName){
    toastr.success(eventName)
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { UserMcq } from '../models/UserMcq';
import { McqService } from '../services/mcq.service';
import { ProjectService } from '../services/project.service';
import {MatDialog} from '@angular/material/dialog';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  participants:Array<any>=[];
  displayedColumns: String[] = ['id', 'name', 'submitteddOn','file','score','edit'];
  
  dataSource = this.participants;

  Id:Number;
  constructor(private router:Router, private route : ActivatedRoute,private mcqService:McqService,private projectService:ProjectService,private dialog:MatDialog) { }

  Title:any;
  type:String
  ngOnInit(): void {
    this.Id=Number(this.route.snapshot.paramMap.get('id'));
   // console.log(this.mcqId);


    console.log(this.route.snapshot.url[0].path);

    this.type=this.route.snapshot.url[0].path
    if(this.type == "part")
{
  this.mcqService.getAllUserMcq().subscribe(resp=>{
    this.participants = resp;
    this.participants = this.participants.filter(p=>{
        return p.mcq.id == this.Id;
    })
    
    if(this.participants.length!=0)
    this.Title=this.participants[0].mcq.name || ' ';
  })
}
    
else{
this.projectService.getAllUserProjects().subscribe(resp=>{
      this.participants = resp;
      console.log(this.Id);
      this.participants = this.participants.filter(p=>{
        console.log(this.Id  +" " +p.project.id);
        return p.project.id == this.Id;
    })
    if(this.participants.length!=0)
      this.Title=this.participants[0].project.name || ' ';
    })
}
    
   
  }

  onEdit(userProject){
    this.dialog.open(CreateProjectComponent,{
      width: '330px',
      height: '300px',
      data: {
       action:"userProjEdit",
       userProject:userProject
      }
    })
  }


  onFileClick(filedata){
    this.downloadFile(filedata)
  }

  base64ToBlob(b64Data, contentType='', sliceSize=512) {
    b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
    

  
}

downloadFile(b64encodedString: string) {
  if (b64encodedString) {
    var blob = this.base64ToBlob(b64encodedString, 'application/octet-stream');
    saveAs(blob, "download.zip");
  }}

}

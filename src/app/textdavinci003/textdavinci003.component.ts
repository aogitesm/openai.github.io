import { Component, OnInit } from '@angular/core';
import { Textdavinci003Service } from '../services/textdavinci003.service';

@Component({
  selector: 'app-textdavinci003',
  templateUrl: './textdavinci003.component.html',
  styleUrls: ['./textdavinci003.component.css']
})
export class Textdavinci003Component implements OnInit {

  constructor(private textdavinci003 : Textdavinci003Service) {}
  ngOnInit(): void{
  }

  result :string = "";
  pet : string = "";

  postCompletition(){
    let myprompt = `Suggest three name for an animal that is a superhero.
    Animal: Cat
    Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
    Animal: Dog
    Names: Tuff the Protector, Wonder Canine, Sir Barks-a-Lot
    Animal: ${this.pet}
    `;
    var payload = {
      model: "text-davinci-003",
      prompt: myprompt,
      temperature: 0.6
    }

    this.textdavinci003.postCompletition(payload)
    .subscribe((data: any) => {
            //alert(JSON.stringify(data));
        console.log(data);
        this.result = data.choices[0].text;
    });
  }
}

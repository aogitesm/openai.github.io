import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Textdavinci003Service } from '../services/textdavinci003.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit {

  imageSrc: string = '';
  prompt: string = '';

  constructor(private http: HttpClient, private textdavinci003 : Textdavinci003Service) { }

  ngOnInit(): void {
  }

  generateImage(): void {
    let prompt = "A beautiful sunset over a mountain lake";
    let url = "https://api.openai.com/v1/images/generations";

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Replace with your API key
    });

    let payload = {
      model: "image-alpha-001",
      prompt: prompt,
      response_format: "url"
    }

    this.http.post<any>(url, payload, { headers: headers }).subscribe(data => {
      this.imageSrc = data.data[0].url;
    });
  }

}


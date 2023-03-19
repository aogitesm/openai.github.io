import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component {
  prompt: string = '';
  response: string = '';

  constructor(private http: HttpClient) { }

  generateText(): void {
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY' // Replace with your OpenAI API key
    };
    const data = {
      prompt: this.prompt,
      max_tokens: 100,
      n: 1,
      stop: '\n'
    };

    this.http.post(url, data, { headers }).subscribe((response: any) => {
      this.response = response.choices[0].text;
    });
  }
}
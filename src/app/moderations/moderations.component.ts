import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {

  inputText: string = '';
  outputText: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  onModerateText(): void {
    if (this.inputText.trim() === '') {
      this.errorMessage = 'Please enter some text.';
      return;
    }
    this.errorMessage = '';
    const url = 'https://api.openai.com/v1/content/moderate';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    };
    const data = { prompt: this.inputText, model: 'content-filter-alpha-1' };
    this.http.post<any>(url, data, { headers: headers }).subscribe(response => {
      this.outputText = response.data[0].output;
    }, error => {
      this.errorMessage = 'There was an error moderating the text. Please try again.';
    });
  }
}

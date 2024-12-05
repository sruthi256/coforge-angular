import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname: string = '';
  pemail: string='';
  pmessage: string='';
  submittedData: any = null;

  constructor (private router: Router){}

  onSubmit(){
    this.submittedData={
      name: this.pname,
      email: this.pemail,
      message: this.pmessage
    };

    //After 10sec , navigate to  'details' component along with'submittedData' object
    setTimeout(() => {
      this.router.navigate(['/det'],{
        state: { data: this.submittedData},
      });
    } ,5000); //5sec
  }

}

import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-generic-forms',
  templateUrl: './generic-forms.component.html',
  styleUrls: ['./generic-forms.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class GenericFormsComponent implements OnInit{
    @Input() fields: any[] = []; // Array of form field configurations
    @Input() temporaile: any = {}; // Array of form field configurations
    @Input() endPoint: string;
    @Input() status: string;
    residence:any[] = [];
    communes:any[] = [];
    @Output() customEvent = new EventEmitter<string>();
    form: FormGroup;
    state: boolean = false;
    constructor(private fb: FormBuilder,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private service: FormService) {}

    ngOnInit() {
      this.createForm();
      this.getAllResidence();
      this.getAllCommunes();
    }

    createForm() {
      const formGroupConfig = {};

      this.fields.forEach(field => {
        formGroupConfig[field.name] = [
          field.value || '',
          field.validators || []
        ];
      });

        console.log(formGroupConfig)
      this.form = this.fb.group(formGroupConfig);
    }
    disabled(status:any){
        this.customEvent.emit(status);

    }
    save(){

      if (this.form.invalid) {
          // Marquez tous les champs comme touchés pour afficher les erreurs
          this.form.markAllAsTouched();
        }else{
          this.state = true
          this.service.create(this.endPoint, this.form.value).subscribe({
              next: value =>    console.log(value) ,
              error: err => {
                  console.error('Observable emitted an error: ' + err),
                         this.state = false ,
                         this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
    
                      },
              complete: () =>      {
                this.state = false; 
                this.form.reset();
                this.disabled("refresh");
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
              },
    
          });
        }
    }
    getAllResidence(){
      this.service.getAll("residence").subscribe({
          next: value =>         {     
            this.residence = value;
  
          },
          error: err => console.error('Observable emitted an error: ' + err),
          complete: () => { 
            console.log("ok");
          },
      });
    }
    getAllCommunes(){
      this.service.getAll("communes").subscribe({
          next: value =>         {  
               this.communes = value;
  
          },
          error: err => console.error('Observable emitted an error: ' + err),
          complete: () => {  

            console.log("oks");
          },
      });
    }
    edit(){
      if (this.form.invalid) {
        // Marquez tous les champs comme touchés pour afficher les erreurs
        this.form.markAllAsTouched();
      }else{
        this.state = true
        this.service.update(this.endPoint, this.form.value, this.temporaile.id).subscribe({
            next: value =>    console.log(value) ,
            error: err => {
                console.error('Observable emitted an error: ' + err),
                       this.state = false ,
                       this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
  
                    },
            complete: () =>      {
              this.state = false; 
              this.form.reset();
              this.disabled("refresh");
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Modifié avec success', life: 3000 });
            },
  
        });
      }

    }
}

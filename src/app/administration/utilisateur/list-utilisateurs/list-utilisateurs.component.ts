import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent  implements OnInit{
  load: boolean = false;
    tableColumns = [
        { header: 'Noms Utilisateur', field: 'username' },
        { header: 'Role', field: 'role' },

      ];

      tableData = [
          ];

          formsFields = [
            { name: 'userName', label: "Noms d'Utilisateur", validators: [Validators.required] },
            { name: 'role', label: 'Role', type: 'text', validators: [Validators.required] },
            { name: 'passwords', label: 'Mots de passe', type: 'password', validators: [Validators.required] },
        ];

        constructor(private service: FormService, private breadcrumbService: BreadcrumbService){
          this.breadcrumbService.setItems([
            { label: 'Liste Des Utilisateurs'},

        ]);
        }
        ngOnInit(): void {
          this.getAllUsers();
        }


        getAllUsers(){
          this.load = true;
          this.service.getAll("users").subscribe({
              next: value =>         {     this.tableData = value;
      
              },
              error: err => console.error('Observable emitted an error: ' + err),
              complete: () => {  this.load = false},
          });
        }
}

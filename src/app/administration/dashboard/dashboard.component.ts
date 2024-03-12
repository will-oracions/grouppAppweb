import { Component } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { Product } from 'src/app/demo/interface/product';
import { FormService } from 'src/app/demo/service/base.service';
import { EventService } from 'src/app/demo/service/eventservice';
import { ProductService } from 'src/app/demo/service/productservice';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../assets/demo/badges.scss'],
  styles: [`
      @media screen and (max-width: 960px) {
          :host ::ng-deep .fc-header-toolbar {
              display: flex;
              flex-wrap: wrap;

              .fc-dayGridMonth-button {
                  margin-top: 1rem;
              }
              .fc-timeGridWeek-button{
                  margin-top: 1rem;
              }
              .fc-timeGridDay-button{
                  margin-top: 1rem;
              }
          }
      }
      :host ::ng-deep .p-panel .p-panel-header{

        background: linear-gradient(to right, #235a8c, #0e3f6a) !important;
        color: #ffffff !important;
    }

  `]
})
export class DashboardComponent {
  cities: SelectItem[];
  load: boolean;
  states: any;
  products: Product[];

  chartData: any;
  vulnerability:any;
  events: any[];

  selectedCity: any;

  items: MenuItem[];
  data: any;
  etudiantChart: any;
  etudiantInscritChart: any;
  etudiantInsolvableChart: any;
  etudiantRattrapageChart: any;

  options: any;
  fullcalendarOptions: any;
  constructor(private productService: ProductService, private eventService: EventService, private breadcrumbService: BreadcrumbService, private service: FormService) {
      this.breadcrumbService.setItems([
          { label: 'Dashboard', routerLink: [''] }
      ]);
  }

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };


      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
      this.productService.getProducts().then(data => this.products = data);
      this.eventService.getEvents().then(events => {
          this.events = events;
          this.fullcalendarOptions = { ...this.fullcalendarOptions, ...{ events: events } };
      });

      this.getAllState();
  }
  async getAllState() {
      let state: any;
      this.load = true;
      state = await firstValueFrom(this.service.getState()).catch((err) => {
          this.load = false;
      });
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.vulnerability = {
        labels: state.vulnerabiliteState.map((item: any) => item.libelle),
        datasets: [
            {
                data: state.vulnerabiliteState.map((item: any) => item.nombre),
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--orange-500'),, documentStyle.getPropertyValue('--green-500')],
            }
        ]
    };
      this.states = state;
      this.load = false;

  }
  private generateRandomColors(count: number): string[] {
      const colors: string[] = [];
      for (let i = 0; i < count; i++) {
          colors.push(`rgba(${this.getRandomColorValue()}, ${this.getRandomColorValue()}, ${this.getRandomColorValue()}, 0.6)`);
      }
      return colors;
  }

  private getRandomColorValue(): number {
      return Math.floor(Math.random() * 256);
  }
}

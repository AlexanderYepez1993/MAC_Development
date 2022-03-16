import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  value!: string;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Personal',
        icon:'pi pi-fw pi-users',
        items:[
            {
                label:'Registrar',
                icon:'pi pi-fw pi-user-edit',
            },
            {
                separator:true
            },
            {
                label:'Exportar',
                icon:'pi pi-fw pi-external-link'
            }
        ]
    },
    {
          label:'Asistencia',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Registrar',
                  icon:'pi pi-fw pi-clock',
                  routerLink: '/home/asistencia/regAsistencia'
              },
              {
                  separator:true
              },
              {
                  label:'Exportar',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Equipamiento',
          icon:'pi pi-fw pi-briefcase',
          items:[
              {
                  label:'Control de activos',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Control...',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Control...',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Control...',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
        label:'Reportes',
        icon:'pi pi-fw pi-chart-bar',
        items:[
            {
                label:'Editar',
                icon:'pi pi-fw pi-pencil',
                items:[
                {
                    label:'Guardar',
                    icon:'pi pi-fw pi-calendar-plus'
                },
                {
                    label:'Eliminar',
                    icon:'pi pi-fw pi-calendar-minus'
                },

                ]
            },
            {
                label:'Archivar',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                {
                    label:'Retirar',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            }
        ]
    },
      {
          label:'Usuarios',
          icon:'pi pi-fw pi-cog'
      }
    ];
  }

}

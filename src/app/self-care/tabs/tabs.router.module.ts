import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component:Tab1Page,
        /*children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]*/
      },
      { 
    path: 'tab1/alerts',

    loadChildren: '../alerts/alerts.module#AlertPageModule'
  },
  { 
    path: 'tab1/appointments', 
    loadChildren: '../appointments/appointments.module#AppointmentsPageModule'
  },
  { 
    path: 'tab1/doc-visits', 
    loadChildren: '../doc-visits/doc-visits.module#DocVisitsPageModule'
  },
  { 
    path: 'tab1/expenses', 
    loadChildren: '../expenses/expenses.module#ExpensesPageModule'
  },
  { 
    path: 'tab1/health-diary', 
    loadChildren: '../health-diary/health-diary.module#HealthDiaryPageModule'
  },
  { 
    path: 'tab1/prescriptions', 
    loadChildren: '../prescriptions/prescriptions.module#PrescriptionsPageModule'
  },
  { 
    path: 'tab1/reports', 
    loadChildren: '../reports/reports.module#ReportsPageModule'
  },
  { 
    path: 'tab1/vitals', 
    loadChildren: '../vitals/vitals.module#AppRoutingModule'
  },
      {
        path: 'tab2',
        component: Tab2Page,
        /*children: [
          {
            path: '',

            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]*/
          children: [
        {
          path: 'tab2/about',
          children: [
            {
              path: '',
              loadChildren: '../tab2/about/about.module#AboutPageModule'
            }
          ]
        },
        {
          path: 'tab2/contact',
          children: [
            {
              path: '',
              loadChildren: '../tab2/contact/contact.module#ContactPageModule'
            }
          ]
        },
        {
          path: 'tab2/health',
          children: [
            {
              path: '',
              loadChildren: '../tab2/health/health.module#HealthPageModule'
            }
          ]
        },
        {
          path: '',
          loadChildren: '../tab2/about/about.module#AboutPageModule'
         
        }
      ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  /*declarations: [Tab2Page]*/
})
export class TabsPageRoutingModule {}

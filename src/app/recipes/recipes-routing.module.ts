import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BussinessComponent } from './details/bussiness/bussiness.component';
import { CoursesComponent } from './details/courses/courses.component';
import { EcommComponent } from './details/ecomm/ecomm.component';
import { GraphicComponent } from './details/graphic/graphic.component';
import { MobAppComponent } from './details/mob-app/mob-app.component';
import { NetworkComponent } from './details/network/network.component';
import { SecurityComponent } from './details/security/security.component';
import { SolveComponent } from './details/solve/solve.component';
import { TrainingComponent } from './details/training/training.component';
import { WebComponent } from './details/web/web.component';
import { FactoryCardComponent } from './factory/factory-card/factory-card.component';
import { FactoryProjComponent } from './factory/factory-proj/factory-proj.component';
import { HomeComponent } from './home/home.component';
import { BussinessOrderListComponent } from './order-list/bussiness-order-list/bussiness-order-list.component';
import { CoursesOrderListComponent } from './order-list/courses-order-list/courses-order-list.component';
import { EcommerceOrderListComponent } from './order-list/ecommerce-order-list/ecommerce-order-list.component';
import { EventOrderListComponent } from './order-list/event-order-list/event-order-list.component';
import { GraphicOrderListComponent } from './order-list/graphic-order-list/graphic-order-list.component';
import { MobileOrderListComponent } from './order-list/mobile-order-list/mobile-order-list.component';
import { NetImpOrderListComponent } from './order-list/net-imp-order-list/net-imp-order-list.component';
import { NetworkOrderListComponent } from './order-list/network-order-list/network-order-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SolveOrderListComponent } from './order-list/solve-order-list/solve-order-list.component';
import { WebOrderListComponent } from './order-list/web-order-list/web-order-list.component';
import { BussinessOrderComponent } from './order/bussiness-order/bussiness-order.component';
import { CoursesOrderComponent } from './order/courses-order/courses-order.component';
import { EcommerceOrderComponent } from './order/ecommerce-order/ecommerce-order.component';
import { EventOrderComponent } from './order/event-order/event-order.component';
import { GraphicOrderComponent } from './order/graphic-order/graphic-order.component';
import { MobileOrderComponent } from './order/mobile-order/mobile-order.component';
import { NetImpOrderComponent } from './order/net-imp-order/net-imp-order.component';
import { NetworkOrderComponent } from './order/network-order/network-order.component';
import { OrderComponent } from './order/order.component';
import { SolveOrderComponent } from './order/solve-order/solve-order.component';
import { WebOrderComponent } from './order/web-order/web-order.component';
// import { RecipesUrlsComponent } from './recipes-list/recipes-urls/recipes-urls.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },

      {
        path: 'blogs',
        component: FactoryProjComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'mob-app',
        component: MobAppComponent,
      },
      {
        path: 'network-design',
        component: NetworkComponent,
      },
      {
        path: 'web-development',
        component: WebComponent,
      },
      {
        path: 'training-halls',
        component: TrainingComponent,
      },
      {
        path: 'graphic-design',
        component: GraphicComponent,
      },
      {
        path: 'ecommerce',
        component: EcommComponent,
      },
      {
        path: 'security',
        component: SecurityComponent,
      },
      {
        path: 'solving-problems',
        component: SolveComponent,
      },
      {
        path: 'bussiness-administration',
        component: BussinessComponent,
      },
      {
        path: 'order/solve-problems-order',
        component: SolveOrderComponent,
      },
      {
        path: 'order-list/solve-problems-order-list',
        component: SolveOrderListComponent,
      },
      {
        path: 'order/security-order',
        component: NetworkOrderComponent,
      },
      {
        path: 'order-list/security-order-list',
        component: NetworkOrderListComponent,
      },
      {
        path: 'order/bussiness-order',
        component: BussinessOrderComponent,
      },
      {
        path: 'order-list/bussiness-order-list',
        component: BussinessOrderListComponent,
      },
      {
        path: 'order/event-order',
        component: EventOrderComponent,
      },
      {
        path: 'order-list/event-order-list',
        component: EventOrderListComponent,
      },
      {
        path: 'order/mobile-app-order',
        component: MobileOrderComponent,
      },
      {
        path: 'order-list/mobile-app-order-list',
        component: MobileOrderListComponent,
      },
      {
        path: 'order/web-development-order',
        component: WebOrderComponent,
      },
      {
        path: 'order-list/web-development-order-list',
        component: WebOrderListComponent,
      },
      {
        path: 'order/network-order',
        component: NetImpOrderComponent,
      },
      {
        path: 'order-list/network-order-list',
        component: NetImpOrderListComponent,
      },
      {
        path: 'order/graphic-design-order',
        component: GraphicOrderComponent,
      },
      {
        path: 'order-list/graphic-design-order-list',
        component: GraphicOrderListComponent,
      },
      {
        path: 'order/course-order',
        component: CoursesOrderComponent,
      },
      {
        path: 'order-list/courses-order-list',
        component: CoursesOrderListComponent,
      },
      {
        path: 'order/ecommerce-order',
        component: EcommerceOrderComponent,
      },
      {
        path: 'order-list/ecommerce-order-list',
        component: EcommerceOrderListComponent,
      },
      {
        path: 'blogs/:name/:id',
        component: FactoryCardComponent,
      },

      {
        path: 'contactlistofeveryoneloggedtheform/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orderlistofeveryoneloggedtheform/order-list',
        component: OrderListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}

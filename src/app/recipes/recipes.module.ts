import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
// import { RecipesUrlsComponent } from './recipes-list/recipes-urls/recipes-urls.component';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeadingComponent } from '../heading/heading.component';

import { SafePipe } from '../safe.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FactoryProjComponent } from './factory/factory-proj/factory-proj.component';
import { FactoryCardComponent } from './factory/factory-card/factory-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { SystemComponent } from './system/system.component';
import { ClientsComponent } from './clients/clients.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CoursesComponent } from './details/courses/courses.component';
import { MobAppComponent } from './details/mob-app/mob-app.component';
import { NetworkComponent } from './details/network/network.component';
import { WebComponent } from './details/web/web.component';
import { TrainingComponent } from './details/training/training.component';
import { GraphicComponent } from './details/graphic/graphic.component';
import { EcommComponent } from './details/ecomm/ecomm.component';
import { SecurityComponent } from './details/security/security.component';
import { SolveComponent } from './details/solve/solve.component';
import { BussinessComponent } from './details/bussiness/bussiness.component';
import { SolveOrderComponent } from './order/solve-order/solve-order.component';
import { SolveOrderListComponent } from './order-list/solve-order-list/solve-order-list.component';
import { NetworkOrderListComponent } from './order-list/network-order-list/network-order-list.component';
import { NetworkOrderComponent } from './order/network-order/network-order.component';
import { BussinessOrderComponent } from './order/bussiness-order/bussiness-order.component';
import { BussinessOrderListComponent } from './order-list/bussiness-order-list/bussiness-order-list.component';
import { EventOrderListComponent } from './order-list/event-order-list/event-order-list.component';
import { EventOrderComponent } from './order/event-order/event-order.component';
import { MobileOrderComponent } from './order/mobile-order/mobile-order.component';
import { MobileOrderListComponent } from './order-list/mobile-order-list/mobile-order-list.component';
import { WebOrderListComponent } from './order-list/web-order-list/web-order-list.component';
import { WebOrderComponent } from './order/web-order/web-order.component';
import { NetImpOrderComponent } from './order/net-imp-order/net-imp-order.component';
import { NetImpOrderListComponent } from './order-list/net-imp-order-list/net-imp-order-list.component';
import { GraphicOrderListComponent } from './order-list/graphic-order-list/graphic-order-list.component';
import { GraphicOrderComponent } from './order/graphic-order/graphic-order.component';
import { CoursesOrderComponent } from './order/courses-order/courses-order.component';
import { CoursesOrderListComponent } from './order-list/courses-order-list/courses-order-list.component';
import { EcommerceOrderComponent } from './order/ecommerce-order/ecommerce-order.component';
import { EcommerceOrderListComponent } from './order-list/ecommerce-order-list/ecommerce-order-list.component';

@NgModule({
  declarations: [
    RecipesComponent,
    AboutComponent,

    HeadingComponent,

    SafePipe,
    DashboardComponent,
    FactoryProjComponent,
    FactoryCardComponent,
    ProgramComponent,
    SystemComponent,
    ClientsComponent,
    ContentComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    OrderListComponent,
    CoursesComponent,
    MobAppComponent,
    NetworkComponent,
    WebComponent,
    TrainingComponent,
    GraphicComponent,
    EcommComponent,
    SecurityComponent,
    SolveComponent,
    BussinessComponent,
    SolveOrderComponent,
    SolveOrderListComponent,
    NetworkOrderListComponent,
    NetworkOrderComponent,
    BussinessOrderComponent,
    BussinessOrderListComponent,
    EventOrderListComponent,
    EventOrderComponent,
    MobileOrderComponent,
    MobileOrderListComponent,
    WebOrderListComponent,
    WebOrderComponent,
    NetImpOrderComponent,
    NetImpOrderListComponent,
    GraphicOrderListComponent,
    GraphicOrderComponent,
    CoursesOrderComponent,
    CoursesOrderListComponent,
    EcommerceOrderComponent,
    EcommerceOrderListComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,

    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule,
    // NgxQRCodeModule,
    TranslateModule,
    Ng2SearchPipeModule,
    SlickCarouselModule,

    // NgxOtpInputModule,
  ],
  exports: [AboutComponent, RecipesComponent, HomeComponent],
})
export class RecipesModule {}

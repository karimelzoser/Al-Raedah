import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoggingService } from '../logging.service';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner-component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    NotFoundComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    TranslateModule,
  ],
  entryComponents: [AlertComponent],
  providers: [LoggingService],
})
export class SharedModule {}

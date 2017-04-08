import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  IndexComponent
} from './index/index.component';
const appRoutes : Routes = [{
  path        : '',
  component   : IndexComponent
}];

export const rootRouting = RouterModule.forRoot(appRoutes);

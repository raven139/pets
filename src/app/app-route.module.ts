import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllUsersComponent } from './all-users/all-users.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
    { path: '', redirectTo: '/allUsers', pathMatch: 'full' },
    { path: 'allUsers', component: AllUsersComponent },
    { path: 'singleUser', component: SingleUserComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {
}

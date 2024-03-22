import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => 
            import('./module/public/public.module').then(m => m.PublicModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'home', 
        loadChildren: () => 
            import('./module/home-layout/home-layout.module').then(m => m.HomeLayoutModule),
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

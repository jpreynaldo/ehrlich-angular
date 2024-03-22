import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => 
            import('./module/public/public.module').then(m => m.PublicModule)
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

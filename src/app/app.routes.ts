import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { DesarrolloPages } from './page/desarrollo/desarrollo';
import { ContactoPages } from './page/contacto/contacto';
import { ConsultoriaPages } from './page/consultoria/consultoria';
import { AsesoriaLegalPages } from './page/asesoria-legal/asesoria-legal';
import { MarketingEmpresarialPages } from './page/marketing-empresarial/marketing-empresarial';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'consultoria', component: ConsultoriaPages },
    { path: 'asesoria-legal', component: AsesoriaLegalPages },
    { path: 'desarrollo-digital', component: DesarrolloPages },
    { path: 'marketing-empresarial', component: MarketingEmpresarialPages },
    { path: 'contact', component: ContactoPages },
    { path: '**', redirectTo: 'home' }
];

import { Routes } from '@angular/router';
import { WorkspaceComponent } from './UI/Main/workspace/workspace.component';

export const routes: Routes = [
  { path: '', component: WorkspaceComponent }, // Default route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route to redirect any undefined routes to the default
];

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from './server.interface';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<{id: number, name: string, status: string} | undefined>{

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> | undefined {
      return this.serversService.getServer(+route.params['id']);
  }
}

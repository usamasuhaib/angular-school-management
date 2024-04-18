import {
  HttpInterceptorFn, HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const myToken= localStorage.getItem('token')
 
    var cloneReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${myToken}`
      }
    });
    return next(cloneReq);

    
  }



import { HttpClient, HttpResponse, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        const clonedRequest = req.clone({headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Headers':'Content-Type',
             'Access-Control-Allow-Origin': '*'
        })} );
    
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
      }
}
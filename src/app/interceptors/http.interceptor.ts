import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith(".json")) return next.handle(req); // to pass json files

    const authReq = req.clone({
      headers: new HttpHeaders({
        "Authorization": `446a6828200604377695aa034cf57e36`,
        "UserAddressId":"2378",
        "StoreId":"1"
      }),
    });
    return next.handle(authReq);
  }
}

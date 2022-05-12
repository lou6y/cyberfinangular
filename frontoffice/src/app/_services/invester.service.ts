import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, Subscriber, Subscription } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class InvesterService {
    data = {} as any;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}

    addInvester(email: string, amount: number, investstart: string) {
        this.http
            .post("http://localhost:8083/SpringMVC/addInvest", {
                email,
                amount,
                investstart,
            })
            .subscribe(
                () => {
                    this.router.navigate(["/"]);
                },
                (error) => {
                    this.authStatusListener.next(false);
                }
            );

        console.log("test");
    }
    async getAllInvesters() {
      let a =  await this.http
            .get("http://localhost:8083/SpringMVC/getAllInvests")
            .toPromise();
        return a;
    }


    deleteInvester(clientid: number){
        //console.log(clientid);
        return this.http.delete("http://localhost:8083/SpringMVC/remove-Invest/"+clientid);
      }
}

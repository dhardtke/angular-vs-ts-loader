import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub895Component} from "./stub895.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub895Component
        }])
    ],
    declarations: [
        Stub895Component
    ]
})
export class Stub895Module {

}

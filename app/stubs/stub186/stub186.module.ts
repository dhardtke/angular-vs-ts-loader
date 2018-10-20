import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub186Component} from "./stub186.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub186Component
        }])
    ],
    declarations: [
        Stub186Component
    ]
})
export class Stub186Module {

}

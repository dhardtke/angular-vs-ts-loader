import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub782Component} from "./stub782.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub782Component
        }])
    ],
    declarations: [
        Stub782Component
    ]
})
export class Stub782Module {

}

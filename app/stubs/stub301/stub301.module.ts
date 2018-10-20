import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub301Component} from "./stub301.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub301Component
        }])
    ],
    declarations: [
        Stub301Component
    ]
})
export class Stub301Module {

}

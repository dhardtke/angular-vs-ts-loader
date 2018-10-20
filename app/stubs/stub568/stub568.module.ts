import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub568Component} from "./stub568.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub568Component
        }])
    ],
    declarations: [
        Stub568Component
    ]
})
export class Stub568Module {

}

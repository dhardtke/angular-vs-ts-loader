import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub139Component} from "./stub139.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub139Component
        }])
    ],
    declarations: [
        Stub139Component
    ]
})
export class Stub139Module {

}

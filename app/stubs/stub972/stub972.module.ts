import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub972Component} from "./stub972.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub972Component
        }])
    ],
    declarations: [
        Stub972Component
    ]
})
export class Stub972Module {

}

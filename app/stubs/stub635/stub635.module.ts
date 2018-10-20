import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub635Component} from "./stub635.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub635Component
        }])
    ],
    declarations: [
        Stub635Component
    ]
})
export class Stub635Module {

}

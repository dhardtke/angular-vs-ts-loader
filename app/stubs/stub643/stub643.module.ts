import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub643Component} from "./stub643.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub643Component
        }])
    ],
    declarations: [
        Stub643Component
    ]
})
export class Stub643Module {

}

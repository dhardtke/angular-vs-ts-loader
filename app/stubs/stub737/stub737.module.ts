import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub737Component} from "./stub737.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub737Component
        }])
    ],
    declarations: [
        Stub737Component
    ]
})
export class Stub737Module {

}

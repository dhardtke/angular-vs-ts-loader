import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub620Component} from "./stub620.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub620Component
        }])
    ],
    declarations: [
        Stub620Component
    ]
})
export class Stub620Module {

}

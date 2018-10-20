import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub709Component} from "./stub709.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub709Component
        }])
    ],
    declarations: [
        Stub709Component
    ]
})
export class Stub709Module {

}

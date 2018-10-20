import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub729Component} from "./stub729.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub729Component
        }])
    ],
    declarations: [
        Stub729Component
    ]
})
export class Stub729Module {

}

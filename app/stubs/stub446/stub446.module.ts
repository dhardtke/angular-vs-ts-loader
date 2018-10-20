import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub446Component} from "./stub446.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub446Component
        }])
    ],
    declarations: [
        Stub446Component
    ]
})
export class Stub446Module {

}

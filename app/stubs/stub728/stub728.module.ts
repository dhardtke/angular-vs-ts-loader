import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub728Component} from "./stub728.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub728Component
        }])
    ],
    declarations: [
        Stub728Component
    ]
})
export class Stub728Module {

}

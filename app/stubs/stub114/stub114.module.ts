import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub114Component} from "./stub114.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub114Component
        }])
    ],
    declarations: [
        Stub114Component
    ]
})
export class Stub114Module {

}

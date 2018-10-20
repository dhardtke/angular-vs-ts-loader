import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub989Component} from "./stub989.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub989Component
        }])
    ],
    declarations: [
        Stub989Component
    ]
})
export class Stub989Module {

}

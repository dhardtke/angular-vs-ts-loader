import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub707Component} from "./stub707.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub707Component
        }])
    ],
    declarations: [
        Stub707Component
    ]
})
export class Stub707Module {

}

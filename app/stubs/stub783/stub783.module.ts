import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub783Component} from "./stub783.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub783Component
        }])
    ],
    declarations: [
        Stub783Component
    ]
})
export class Stub783Module {

}

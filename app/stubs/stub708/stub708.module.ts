import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub708Component} from "./stub708.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub708Component
        }])
    ],
    declarations: [
        Stub708Component
    ]
})
export class Stub708Module {

}

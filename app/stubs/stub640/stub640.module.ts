import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub640Component} from "./stub640.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub640Component
        }])
    ],
    declarations: [
        Stub640Component
    ]
})
export class Stub640Module {

}

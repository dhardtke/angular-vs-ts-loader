import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub44Component} from "./stub44.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub44Component
        }])
    ],
    declarations: [
        Stub44Component
    ]
})
export class Stub44Module {

}

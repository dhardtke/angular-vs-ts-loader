import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub722Component} from "./stub722.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub722Component
        }])
    ],
    declarations: [
        Stub722Component
    ]
})
export class Stub722Module {

}

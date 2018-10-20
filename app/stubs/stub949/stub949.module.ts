import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub949Component} from "./stub949.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub949Component
        }])
    ],
    declarations: [
        Stub949Component
    ]
})
export class Stub949Module {

}

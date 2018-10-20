import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub801Component} from "./stub801.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub801Component
        }])
    ],
    declarations: [
        Stub801Component
    ]
})
export class Stub801Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub566Component} from "./stub566.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub566Component
        }])
    ],
    declarations: [
        Stub566Component
    ]
})
export class Stub566Module {

}

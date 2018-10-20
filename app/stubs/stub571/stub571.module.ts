import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub571Component} from "./stub571.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub571Component
        }])
    ],
    declarations: [
        Stub571Component
    ]
})
export class Stub571Module {

}

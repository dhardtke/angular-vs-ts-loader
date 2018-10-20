import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub38Component} from "./stub38.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub38Component
        }])
    ],
    declarations: [
        Stub38Component
    ]
})
export class Stub38Module {

}

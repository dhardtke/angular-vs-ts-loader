import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub674Component} from "./stub674.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub674Component
        }])
    ],
    declarations: [
        Stub674Component
    ]
})
export class Stub674Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub69Component} from "./stub69.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub69Component
        }])
    ],
    declarations: [
        Stub69Component
    ]
})
export class Stub69Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub752Component} from "./stub752.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub752Component
        }])
    ],
    declarations: [
        Stub752Component
    ]
})
export class Stub752Module {

}

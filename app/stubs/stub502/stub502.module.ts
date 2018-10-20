import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub502Component} from "./stub502.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub502Component
        }])
    ],
    declarations: [
        Stub502Component
    ]
})
export class Stub502Module {

}

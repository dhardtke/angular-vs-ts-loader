import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub308Component} from "./stub308.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub308Component
        }])
    ],
    declarations: [
        Stub308Component
    ]
})
export class Stub308Module {

}

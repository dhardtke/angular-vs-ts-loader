import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub422Component} from "./stub422.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub422Component
        }])
    ],
    declarations: [
        Stub422Component
    ]
})
export class Stub422Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub110Component} from "./stub110.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub110Component
        }])
    ],
    declarations: [
        Stub110Component
    ]
})
export class Stub110Module {

}

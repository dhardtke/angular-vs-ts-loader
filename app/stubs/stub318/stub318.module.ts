import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub318Component} from "./stub318.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub318Component
        }])
    ],
    declarations: [
        Stub318Component
    ]
})
export class Stub318Module {

}

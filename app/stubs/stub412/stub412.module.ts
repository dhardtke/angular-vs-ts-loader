import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub412Component} from "./stub412.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub412Component
        }])
    ],
    declarations: [
        Stub412Component
    ]
})
export class Stub412Module {

}

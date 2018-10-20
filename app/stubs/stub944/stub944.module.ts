import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub944Component} from "./stub944.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub944Component
        }])
    ],
    declarations: [
        Stub944Component
    ]
})
export class Stub944Module {

}

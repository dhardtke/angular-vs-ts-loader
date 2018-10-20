import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub781Component} from "./stub781.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub781Component
        }])
    ],
    declarations: [
        Stub781Component
    ]
})
export class Stub781Module {

}

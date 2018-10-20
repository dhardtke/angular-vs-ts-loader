import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub528Component} from "./stub528.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub528Component
        }])
    ],
    declarations: [
        Stub528Component
    ]
})
export class Stub528Module {

}

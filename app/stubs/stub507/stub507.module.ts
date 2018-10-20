import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub507Component} from "./stub507.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub507Component
        }])
    ],
    declarations: [
        Stub507Component
    ]
})
export class Stub507Module {

}

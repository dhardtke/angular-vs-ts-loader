import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub574Component} from "./stub574.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub574Component
        }])
    ],
    declarations: [
        Stub574Component
    ]
})
export class Stub574Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub864Component} from "./stub864.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub864Component
        }])
    ],
    declarations: [
        Stub864Component
    ]
})
export class Stub864Module {

}

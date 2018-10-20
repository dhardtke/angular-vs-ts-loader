import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub101Component} from "./stub101.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub101Component
        }])
    ],
    declarations: [
        Stub101Component
    ]
})
export class Stub101Module {

}

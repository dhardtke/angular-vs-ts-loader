import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub736Component} from "./stub736.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub736Component
        }])
    ],
    declarations: [
        Stub736Component
    ]
})
export class Stub736Module {

}

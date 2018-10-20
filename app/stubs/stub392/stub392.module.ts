import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub392Component} from "./stub392.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub392Component
        }])
    ],
    declarations: [
        Stub392Component
    ]
})
export class Stub392Module {

}

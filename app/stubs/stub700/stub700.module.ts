import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub700Component} from "./stub700.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub700Component
        }])
    ],
    declarations: [
        Stub700Component
    ]
})
export class Stub700Module {

}

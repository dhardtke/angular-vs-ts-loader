import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub1Component} from "./stub1.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub1Component
        }])
    ],
    declarations: [
        Stub1Component
    ]
})
export class Stub1Module {

}

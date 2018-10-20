import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub339Component} from "./stub339.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub339Component
        }])
    ],
    declarations: [
        Stub339Component
    ]
})
export class Stub339Module {

}

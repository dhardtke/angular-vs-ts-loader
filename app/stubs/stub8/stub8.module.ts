import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub8Component} from "./stub8.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub8Component
        }])
    ],
    declarations: [
        Stub8Component
    ]
})
export class Stub8Module {

}

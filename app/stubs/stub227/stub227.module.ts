import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub227Component} from "./stub227.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub227Component
        }])
    ],
    declarations: [
        Stub227Component
    ]
})
export class Stub227Module {

}

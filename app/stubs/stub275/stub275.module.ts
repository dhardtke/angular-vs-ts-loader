import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub275Component} from "./stub275.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub275Component
        }])
    ],
    declarations: [
        Stub275Component
    ]
})
export class Stub275Module {

}

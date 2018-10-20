import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub394Component} from "./stub394.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub394Component
        }])
    ],
    declarations: [
        Stub394Component
    ]
})
export class Stub394Module {

}

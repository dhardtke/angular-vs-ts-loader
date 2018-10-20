import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub906Component} from "./stub906.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub906Component
        }])
    ],
    declarations: [
        Stub906Component
    ]
})
export class Stub906Module {

}

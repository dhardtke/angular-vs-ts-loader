import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub277Component} from "./stub277.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub277Component
        }])
    ],
    declarations: [
        Stub277Component
    ]
})
export class Stub277Module {

}

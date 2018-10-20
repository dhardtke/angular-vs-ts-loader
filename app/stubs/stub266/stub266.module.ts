import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub266Component} from "./stub266.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub266Component
        }])
    ],
    declarations: [
        Stub266Component
    ]
})
export class Stub266Module {

}

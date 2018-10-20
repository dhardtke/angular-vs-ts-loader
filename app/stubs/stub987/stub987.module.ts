import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub987Component} from "./stub987.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub987Component
        }])
    ],
    declarations: [
        Stub987Component
    ]
})
export class Stub987Module {

}

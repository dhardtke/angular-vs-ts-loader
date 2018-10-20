import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub827Component} from "./stub827.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub827Component
        }])
    ],
    declarations: [
        Stub827Component
    ]
})
export class Stub827Module {

}

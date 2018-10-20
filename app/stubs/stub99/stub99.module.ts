import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub99Component} from "./stub99.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub99Component
        }])
    ],
    declarations: [
        Stub99Component
    ]
})
export class Stub99Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub4Component} from "./stub4.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub4Component
        }])
    ],
    declarations: [
        Stub4Component
    ]
})
export class Stub4Module {

}

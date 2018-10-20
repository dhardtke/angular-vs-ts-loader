import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub986Component} from "./stub986.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub986Component
        }])
    ],
    declarations: [
        Stub986Component
    ]
})
export class Stub986Module {

}

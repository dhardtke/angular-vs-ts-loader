import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub970Component} from "./stub970.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub970Component
        }])
    ],
    declarations: [
        Stub970Component
    ]
})
export class Stub970Module {

}

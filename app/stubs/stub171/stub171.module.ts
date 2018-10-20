import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub171Component} from "./stub171.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub171Component
        }])
    ],
    declarations: [
        Stub171Component
    ]
})
export class Stub171Module {

}

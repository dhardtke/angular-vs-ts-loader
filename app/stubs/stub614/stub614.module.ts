import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub614Component} from "./stub614.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub614Component
        }])
    ],
    declarations: [
        Stub614Component
    ]
})
export class Stub614Module {

}

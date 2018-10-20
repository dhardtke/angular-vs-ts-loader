import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub850Component} from "./stub850.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub850Component
        }])
    ],
    declarations: [
        Stub850Component
    ]
})
export class Stub850Module {

}

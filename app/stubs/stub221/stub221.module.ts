import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub221Component} from "./stub221.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub221Component
        }])
    ],
    declarations: [
        Stub221Component
    ]
})
export class Stub221Module {

}

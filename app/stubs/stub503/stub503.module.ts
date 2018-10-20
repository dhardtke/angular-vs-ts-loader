import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub503Component} from "./stub503.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub503Component
        }])
    ],
    declarations: [
        Stub503Component
    ]
})
export class Stub503Module {

}

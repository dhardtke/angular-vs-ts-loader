import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub71Component} from "./stub71.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub71Component
        }])
    ],
    declarations: [
        Stub71Component
    ]
})
export class Stub71Module {

}

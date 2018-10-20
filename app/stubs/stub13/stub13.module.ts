import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub13Component} from "./stub13.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub13Component
        }])
    ],
    declarations: [
        Stub13Component
    ]
})
export class Stub13Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub657Component} from "./stub657.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub657Component
        }])
    ],
    declarations: [
        Stub657Component
    ]
})
export class Stub657Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub757Component} from "./stub757.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub757Component
        }])
    ],
    declarations: [
        Stub757Component
    ]
})
export class Stub757Module {

}

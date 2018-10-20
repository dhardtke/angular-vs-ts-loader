import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub702Component} from "./stub702.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub702Component
        }])
    ],
    declarations: [
        Stub702Component
    ]
})
export class Stub702Module {

}

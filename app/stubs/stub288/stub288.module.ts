import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub288Component} from "./stub288.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub288Component
        }])
    ],
    declarations: [
        Stub288Component
    ]
})
export class Stub288Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub56Component} from "./stub56.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub56Component
        }])
    ],
    declarations: [
        Stub56Component
    ]
})
export class Stub56Module {

}

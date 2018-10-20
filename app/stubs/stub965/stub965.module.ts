import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub965Component} from "./stub965.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub965Component
        }])
    ],
    declarations: [
        Stub965Component
    ]
})
export class Stub965Module {

}

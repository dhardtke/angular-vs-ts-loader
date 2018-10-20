import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub903Component} from "./stub903.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub903Component
        }])
    ],
    declarations: [
        Stub903Component
    ]
})
export class Stub903Module {

}

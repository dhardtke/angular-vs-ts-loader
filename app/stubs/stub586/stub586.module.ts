import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub586Component} from "./stub586.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub586Component
        }])
    ],
    declarations: [
        Stub586Component
    ]
})
export class Stub586Module {

}

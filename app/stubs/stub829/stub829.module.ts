import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub829Component} from "./stub829.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub829Component
        }])
    ],
    declarations: [
        Stub829Component
    ]
})
export class Stub829Module {

}

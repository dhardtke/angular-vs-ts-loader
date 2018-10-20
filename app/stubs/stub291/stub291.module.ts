import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub291Component} from "./stub291.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub291Component
        }])
    ],
    declarations: [
        Stub291Component
    ]
})
export class Stub291Module {

}

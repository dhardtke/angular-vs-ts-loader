import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub355Component} from "./stub355.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub355Component
        }])
    ],
    declarations: [
        Stub355Component
    ]
})
export class Stub355Module {

}

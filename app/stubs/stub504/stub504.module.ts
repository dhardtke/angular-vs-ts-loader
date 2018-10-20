import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub504Component} from "./stub504.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub504Component
        }])
    ],
    declarations: [
        Stub504Component
    ]
})
export class Stub504Module {

}

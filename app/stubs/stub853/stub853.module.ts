import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub853Component} from "./stub853.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub853Component
        }])
    ],
    declarations: [
        Stub853Component
    ]
})
export class Stub853Module {

}

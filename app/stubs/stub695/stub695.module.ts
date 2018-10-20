import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub695Component} from "./stub695.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub695Component
        }])
    ],
    declarations: [
        Stub695Component
    ]
})
export class Stub695Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub144Component} from "./stub144.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub144Component
        }])
    ],
    declarations: [
        Stub144Component
    ]
})
export class Stub144Module {

}

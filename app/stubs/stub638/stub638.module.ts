import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub638Component} from "./stub638.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub638Component
        }])
    ],
    declarations: [
        Stub638Component
    ]
})
export class Stub638Module {

}

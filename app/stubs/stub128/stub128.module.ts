import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub128Component} from "./stub128.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub128Component
        }])
    ],
    declarations: [
        Stub128Component
    ]
})
export class Stub128Module {

}

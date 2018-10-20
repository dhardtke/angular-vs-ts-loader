import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub463Component} from "./stub463.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub463Component
        }])
    ],
    declarations: [
        Stub463Component
    ]
})
export class Stub463Module {

}

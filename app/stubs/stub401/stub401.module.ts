import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub401Component} from "./stub401.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub401Component
        }])
    ],
    declarations: [
        Stub401Component
    ]
})
export class Stub401Module {

}

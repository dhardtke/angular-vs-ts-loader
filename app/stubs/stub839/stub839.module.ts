import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub839Component} from "./stub839.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub839Component
        }])
    ],
    declarations: [
        Stub839Component
    ]
})
export class Stub839Module {

}

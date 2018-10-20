import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub466Component} from "./stub466.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub466Component
        }])
    ],
    declarations: [
        Stub466Component
    ]
})
export class Stub466Module {

}

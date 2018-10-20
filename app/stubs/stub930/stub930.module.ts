import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub930Component} from "./stub930.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub930Component
        }])
    ],
    declarations: [
        Stub930Component
    ]
})
export class Stub930Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub979Component} from "./stub979.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub979Component
        }])
    ],
    declarations: [
        Stub979Component
    ]
})
export class Stub979Module {

}

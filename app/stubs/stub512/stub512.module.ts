import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub512Component} from "./stub512.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub512Component
        }])
    ],
    declarations: [
        Stub512Component
    ]
})
export class Stub512Module {

}

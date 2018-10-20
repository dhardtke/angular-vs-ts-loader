import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub374Component} from "./stub374.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub374Component
        }])
    ],
    declarations: [
        Stub374Component
    ]
})
export class Stub374Module {

}

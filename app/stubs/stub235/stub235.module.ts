import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub235Component} from "./stub235.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub235Component
        }])
    ],
    declarations: [
        Stub235Component
    ]
})
export class Stub235Module {

}

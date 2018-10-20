import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub29Component} from "./stub29.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub29Component
        }])
    ],
    declarations: [
        Stub29Component
    ]
})
export class Stub29Module {

}

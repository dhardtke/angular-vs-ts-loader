import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub36Component} from "./stub36.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub36Component
        }])
    ],
    declarations: [
        Stub36Component
    ]
})
export class Stub36Module {

}

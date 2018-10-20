import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub21Component} from "./stub21.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub21Component
        }])
    ],
    declarations: [
        Stub21Component
    ]
})
export class Stub21Module {

}

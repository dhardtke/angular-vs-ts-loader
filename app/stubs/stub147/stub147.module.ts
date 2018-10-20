import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub147Component} from "./stub147.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub147Component
        }])
    ],
    declarations: [
        Stub147Component
    ]
})
export class Stub147Module {

}

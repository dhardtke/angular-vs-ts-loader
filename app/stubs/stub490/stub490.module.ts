import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub490Component} from "./stub490.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub490Component
        }])
    ],
    declarations: [
        Stub490Component
    ]
})
export class Stub490Module {

}

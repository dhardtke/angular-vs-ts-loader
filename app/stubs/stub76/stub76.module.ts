import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub76Component} from "./stub76.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub76Component
        }])
    ],
    declarations: [
        Stub76Component
    ]
})
export class Stub76Module {

}

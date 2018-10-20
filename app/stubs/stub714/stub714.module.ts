import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub714Component} from "./stub714.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub714Component
        }])
    ],
    declarations: [
        Stub714Component
    ]
})
export class Stub714Module {

}

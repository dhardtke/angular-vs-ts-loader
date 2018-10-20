import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub408Component} from "./stub408.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub408Component
        }])
    ],
    declarations: [
        Stub408Component
    ]
})
export class Stub408Module {

}

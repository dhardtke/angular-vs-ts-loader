import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub542Component} from "./stub542.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub542Component
        }])
    ],
    declarations: [
        Stub542Component
    ]
})
export class Stub542Module {

}

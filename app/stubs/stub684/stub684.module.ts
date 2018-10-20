import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub684Component} from "./stub684.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub684Component
        }])
    ],
    declarations: [
        Stub684Component
    ]
})
export class Stub684Module {

}

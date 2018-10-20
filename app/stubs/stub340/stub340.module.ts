import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub340Component} from "./stub340.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub340Component
        }])
    ],
    declarations: [
        Stub340Component
    ]
})
export class Stub340Module {

}

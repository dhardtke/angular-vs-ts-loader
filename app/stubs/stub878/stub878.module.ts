import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub878Component} from "./stub878.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub878Component
        }])
    ],
    declarations: [
        Stub878Component
    ]
})
export class Stub878Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub954Component} from "./stub954.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub954Component
        }])
    ],
    declarations: [
        Stub954Component
    ]
})
export class Stub954Module {

}

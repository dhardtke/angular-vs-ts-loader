import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub508Component} from "./stub508.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub508Component
        }])
    ],
    declarations: [
        Stub508Component
    ]
})
export class Stub508Module {

}

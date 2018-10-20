import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub885Component} from "./stub885.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub885Component
        }])
    ],
    declarations: [
        Stub885Component
    ]
})
export class Stub885Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub336Component} from "./stub336.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub336Component
        }])
    ],
    declarations: [
        Stub336Component
    ]
})
export class Stub336Module {

}

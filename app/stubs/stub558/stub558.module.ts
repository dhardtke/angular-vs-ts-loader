import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub558Component} from "./stub558.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub558Component
        }])
    ],
    declarations: [
        Stub558Component
    ]
})
export class Stub558Module {

}

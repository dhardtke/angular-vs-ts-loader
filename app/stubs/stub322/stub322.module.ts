import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub322Component} from "./stub322.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub322Component
        }])
    ],
    declarations: [
        Stub322Component
    ]
})
export class Stub322Module {

}

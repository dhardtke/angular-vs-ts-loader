import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub447Component} from "./stub447.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub447Component
        }])
    ],
    declarations: [
        Stub447Component
    ]
})
export class Stub447Module {

}

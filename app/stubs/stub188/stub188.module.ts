import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub188Component} from "./stub188.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub188Component
        }])
    ],
    declarations: [
        Stub188Component
    ]
})
export class Stub188Module {

}

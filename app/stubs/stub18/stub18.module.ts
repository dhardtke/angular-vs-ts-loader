import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub18Component} from "./stub18.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub18Component
        }])
    ],
    declarations: [
        Stub18Component
    ]
})
export class Stub18Module {

}

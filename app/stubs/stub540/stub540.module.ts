import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub540Component} from "./stub540.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub540Component
        }])
    ],
    declarations: [
        Stub540Component
    ]
})
export class Stub540Module {

}

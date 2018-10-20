import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub522Component} from "./stub522.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub522Component
        }])
    ],
    declarations: [
        Stub522Component
    ]
})
export class Stub522Module {

}

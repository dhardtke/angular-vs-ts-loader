import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub274Component} from "./stub274.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub274Component
        }])
    ],
    declarations: [
        Stub274Component
    ]
})
export class Stub274Module {

}

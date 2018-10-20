import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub686Component} from "./stub686.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub686Component
        }])
    ],
    declarations: [
        Stub686Component
    ]
})
export class Stub686Module {

}

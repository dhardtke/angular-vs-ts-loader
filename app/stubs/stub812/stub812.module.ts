import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub812Component} from "./stub812.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub812Component
        }])
    ],
    declarations: [
        Stub812Component
    ]
})
export class Stub812Module {

}

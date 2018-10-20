import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub860Component} from "./stub860.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub860Component
        }])
    ],
    declarations: [
        Stub860Component
    ]
})
export class Stub860Module {

}

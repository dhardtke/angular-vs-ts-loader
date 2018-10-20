import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub743Component} from "./stub743.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub743Component
        }])
    ],
    declarations: [
        Stub743Component
    ]
})
export class Stub743Module {

}

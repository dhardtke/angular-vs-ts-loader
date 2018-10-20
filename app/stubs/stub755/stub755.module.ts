import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub755Component} from "./stub755.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub755Component
        }])
    ],
    declarations: [
        Stub755Component
    ]
})
export class Stub755Module {

}

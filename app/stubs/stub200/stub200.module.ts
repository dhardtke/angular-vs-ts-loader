import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub200Component} from "./stub200.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub200Component
        }])
    ],
    declarations: [
        Stub200Component
    ]
})
export class Stub200Module {

}

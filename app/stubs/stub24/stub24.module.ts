import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub24Component} from "./stub24.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub24Component
        }])
    ],
    declarations: [
        Stub24Component
    ]
})
export class Stub24Module {

}

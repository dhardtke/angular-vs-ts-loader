import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub387Component} from "./stub387.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub387Component
        }])
    ],
    declarations: [
        Stub387Component
    ]
})
export class Stub387Module {

}

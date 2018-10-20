import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub958Component} from "./stub958.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub958Component
        }])
    ],
    declarations: [
        Stub958Component
    ]
})
export class Stub958Module {

}

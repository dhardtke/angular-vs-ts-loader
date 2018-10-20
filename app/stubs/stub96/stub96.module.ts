import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub96Component} from "./stub96.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub96Component
        }])
    ],
    declarations: [
        Stub96Component
    ]
})
export class Stub96Module {

}

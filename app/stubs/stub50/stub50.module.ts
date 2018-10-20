import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub50Component} from "./stub50.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub50Component
        }])
    ],
    declarations: [
        Stub50Component
    ]
})
export class Stub50Module {

}

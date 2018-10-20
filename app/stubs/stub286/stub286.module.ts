import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub286Component} from "./stub286.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub286Component
        }])
    ],
    declarations: [
        Stub286Component
    ]
})
export class Stub286Module {

}

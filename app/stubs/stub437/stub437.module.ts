import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub437Component} from "./stub437.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub437Component
        }])
    ],
    declarations: [
        Stub437Component
    ]
})
export class Stub437Module {

}

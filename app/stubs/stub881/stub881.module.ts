import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub881Component} from "./stub881.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub881Component
        }])
    ],
    declarations: [
        Stub881Component
    ]
})
export class Stub881Module {

}

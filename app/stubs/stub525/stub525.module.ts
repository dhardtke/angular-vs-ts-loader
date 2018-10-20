import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub525Component} from "./stub525.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub525Component
        }])
    ],
    declarations: [
        Stub525Component
    ]
})
export class Stub525Module {

}

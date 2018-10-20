import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub187Component} from "./stub187.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub187Component
        }])
    ],
    declarations: [
        Stub187Component
    ]
})
export class Stub187Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub364Component} from "./stub364.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub364Component
        }])
    ],
    declarations: [
        Stub364Component
    ]
})
export class Stub364Module {

}

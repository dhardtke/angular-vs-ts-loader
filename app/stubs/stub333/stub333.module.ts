import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub333Component} from "./stub333.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub333Component
        }])
    ],
    declarations: [
        Stub333Component
    ]
})
export class Stub333Module {

}

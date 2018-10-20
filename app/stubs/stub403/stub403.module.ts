import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub403Component} from "./stub403.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub403Component
        }])
    ],
    declarations: [
        Stub403Component
    ]
})
export class Stub403Module {

}

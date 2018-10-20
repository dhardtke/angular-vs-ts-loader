import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub971Component} from "./stub971.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub971Component
        }])
    ],
    declarations: [
        Stub971Component
    ]
})
export class Stub971Module {

}

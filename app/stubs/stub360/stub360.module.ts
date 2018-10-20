import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub360Component} from "./stub360.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub360Component
        }])
    ],
    declarations: [
        Stub360Component
    ]
})
export class Stub360Module {

}

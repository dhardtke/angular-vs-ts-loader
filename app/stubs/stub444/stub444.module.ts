import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub444Component} from "./stub444.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub444Component
        }])
    ],
    declarations: [
        Stub444Component
    ]
})
export class Stub444Module {

}

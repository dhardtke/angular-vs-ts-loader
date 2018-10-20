import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub696Component} from "./stub696.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub696Component
        }])
    ],
    declarations: [
        Stub696Component
    ]
})
export class Stub696Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub485Component} from "./stub485.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub485Component
        }])
    ],
    declarations: [
        Stub485Component
    ]
})
export class Stub485Module {

}

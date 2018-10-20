import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub365Component} from "./stub365.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub365Component
        }])
    ],
    declarations: [
        Stub365Component
    ]
})
export class Stub365Module {

}

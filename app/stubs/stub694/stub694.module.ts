import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub694Component} from "./stub694.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub694Component
        }])
    ],
    declarations: [
        Stub694Component
    ]
})
export class Stub694Module {

}

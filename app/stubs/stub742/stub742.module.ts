import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub742Component} from "./stub742.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub742Component
        }])
    ],
    declarations: [
        Stub742Component
    ]
})
export class Stub742Module {

}

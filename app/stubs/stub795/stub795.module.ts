import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub795Component} from "./stub795.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub795Component
        }])
    ],
    declarations: [
        Stub795Component
    ]
})
export class Stub795Module {

}

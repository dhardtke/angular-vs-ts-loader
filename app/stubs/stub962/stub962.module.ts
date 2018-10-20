import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub962Component} from "./stub962.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub962Component
        }])
    ],
    declarations: [
        Stub962Component
    ]
})
export class Stub962Module {

}

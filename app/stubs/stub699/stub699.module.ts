import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub699Component} from "./stub699.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub699Component
        }])
    ],
    declarations: [
        Stub699Component
    ]
})
export class Stub699Module {

}

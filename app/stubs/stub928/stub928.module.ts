import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub928Component} from "./stub928.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub928Component
        }])
    ],
    declarations: [
        Stub928Component
    ]
})
export class Stub928Module {

}

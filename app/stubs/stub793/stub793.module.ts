import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub793Component} from "./stub793.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub793Component
        }])
    ],
    declarations: [
        Stub793Component
    ]
})
export class Stub793Module {

}

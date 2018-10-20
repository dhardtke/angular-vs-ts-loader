import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub641Component} from "./stub641.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub641Component
        }])
    ],
    declarations: [
        Stub641Component
    ]
})
export class Stub641Module {

}

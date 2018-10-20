import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub612Component} from "./stub612.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub612Component
        }])
    ],
    declarations: [
        Stub612Component
    ]
})
export class Stub612Module {

}

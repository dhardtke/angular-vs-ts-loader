import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub653Component} from "./stub653.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub653Component
        }])
    ],
    declarations: [
        Stub653Component
    ]
})
export class Stub653Module {

}

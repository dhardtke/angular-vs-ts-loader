import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub338Component} from "./stub338.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub338Component
        }])
    ],
    declarations: [
        Stub338Component
    ]
})
export class Stub338Module {

}

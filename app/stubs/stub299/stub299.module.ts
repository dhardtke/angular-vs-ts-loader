import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub299Component} from "./stub299.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub299Component
        }])
    ],
    declarations: [
        Stub299Component
    ]
})
export class Stub299Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub241Component} from "./stub241.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub241Component
        }])
    ],
    declarations: [
        Stub241Component
    ]
})
export class Stub241Module {

}

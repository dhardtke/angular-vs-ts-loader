import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub294Component} from "./stub294.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub294Component
        }])
    ],
    declarations: [
        Stub294Component
    ]
})
export class Stub294Module {

}

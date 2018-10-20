import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub442Component} from "./stub442.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub442Component
        }])
    ],
    declarations: [
        Stub442Component
    ]
})
export class Stub442Module {

}

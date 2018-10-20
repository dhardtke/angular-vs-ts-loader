import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub112Component} from "./stub112.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub112Component
        }])
    ],
    declarations: [
        Stub112Component
    ]
})
export class Stub112Module {

}

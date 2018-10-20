import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub37Component} from "./stub37.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub37Component
        }])
    ],
    declarations: [
        Stub37Component
    ]
})
export class Stub37Module {

}

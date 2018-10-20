import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub183Component} from "./stub183.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub183Component
        }])
    ],
    declarations: [
        Stub183Component
    ]
})
export class Stub183Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub23Component} from "./stub23.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub23Component
        }])
    ],
    declarations: [
        Stub23Component
    ]
})
export class Stub23Module {

}

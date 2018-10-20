import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub532Component} from "./stub532.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub532Component
        }])
    ],
    declarations: [
        Stub532Component
    ]
})
export class Stub532Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub396Component} from "./stub396.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub396Component
        }])
    ],
    declarations: [
        Stub396Component
    ]
})
export class Stub396Module {

}

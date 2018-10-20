import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub523Component} from "./stub523.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub523Component
        }])
    ],
    declarations: [
        Stub523Component
    ]
})
export class Stub523Module {

}

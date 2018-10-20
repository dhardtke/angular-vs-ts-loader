import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub773Component} from "./stub773.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub773Component
        }])
    ],
    declarations: [
        Stub773Component
    ]
})
export class Stub773Module {

}

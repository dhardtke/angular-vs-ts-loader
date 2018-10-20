import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub787Component} from "./stub787.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub787Component
        }])
    ],
    declarations: [
        Stub787Component
    ]
})
export class Stub787Module {

}

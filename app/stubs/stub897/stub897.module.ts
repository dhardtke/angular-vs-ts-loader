import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub897Component} from "./stub897.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub897Component
        }])
    ],
    declarations: [
        Stub897Component
    ]
})
export class Stub897Module {

}

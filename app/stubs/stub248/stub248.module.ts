import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub248Component} from "./stub248.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub248Component
        }])
    ],
    declarations: [
        Stub248Component
    ]
})
export class Stub248Module {

}

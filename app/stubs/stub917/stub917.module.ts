import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub917Component} from "./stub917.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub917Component
        }])
    ],
    declarations: [
        Stub917Component
    ]
})
export class Stub917Module {

}

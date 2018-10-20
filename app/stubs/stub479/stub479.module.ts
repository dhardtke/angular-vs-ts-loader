import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub479Component} from "./stub479.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub479Component
        }])
    ],
    declarations: [
        Stub479Component
    ]
})
export class Stub479Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub513Component} from "./stub513.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub513Component
        }])
    ],
    declarations: [
        Stub513Component
    ]
})
export class Stub513Module {

}

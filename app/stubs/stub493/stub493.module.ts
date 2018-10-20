import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub493Component} from "./stub493.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub493Component
        }])
    ],
    declarations: [
        Stub493Component
    ]
})
export class Stub493Module {

}

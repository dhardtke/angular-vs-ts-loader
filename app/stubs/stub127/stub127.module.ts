import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub127Component} from "./stub127.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub127Component
        }])
    ],
    declarations: [
        Stub127Component
    ]
})
export class Stub127Module {

}

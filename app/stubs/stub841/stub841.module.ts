import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub841Component} from "./stub841.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub841Component
        }])
    ],
    declarations: [
        Stub841Component
    ]
})
export class Stub841Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub908Component} from "./stub908.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub908Component
        }])
    ],
    declarations: [
        Stub908Component
    ]
})
export class Stub908Module {

}

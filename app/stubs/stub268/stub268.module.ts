import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub268Component} from "./stub268.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub268Component
        }])
    ],
    declarations: [
        Stub268Component
    ]
})
export class Stub268Module {

}

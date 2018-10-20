import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub534Component} from "./stub534.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub534Component
        }])
    ],
    declarations: [
        Stub534Component
    ]
})
export class Stub534Module {

}

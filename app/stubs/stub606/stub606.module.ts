import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub606Component} from "./stub606.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub606Component
        }])
    ],
    declarations: [
        Stub606Component
    ]
})
export class Stub606Module {

}

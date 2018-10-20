import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub342Component} from "./stub342.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub342Component
        }])
    ],
    declarations: [
        Stub342Component
    ]
})
export class Stub342Module {

}

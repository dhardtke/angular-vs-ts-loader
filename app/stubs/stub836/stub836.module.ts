import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub836Component} from "./stub836.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub836Component
        }])
    ],
    declarations: [
        Stub836Component
    ]
})
export class Stub836Module {

}

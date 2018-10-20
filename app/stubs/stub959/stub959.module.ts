import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub959Component} from "./stub959.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub959Component
        }])
    ],
    declarations: [
        Stub959Component
    ]
})
export class Stub959Module {

}

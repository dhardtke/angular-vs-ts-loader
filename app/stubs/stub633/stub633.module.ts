import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub633Component} from "./stub633.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub633Component
        }])
    ],
    declarations: [
        Stub633Component
    ]
})
export class Stub633Module {

}

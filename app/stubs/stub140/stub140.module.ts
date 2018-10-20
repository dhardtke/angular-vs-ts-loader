import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub140Component} from "./stub140.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub140Component
        }])
    ],
    declarations: [
        Stub140Component
    ]
})
export class Stub140Module {

}

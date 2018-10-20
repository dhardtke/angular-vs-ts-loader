import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub601Component} from "./stub601.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub601Component
        }])
    ],
    declarations: [
        Stub601Component
    ]
})
export class Stub601Module {

}

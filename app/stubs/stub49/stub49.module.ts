import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub49Component} from "./stub49.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub49Component
        }])
    ],
    declarations: [
        Stub49Component
    ]
})
export class Stub49Module {

}

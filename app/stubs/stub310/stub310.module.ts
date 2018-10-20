import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub310Component} from "./stub310.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub310Component
        }])
    ],
    declarations: [
        Stub310Component
    ]
})
export class Stub310Module {

}

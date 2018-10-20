import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub893Component} from "./stub893.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub893Component
        }])
    ],
    declarations: [
        Stub893Component
    ]
})
export class Stub893Module {

}

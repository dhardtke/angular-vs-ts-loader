import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub625Component} from "./stub625.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub625Component
        }])
    ],
    declarations: [
        Stub625Component
    ]
})
export class Stub625Module {

}

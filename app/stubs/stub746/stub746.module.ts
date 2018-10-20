import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub746Component} from "./stub746.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub746Component
        }])
    ],
    declarations: [
        Stub746Component
    ]
})
export class Stub746Module {

}

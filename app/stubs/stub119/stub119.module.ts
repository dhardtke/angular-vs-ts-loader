import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub119Component} from "./stub119.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub119Component
        }])
    ],
    declarations: [
        Stub119Component
    ]
})
export class Stub119Module {

}

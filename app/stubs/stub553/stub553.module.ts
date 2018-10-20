import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub553Component} from "./stub553.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub553Component
        }])
    ],
    declarations: [
        Stub553Component
    ]
})
export class Stub553Module {

}

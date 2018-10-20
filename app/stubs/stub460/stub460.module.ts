import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub460Component} from "./stub460.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub460Component
        }])
    ],
    declarations: [
        Stub460Component
    ]
})
export class Stub460Module {

}

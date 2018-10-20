import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub687Component} from "./stub687.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub687Component
        }])
    ],
    declarations: [
        Stub687Component
    ]
})
export class Stub687Module {

}

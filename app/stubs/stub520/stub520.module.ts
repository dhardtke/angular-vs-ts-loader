import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub520Component} from "./stub520.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub520Component
        }])
    ],
    declarations: [
        Stub520Component
    ]
})
export class Stub520Module {

}

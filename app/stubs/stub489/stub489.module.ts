import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub489Component} from "./stub489.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub489Component
        }])
    ],
    declarations: [
        Stub489Component
    ]
})
export class Stub489Module {

}

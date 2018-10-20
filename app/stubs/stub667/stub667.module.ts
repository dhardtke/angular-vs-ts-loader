import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub667Component} from "./stub667.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub667Component
        }])
    ],
    declarations: [
        Stub667Component
    ]
})
export class Stub667Module {

}

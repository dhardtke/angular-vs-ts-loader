import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub913Component} from "./stub913.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub913Component
        }])
    ],
    declarations: [
        Stub913Component
    ]
})
export class Stub913Module {

}

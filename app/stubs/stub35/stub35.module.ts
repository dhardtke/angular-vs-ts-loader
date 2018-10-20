import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub35Component} from "./stub35.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub35Component
        }])
    ],
    declarations: [
        Stub35Component
    ]
})
export class Stub35Module {

}

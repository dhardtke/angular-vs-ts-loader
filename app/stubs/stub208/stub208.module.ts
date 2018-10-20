import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub208Component} from "./stub208.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub208Component
        }])
    ],
    declarations: [
        Stub208Component
    ]
})
export class Stub208Module {

}

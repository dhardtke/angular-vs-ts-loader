import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub802Component} from "./stub802.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub802Component
        }])
    ],
    declarations: [
        Stub802Component
    ]
})
export class Stub802Module {

}

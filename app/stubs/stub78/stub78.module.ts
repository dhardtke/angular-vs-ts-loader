import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub78Component} from "./stub78.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub78Component
        }])
    ],
    declarations: [
        Stub78Component
    ]
})
export class Stub78Module {

}

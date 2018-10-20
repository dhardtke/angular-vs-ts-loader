import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub474Component} from "./stub474.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub474Component
        }])
    ],
    declarations: [
        Stub474Component
    ]
})
export class Stub474Module {

}

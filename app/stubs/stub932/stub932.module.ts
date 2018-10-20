import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub932Component} from "./stub932.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub932Component
        }])
    ],
    declarations: [
        Stub932Component
    ]
})
export class Stub932Module {

}

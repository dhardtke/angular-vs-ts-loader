import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub659Component} from "./stub659.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub659Component
        }])
    ],
    declarations: [
        Stub659Component
    ]
})
export class Stub659Module {

}

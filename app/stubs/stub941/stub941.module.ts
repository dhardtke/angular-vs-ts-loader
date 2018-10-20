import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub941Component} from "./stub941.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub941Component
        }])
    ],
    declarations: [
        Stub941Component
    ]
})
export class Stub941Module {

}

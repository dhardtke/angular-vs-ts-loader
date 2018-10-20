import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub936Component} from "./stub936.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub936Component
        }])
    ],
    declarations: [
        Stub936Component
    ]
})
export class Stub936Module {

}

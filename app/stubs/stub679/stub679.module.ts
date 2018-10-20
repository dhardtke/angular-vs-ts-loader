import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub679Component} from "./stub679.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub679Component
        }])
    ],
    declarations: [
        Stub679Component
    ]
})
export class Stub679Module {

}

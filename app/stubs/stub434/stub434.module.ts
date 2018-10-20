import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub434Component} from "./stub434.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub434Component
        }])
    ],
    declarations: [
        Stub434Component
    ]
})
export class Stub434Module {

}

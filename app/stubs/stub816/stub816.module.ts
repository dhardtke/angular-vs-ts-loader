import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub816Component} from "./stub816.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub816Component
        }])
    ],
    declarations: [
        Stub816Component
    ]
})
export class Stub816Module {

}

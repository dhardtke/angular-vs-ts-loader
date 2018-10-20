import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub872Component} from "./stub872.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub872Component
        }])
    ],
    declarations: [
        Stub872Component
    ]
})
export class Stub872Module {

}

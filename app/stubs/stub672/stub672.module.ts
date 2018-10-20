import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub672Component} from "./stub672.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub672Component
        }])
    ],
    declarations: [
        Stub672Component
    ]
})
export class Stub672Module {

}

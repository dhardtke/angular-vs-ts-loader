import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub984Component} from "./stub984.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub984Component
        }])
    ],
    declarations: [
        Stub984Component
    ]
})
export class Stub984Module {

}

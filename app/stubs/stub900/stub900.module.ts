import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub900Component} from "./stub900.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub900Component
        }])
    ],
    declarations: [
        Stub900Component
    ]
})
export class Stub900Module {

}

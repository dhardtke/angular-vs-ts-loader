import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub270Component} from "./stub270.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub270Component
        }])
    ],
    declarations: [
        Stub270Component
    ]
})
export class Stub270Module {

}

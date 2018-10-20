import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub104Component} from "./stub104.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub104Component
        }])
    ],
    declarations: [
        Stub104Component
    ]
})
export class Stub104Module {

}

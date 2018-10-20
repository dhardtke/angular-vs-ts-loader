import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub747Component} from "./stub747.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub747Component
        }])
    ],
    declarations: [
        Stub747Component
    ]
})
export class Stub747Module {

}

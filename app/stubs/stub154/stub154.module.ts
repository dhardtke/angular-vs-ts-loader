import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub154Component} from "./stub154.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub154Component
        }])
    ],
    declarations: [
        Stub154Component
    ]
})
export class Stub154Module {

}

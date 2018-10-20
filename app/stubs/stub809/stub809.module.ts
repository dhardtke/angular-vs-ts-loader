import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub809Component} from "./stub809.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub809Component
        }])
    ],
    declarations: [
        Stub809Component
    ]
})
export class Stub809Module {

}

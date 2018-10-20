import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub785Component} from "./stub785.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub785Component
        }])
    ],
    declarations: [
        Stub785Component
    ]
})
export class Stub785Module {

}

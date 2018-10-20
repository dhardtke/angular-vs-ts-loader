import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub922Component} from "./stub922.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub922Component
        }])
    ],
    declarations: [
        Stub922Component
    ]
})
export class Stub922Module {

}

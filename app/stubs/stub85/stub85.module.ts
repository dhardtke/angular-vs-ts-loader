import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub85Component} from "./stub85.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub85Component
        }])
    ],
    declarations: [
        Stub85Component
    ]
})
export class Stub85Module {

}

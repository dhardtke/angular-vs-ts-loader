import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub377Component} from "./stub377.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub377Component
        }])
    ],
    declarations: [
        Stub377Component
    ]
})
export class Stub377Module {

}

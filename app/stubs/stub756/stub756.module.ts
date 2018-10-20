import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub756Component} from "./stub756.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub756Component
        }])
    ],
    declarations: [
        Stub756Component
    ]
})
export class Stub756Module {

}

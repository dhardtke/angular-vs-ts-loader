import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub666Component} from "./stub666.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub666Component
        }])
    ],
    declarations: [
        Stub666Component
    ]
})
export class Stub666Module {

}

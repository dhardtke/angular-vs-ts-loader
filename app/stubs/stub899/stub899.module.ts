import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub899Component} from "./stub899.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub899Component
        }])
    ],
    declarations: [
        Stub899Component
    ]
})
export class Stub899Module {

}
